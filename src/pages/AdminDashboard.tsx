import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import Dashboard from "@/components/admin/Dashboard";
import { useUserRole } from "@/hooks/useUserRole";

const AdminDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { hasAccess, isLoading } = useUserRole();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      if (!isLoading && !hasAccess) {
        navigate("/access-denied");
      }
    };

    checkAuth();
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
        <title>{t("admin.dashboard")} - NLG Consulting</title>
      </Helmet>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
