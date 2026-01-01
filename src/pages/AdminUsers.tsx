import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import UserManagement from "@/components/admin/UserManagement";
import { useUserRole } from "@/hooks/useUserRole";

const AdminUsers = () => {
  const navigate = useNavigate();
  const { isOwner, isLoading } = useUserRole();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/auth"); return; }
      if (!isLoading && !isOwner) { navigate("/access-denied"); }
    };
    if (!isLoading) { checkAuth(); }
  }, [navigate, isOwner, isLoading]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
  }

  return (
    <>
      <Helmet><title>User Management - NLG Consulting</title></Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div><h1 className="text-3xl font-bold mb-2">User Management</h1><p className="text-muted-foreground">Invite and manage team members</p></div>
          <UserManagement />
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminUsers;
