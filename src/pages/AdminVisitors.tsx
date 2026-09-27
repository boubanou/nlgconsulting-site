import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { useUserRole } from "@/hooks/useUserRole";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Eye, Flame, Globe2, MousePointerClick, UserRound } from "lucide-react";

type SiteFilter = "all" | "nlg" | "blocktech" | "fph";
type Profile = { visitor_id:string; first_seen_at:string; last_seen_at:string; first_site?:string|null; last_site?:string|null; first_referrer?:string|null; first_utm_source?:string|null; first_utm_campaign?:string|null; total_sessions:number; total_pageviews:number; intent_score:number; email?:string|null; name?:string|null; company?:string|null; phone?:string|null; last_path?:string|null };
type Session = { session_id:string; visitor_id:string; site:string; started_at:string; last_seen_at:string; pageviews:number; score:number };
type Event = { id:number; visitor_id:string; session_id:string; site:string; event_name:string; path?:string|null; page_title?:string|null; created_at:string };

const AdminVisitors = () => {
  const navigate = useNavigate();
  const { hasAccess, isLoading } = useUserRole();
  const [site, setSite] = useState<SiteFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return navigate("/auth");
      if (!isLoading && !hasAccess) navigate("/access-denied");
    };
    if (!isLoading) check();
  }, [navigate, hasAccess, isLoading]);

  const { data, isLoading: loading, error } = useQuery({
    queryKey: ["visitor-admin"],
    queryFn: async () => {
      const [p, s, e] = await Promise.all([
        supabase.from("visitor_profiles").select("*").order("last_seen_at", { ascending:false }).limit(200),
        supabase.from("visitor_sessions").select("*").order("last_seen_at", { ascending:false }).limit(500),
        supabase.from("visitor_events").select("*").order("created_at", { ascending:false }).limit(1000),
      ]);
      if (p.error) throw p.error; if (s.error) throw s.error; if (e.error) throw e.error;
      return { profiles:(p.data||[]) as Profile[], sessions:(s.data||[]) as Session[], events:(e.data||[]) as Event[] };
    },
  });

  const profiles = useMemo(() => {
    const ids = new Set((data?.sessions||[]).filter(s => site === "all" || s.site === site).map(s => s.visitor_id));
    return (data?.profiles||[]).filter(p => site === "all" || ids.has(p.visitor_id)).sort((a,b) => b.intent_score-a.intent_score);
  }, [data, site]);
  const selected = profiles.find(p => p.visitor_id === selectedId) || profiles[0] || null;
  const events = (data?.events||[]).filter(e => e.visitor_id === selected?.visitor_id && (site === "all" || e.site === site));
  const sessions = (data?.sessions||[]).filter(s => site === "all" || s.site === site);

  if (isLoading) return <div className="flex min-h-screen items-center justify-center"><div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" /></div>;

  return <>
    <Helmet><title>Visitors - NLG Consulting</title></Helmet>
    <AdminLayout><div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div><h1 className="text-3xl font-bold mb-2">Visitors & Intent</h1><p className="text-muted-foreground">Central view of NLG, Block Tech and Fractional Property Hub visitors.</p></div>
        <Tabs value={site} onValueChange={v => setSite(v as SiteFilter)}><TabsList><TabsTrigger value="all">All</TabsTrigger><TabsTrigger value="nlg">NLG</TabsTrigger><TabsTrigger value="blocktech">Block Tech</TabsTrigger><TabsTrigger value="fph">FPH</TabsTrigger></TabsList></Tabs>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[["Visitors",profiles.length,UserRound],["Sessions",sessions.length,Activity],["Pageviews",profiles.reduce((n,p)=>n+(p.total_pageviews||0),0),Eye],["Hot visitors",profiles.filter(p=>p.intent_score>=20).length,Flame]].map(([label,value,Icon]:any)=><Card key={label}><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm text-muted-foreground">{label}</CardTitle><Icon className="h-4 w-4" /></CardHeader><CardContent><div className="text-3xl font-bold">{value}</div></CardContent></Card>)}
      </div>
      {error && <Card><CardContent className="py-6 text-destructive">Visitor analytics could not be loaded.</CardContent></Card>}
      <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-6">
        <Card><CardHeader><CardTitle>Visitor profiles</CardTitle></CardHeader><CardContent>{loading?<p className="py-8 text-center text-muted-foreground">Loading…</p>:profiles.length===0?<p className="py-8 text-center text-muted-foreground">No visitor data yet.</p>:<div className="space-y-2">{profiles.map(p=><button key={p.visitor_id} onClick={()=>setSelectedId(p.visitor_id)} className={`w-full text-left rounded-lg border p-4 ${selected?.visitor_id===p.visitor_id?"bg-accent border-primary/40":"hover:bg-accent/50"}`}><div className="flex justify-between gap-4"><div className="min-w-0"><div className="flex flex-wrap gap-2 items-center"><p className="font-semibold truncate">{p.name||p.email||p.company||`Visitor ${p.visitor_id.slice(0,8)}`}</p>{p.last_site&&<Badge variant="secondary">{p.last_site}</Badge>}{p.email&&<Badge>identified</Badge>}</div><p className="text-sm text-muted-foreground truncate mt-1">{p.email||p.first_referrer||p.last_path||"Anonymous visitor"}</p><p className="text-xs text-muted-foreground mt-2">{p.total_sessions} sessions · {p.total_pageviews} pages · {new Date(p.last_seen_at).toLocaleString()}</p></div><div className="text-right"><div className="text-2xl font-bold">{p.intent_score}</div><div className="text-xs text-muted-foreground">intent</div></div></div></button>)}</div>}</CardContent></Card>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle>Visitor detail</CardTitle></CardHeader><CardContent>{!selected?<p className="text-muted-foreground">Select a visitor.</p>:<div className="space-y-4"><div><p className="text-xl font-semibold">{selected.name||selected.email||`Visitor ${selected.visitor_id.slice(0,8)}`}</p><p className="text-sm text-muted-foreground break-all">{selected.visitor_id}</p></div><div className="grid grid-cols-2 gap-3 text-sm"><div><p className="text-muted-foreground">Email</p><p className="font-medium break-all">{selected.email||"—"}</p></div><div><p className="text-muted-foreground">Company</p><p className="font-medium">{selected.company||"—"}</p></div><div><p className="text-muted-foreground">Source</p><p className="font-medium break-all">{selected.first_utm_source||selected.first_referrer||"Direct"}</p></div><div><p className="text-muted-foreground">Campaign</p><p className="font-medium">{selected.first_utm_campaign||"—"}</p></div></div><div><p className="text-sm text-muted-foreground mb-2">Latest page</p><div className="rounded-md bg-muted px-3 py-2 text-sm break-all">{selected.last_path||"—"}</div></div></div>}</CardContent></Card>
          <Card><CardHeader><CardTitle>Journey</CardTitle></CardHeader><CardContent>{events.length===0?<p className="text-muted-foreground">No events.</p>:<div className="space-y-3 max-h-[520px] overflow-auto">{events.slice(0,100).map(e=><div key={e.id} className="border rounded-lg p-3"><div className="flex justify-between gap-3"><div className="flex gap-3 min-w-0">{e.event_name==="page_view"?<Globe2 className="h-4 w-4 mt-0.5 shrink-0"/>:<MousePointerClick className="h-4 w-4 mt-0.5 shrink-0"/>}<div className="min-w-0"><p className="font-medium text-sm">{e.event_name}</p><p className="text-xs text-muted-foreground break-all">{e.path||e.page_title||"—"}</p></div></div><div className="text-right shrink-0"><Badge variant="outline">{e.site}</Badge><p className="text-xs text-muted-foreground mt-1">{new Date(e.created_at).toLocaleString()}</p></div></div></div>)}</div>}</CardContent></Card>
        </div>
      </div>
    </div></AdminLayout>
  </>;
};
export default AdminVisitors;
