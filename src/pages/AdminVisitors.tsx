import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { useUserRole } from "@/hooks/useUserRole";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Eye, Flame, Globe2, MousePointerClick, UserRound } from "lucide-react";

type SiteFilter = "all" | "nlg" | "blocktech" | "fph";

type VisitorProfile = {
  visitor_id: string;
  first_seen_at: string;
  last_seen_at: string;
  first_site?: string | null;
  last_site?: string | null;
  first_landing_path?: string | null;
  last_path?: string | null;
  first_referrer?: string | null;
  first_utm_source?: string | null;
  first_utm_medium?: string | null;
  first_utm_campaign?: string | null;
  total_sessions: number;
  total_pageviews: number;
  intent_score: number;
  email?: string | null;
  name?: string | null;
  company?: string | null;
  phone?: string | null;
};

type VisitorSession = {
  session_id: string;
  visitor_id: string;
  site: string;
  started_at: string;
  last_seen_at: string;
  landing_path?: string | null;
  referrer?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  pageviews: number;
  score: number;
  language?: string | null;
  timezone?: string | null;
};

type VisitorEvent = {
  id: number;
  visitor_id: string;
  session_id: string;
  site: string;
  event_name: string;
  path?: string | null;
  page_title?: string | null;
  score_delta: number;
  created_at: string;
};

const AdminVisitors = () => {
  const navigate = useNavigate();
  const { hasAccess, isLoading } = useUserRole();
  const [site, setSite] = useState<SiteFilter>("all");
  const [selectedVisitor, setSelectedVisitor] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/auth"); return; }
      if (!isLoading && !hasAccess) { navigate("/access-denied"); }
    };
    if (!isLoading) checkAuth();
  }, [navigate, hasAccess, isLoading]);

  const { data, isLoading: visitorsLoading, error } = useQuery({
    queryKey: ["admin-visitors"],
    queryFn: async () => {
      const [profilesResult, sessionsResult, eventsResult] = await Promise.all([
        supabase.from("visitor_profiles").select("*").order("last_seen_at", { ascending: false }).limit(200),
        supabase.from("visitor_sessions").select("*").order("last_seen_at", { ascending: false }).limit(500),
        supabase.from("visitor_events").select("*").order("created_at", { ascending: false }).limit(1000),
      ]);

      if (profilesResult.error) throw profilesResult.error;
      if (sessionsResult.error) throw sessionsResult.error;
      if (eventsResult.error) throw eventsResult.error;

      return {
        profiles: (profilesResult.data || []) as VisitorProfile[],
        sessions: (sessionsResult.data || []) as VisitorSession[],
        events: (eventsResult.data || []) as VisitorEvent[],
      };
    },
  });

  const filteredProfiles = useMemo(() => {
    const profiles = data?.profiles || [];
    const sessions = data?.sessions || [];
    const visibleVisitorIds = new Set(
      sessions.filter((s) => site === "all" || s.site === site).map((s) => s.visitor_id)
    );
    return profiles
      .filter((p) => site === "all" || visibleVisitorIds.has(p.visitor_id))
      .sort((a, b) => b.intent_score - a.intent_score || new Date(b.last_seen_at).getTime() - new Date(a.last_seen_at).getTime());
  }, [data, site]);

  const selectedProfile = filteredProfiles.find((p) => p.visitor_id === selectedVisitor) || filteredProfiles[0] || null;
  const selectedSessions = (data?.sessions || []).filter((s) => s.visitor_id === selectedProfile?.visitor_id && (site === "all" || s.site === site));
  const selectedEvents = (data?.events || []).filter((e) => e.visitor_id === selectedProfile?.visitor_id && (site === "all" || e.site === site));

  const totalVisitors = filteredProfiles.length;
  const totalSessions = selectedProfile ? selectedSessions.length : (data?.sessions || []).filter((s) => site === "all" || s.site === site).length;
  const totalPageviews = filteredProfiles.reduce((sum, p) => sum + (p.total_pageviews || 0), 0);
  const hotVisitors = filteredProfiles.filter((p) => p.intent_score >= 20).length;

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" /></div>;
  }

  return (
    <>
      <Helmet><title>Visitors - NLG Consulting</title></Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Visitors</h1>
              <p className="text-muted-foreground">Visitor intent across NLG, Block Tech and Fractional Property Hub.</p>
            </div>
            <Tabs value={site} onValueChange={(value) => setSite(value as SiteFilter)}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="nlg">NLG</TabsTrigger>
                <TabsTrigger value="blocktech">Block Tech</TabsTrigger>
                <TabsTrigger value="fph">FPH</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[{ label: "Visitors", value: totalVisitors, icon: UserRound }, { label: "Sessions", value: totalSessions, icon: Activity }, { label: "Pageviews", value: totalPageviews, icon: Eye }, { label: "Hot visitors", value: hotVisitors, icon: Flame }].map(({ label, value, icon: Icon }) => (
              <Card key={label}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm text-muted-foreground">{label}</CardTitle>
                  <Icon className="h-4 w-4" />
                </CardHeader>
                <CardContent><div className="text-3xl font-bold">{value}</div></CardContent>
              </Card>
            ))}
          </div>

          {error && <Card><CardContent className="py-6 text-sm text-destructive">Unable to load visitor analytics. The visitor tables must be present in the same Supabase project used by the NLG admin.</CardContent></Card>}

          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-6">
            <Card>
              <CardHeader><CardTitle>Visitor profiles</CardTitle></CardHeader>
              <CardContent>
                {visitorsLoading ? (
                  <div className="py-10 text-center text-muted-foreground">Loading visitors…</div>
                ) : filteredProfiles.length === 0 ? (
                  <div className="py-10 text-center text-muted-foreground">No visitor data yet.</div>
                ) : (
                  <div className="space-y-2">
                    {filteredProfiles.map((profile) => (
                      <button key={profile.visitor_id} onClick={() => setSelectedVisitor(profile.visitor_id)} className={`w-full text-left border rounded-lg p-4 transition-colors ${selectedProfile?.visitor_id === profile.visitor_id ? "bg-accent border-primary/40" : "hover:bg-accent/60"}`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-semibold truncate">{profile.name || profile.email || profile.company || `Visitor ${profile.visitor_id.slice(0, 8)}`}</p>
                              {profile.last_site && <Badge variant="secondary">{profile.last_site}</Badge>}
                              {profile.email && <Badge>identified</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground truncate mt-1">{profile.email || profile.first_referrer || profile.last_path || "Anonymous visitor"}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                              <span>{profile.total_sessions} sessions</span>
                              <span>{profile.total_pageviews} pageviews</span>
                              <span>Last seen {new Date(profile.last_seen_at).toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="shrink-0 text-right">
                            <div className="text-2xl font-bold">{profile.intent_score}</div>
                            <div className="text-xs text-muted-foreground">intent</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader><CardTitle>Visitor detail</CardTitle></CardHeader>
                <CardContent>
                  {!selectedProfile ? <p className="text-muted-foreground">Select a visitor.</p> : (
                    <div className="space-y-4">
                      <div>
                        <p className="text-xl font-semibold">{selectedProfile.name || selectedProfile.email || `Visitor ${selectedProfile.visitor_id.slice(0, 8)}`}</p>
                        <p className="text-sm text-muted-foreground break-all">{selectedProfile.visitor_id}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div><p className="text-muted-foreground">Company</p><p className="font-medium">{selectedProfile.company || "—"}</p></div>
                        <div><p className="text-muted-foreground">Phone</p><p className="font-medium">{selectedProfile.phone || "—"}</p></div>
                        <div><p className="text-muted-foreground">Source</p><p className="font-medium">{selectedProfile.first_utm_source || selectedProfile.first_referrer || "Direct"}</p></div>
                        <div><p className="text-muted-foreground">Campaign</p><p className="font-medium">{selectedProfile.first_utm_campaign || "—"}</p></div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Latest path</p>
                        <div className="rounded-md bg-muted px-3 py-2 text-sm break-all">{selectedProfile.last_path || "—"}</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Journey</CardTitle></CardHeader>
                <CardContent>
                  {selectedEvents.length === 0 ? <p className="text-muted-foreground">No events for this visitor.</p> : (
                    <div className="space-y-3 max-h-[520px] overflow-auto pr-1">
                      {selectedEvents.slice(0, 100).map((event) => (
                        <div key={event.id} className="border rounded-lg p-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 min-w-0">
                              {event.event_name === "page_view" ? <Globe2 className="h-4 w-4 mt-0.5 shrink-0" /> : <MousePointerClick className="h-4 w-4 mt-0.5 shrink-0" />}
                              <div className="min-w-0">
                                <p className="font-medium text-sm">{event.event_name}</p>
                                <p className="text-xs text-muted-foreground break-all">{event.path || event.page_title || "—"}</p>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <Badge variant="outline">{event.site}</Badge>
                              <p className="text-xs text-muted-foreground mt-1">{new Date(event.created_at).toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminVisitors;
