import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import MeetingsTable from "@/components/admin/MeetingsTable";
import { useUserRole } from "@/hooks/useUserRole";

const AdminMeetings = () => {
  const navigate = useNavigate();
  const { hasAccess, isLoading } = useUserRole();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/auth"); return; }
      if (!isLoading && !hasAccess) { navigate("/access-denied"); }
    };
    if (!isLoading) { checkAuth(); }
  }, [navigate, hasAccess, isLoading]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
  }

  return (
    <>
      <Helmet><title>Meetings - NLG Consulting</title></Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div><h1 className="text-3xl font-bold mb-2">Meetings</h1><p className="text-muted-foreground">View scheduled and completed meetings</p></div>
          <MeetingsTable />
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminMeetings;
