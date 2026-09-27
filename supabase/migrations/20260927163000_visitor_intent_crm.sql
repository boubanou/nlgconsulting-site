-- Visitor Intent CRM v1
-- First-party, consent-gated behavioral analytics shared across NLG, Block Tech and FPH.

create extension if not exists pgcrypto;

create table if not exists public.visitor_profiles (
  id uuid primary key default gen_random_uuid(),
  visitor_id text not null unique,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  first_site text,
  last_site text,
  first_landing_path text,
  last_path text,
  first_referrer text,
  first_utm_source text,
  first_utm_medium text,
  first_utm_campaign text,
  first_utm_term text,
  first_utm_content text,
  total_sessions integer not null default 0,
  total_pageviews integer not null default 0,
  intent_score integer not null default 0,
  email text,
  name text,
  company text,
  phone text,
  identified_at timestamptz,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists public.visitor_sessions (
  id uuid primary key default gen_random_uuid(),
  session_id text not null unique,
  visitor_id text not null references public.visitor_profiles(visitor_id) on delete cascade,
  site text not null,
  started_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  landing_path text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  pageviews integer not null default 0,
  score integer not null default 0,
  user_agent text,
  language text,
  timezone text
);

create table if not exists public.visitor_events (
  id bigint generated always as identity primary key,
  visitor_id text not null references public.visitor_profiles(visitor_id) on delete cascade,
  session_id text not null,
  site text not null,
  event_name text not null,
  path text,
  page_title text,
  referrer text,
  score_delta integer not null default 0,
  properties jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_visitor_profiles_last_seen on public.visitor_profiles(last_seen_at desc);
create index if not exists idx_visitor_profiles_score on public.visitor_profiles(intent_score desc);
create index if not exists idx_visitor_events_visitor on public.visitor_events(visitor_id, created_at desc);
create index if not exists idx_visitor_events_site on public.visitor_events(site, created_at desc);
create index if not exists idx_visitor_sessions_visitor on public.visitor_sessions(visitor_id, started_at desc);

alter table public.visitor_profiles enable row level security;
alter table public.visitor_sessions enable row level security;
alter table public.visitor_events enable row level security;

drop policy if exists "authenticated can read visitor profiles" on public.visitor_profiles;
create policy "authenticated can read visitor profiles" on public.visitor_profiles for select to authenticated using (true);
drop policy if exists "authenticated can read visitor sessions" on public.visitor_sessions;
create policy "authenticated can read visitor sessions" on public.visitor_sessions for select to authenticated using (true);
drop policy if exists "authenticated can read visitor events" on public.visitor_events;
create policy "authenticated can read visitor events" on public.visitor_events for select to authenticated using (true);

create or replace function public.ingest_visitor_event(payload jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_visitor_id text := left(coalesce(payload->>'visitor_id',''), 100);
  v_session_id text := left(coalesce(payload->>'session_id',''), 100);
  v_site text := left(coalesce(payload->>'site',''), 40);
  v_event text := left(coalesce(payload->>'event_name','page_view'), 80);
  v_path text := left(coalesce(payload->>'path',''), 1000);
  v_referrer text := left(coalesce(payload->>'referrer',''), 1500);
  v_title text := left(coalesce(payload->>'page_title',''), 500);
  v_score integer := greatest(-20, least(50, coalesce((payload->>'score_delta')::integer, 0)));
  v_created_session text;
begin
  if v_visitor_id = '' or v_session_id = '' or v_site not in ('nlg','blocktech','fph') then
    raise exception 'invalid visitor payload';
  end if;

  insert into public.visitor_profiles (
    visitor_id, first_site, last_site, first_landing_path, last_path, first_referrer,
    first_utm_source, first_utm_medium, first_utm_campaign, first_utm_term, first_utm_content,
    total_pageviews, intent_score
  ) values (
    v_visitor_id, v_site, v_site, v_path, v_path, nullif(v_referrer,''),
    nullif(payload->>'utm_source',''), nullif(payload->>'utm_medium',''), nullif(payload->>'utm_campaign',''),
    nullif(payload->>'utm_term',''), nullif(payload->>'utm_content',''),
    case when v_event='page_view' then 1 else 0 end, v_score
  )
  on conflict (visitor_id) do update set
    last_seen_at = now(),
    last_site = excluded.last_site,
    last_path = excluded.last_path,
    total_pageviews = public.visitor_profiles.total_pageviews + case when v_event='page_view' then 1 else 0 end,
    intent_score = greatest(0, public.visitor_profiles.intent_score + v_score),
    email = coalesce(nullif(payload->>'email',''), public.visitor_profiles.email),
    name = coalesce(nullif(payload->>'name',''), public.visitor_profiles.name),
    company = coalesce(nullif(payload->>'company',''), public.visitor_profiles.company),
    phone = coalesce(nullif(payload->>'phone',''), public.visitor_profiles.phone),
    identified_at = case when nullif(payload->>'email','') is not null then coalesce(public.visitor_profiles.identified_at, now()) else public.visitor_profiles.identified_at end;

  insert into public.visitor_sessions (
    session_id, visitor_id, site, landing_path, referrer,
    utm_source, utm_medium, utm_campaign, utm_term, utm_content,
    pageviews, score, user_agent, language, timezone
  ) values (
    v_session_id, v_visitor_id, v_site, v_path, nullif(v_referrer,''),
    nullif(payload->>'utm_source',''), nullif(payload->>'utm_medium',''), nullif(payload->>'utm_campaign',''),
    nullif(payload->>'utm_term',''), nullif(payload->>'utm_content',''),
    case when v_event='page_view' then 1 else 0 end, v_score,
    left(coalesce(payload->>'user_agent',''), 1000), left(coalesce(payload->>'language',''), 50), left(coalesce(payload->>'timezone',''), 100)
  )
  on conflict (session_id) do nothing
  returning session_id into v_created_session;

  if v_created_session is null then
    update public.visitor_sessions set
      last_seen_at = now(),
      pageviews = pageviews + case when v_event='page_view' then 1 else 0 end,
      score = score + v_score
    where session_id = v_session_id;
  else
    update public.visitor_profiles set total_sessions = total_sessions + 1 where visitor_id = v_visitor_id;
  end if;

  insert into public.visitor_events (
    visitor_id, session_id, site, event_name, path, page_title, referrer, score_delta, properties
  ) values (
    v_visitor_id, v_session_id, v_site, v_event, nullif(v_path,''), nullif(v_title,''), nullif(v_referrer,''), v_score,
    coalesce(payload->'properties','{}'::jsonb)
  );
end;
$$;

grant execute on function public.ingest_visitor_event(jsonb) to anon, authenticated;
revoke all on public.visitor_profiles from anon;
revoke all on public.visitor_sessions from anon;
revoke all on public.visitor_events from anon;
