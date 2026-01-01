import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import LeadsTable from "@/components/admin/LeadsTable";
import { useUserRole } from "@/hooks/useUserRole";

const AdminLeads = () => {
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
      <Helmet><title>Leads - NLG Consulting</title></Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div><h1 className="text-3xl font-bold mb-2">Leads</h1><p className="text-muted-foreground">Manage and track all incoming leads</p></div>
          <LeadsTable />
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminLeads;
