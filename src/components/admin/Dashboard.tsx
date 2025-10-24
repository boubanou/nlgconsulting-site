import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Phone, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const { t } = useTranslation();

  // Get leads count for last 30 days
  const { data: leadsCount } = useQuery({
    queryKey: ["dashboard-leads-count"],
    queryFn: async () => {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { count, error } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .gte("created_at", thirtyDaysAgo.toISOString());

      if (error) throw error;
      return count || 0;
    },
  });

  // Get qualified leads rate
  const { data: qualifiedRate } = useQuery({
    queryKey: ["dashboard-qualified-rate"],
    queryFn: async () => {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { data: allLeads } = await supabase
        .from("leads")
        .select("status")
        .gte("created_at", thirtyDaysAgo.toISOString());

      if (!allLeads || allLeads.length === 0) return 0;

      const qualified = allLeads.filter(l => l.status === "Qualified").length;
      return Math.round((qualified / allLeads.length) * 100);
    },
  });

  // Get meetings count
  const { data: meetingsCount } = useQuery({
    queryKey: ["dashboard-meetings-count"],
    queryFn: async () => {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { count, error } = await supabase
        .from("meetings")
        .select("*", { count: "exact", head: true })
        .gte("created_at", thirtyDaysAgo.toISOString());

      if (error) throw error;
      return count || 0;
    },
  });

  // Get callbacks count
  const { data: callbacksCount } = useQuery({
    queryKey: ["dashboard-callbacks-count"],
    queryFn: async () => {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { count, error } = await supabase
        .from("callbacks")
        .select("*", { count: "exact", head: true })
        .gte("created_at", thirtyDaysAgo.toISOString());

      if (error) throw error;
      return count || 0;
    },
  });

  // Get recent activity
  const { data: recentLeads } = useQuery({
    queryKey: ["dashboard-recent-activity"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) throw error;
      return data;
    },
  });

  const kpis = [
    {
      title: t("admin.kpi_leads"),
      value: leadsCount,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: t("admin.kpi_qualified_rate"),
      value: `${qualifiedRate}%`,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: t("admin.kpi_meetings"),
      value: meetingsCount,
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: t("admin.kpi_callbacks"),
      value: callbacksCount,
      icon: Phone,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{t("admin.dashboard")}</h1>
        <p className="text-muted-foreground">{t("admin.dashboard_subtitle")}</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                  <Icon className={`h-4 w-4 ${kpi.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{kpi.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {t("admin.last_30_days")}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>{t("admin.recent_activity")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLeads && recentLeads.length > 0 ? (
              recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">{lead.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{lead.status}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-8">
                {t("admin.no_data")}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
