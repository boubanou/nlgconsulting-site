import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Session } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import LeadsTable from "@/components/admin/LeadsTable";
import MeetingsTable from "@/components/admin/MeetingsTable";
import CallbacksTable from "@/components/admin/CallbacksTable";

const Admin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) navigate("/auth");
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session) navigate("/auth");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!session) return null;

  return (
    <>
      <Helmet>
        <title>{t("admin.title")} - NLG Consulting</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold">{t("admin.title")}</h1>
              <Button onClick={handleLogout} variant="outline">
                {t("nav.logout")}
              </Button>
            </div>

            <Tabs defaultValue="leads" className="space-y-4">
              <TabsList>
                <TabsTrigger value="leads">{t("admin.leads_title")}</TabsTrigger>
                <TabsTrigger value="meetings">{t("admin.meetings_title")}</TabsTrigger>
                <TabsTrigger value="callbacks">{t("admin.callbacks_title")}</TabsTrigger>
              </TabsList>

              <TabsContent value="leads">
                <LeadsTable />
              </TabsContent>

              <TabsContent value="meetings">
                <MeetingsTable />
              </TabsContent>

              <TabsContent value="callbacks">
                <CallbacksTable />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
};

export default Admin;
