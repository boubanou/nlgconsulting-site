import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import CallbacksTable from "@/components/admin/CallbacksTable";
import { useUserRole } from "@/hooks/useUserRole";

const AdminCallbacks = () => {
  const navigate = useNavigate();
  const { hasAccess, isLoading } = useUserRole();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      // Wait for the role to be loaded before checking access
      if (!isLoading && !hasAccess) {
        navigate("/access-denied");
      }
    };

    // Only check auth when not loading
    if (!isLoading) {
      checkAuth();
    }
  }, [navigate, hasAccess, isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Callbacks - NLG Consulting</title>
      </Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Callbacks</h1>
            <p className="text-muted-foreground">Manage callback requests from visitors</p>
          </div>
          <CallbacksTable />
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminCallbacks;
