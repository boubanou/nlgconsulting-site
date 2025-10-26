import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useUserRole, UserRole } from "@/hooks/useUserRole";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { UserPlus, Trash2, Mail } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const UserManagement = () => {
  const { t } = useTranslation();
  const { isOwner } = useUserRole();
  const queryClient = useQueryClient();
  
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState<UserRole>("agent");

  // Fetch all user roles
  const { data: userRoles, isLoading } = useQuery({
    queryKey: ["allUserRoles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("user_roles")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: isOwner,
  });

  // Invite user mutation
  const inviteMutation = useMutation({
    mutationFn: async (params: { email: string; role: UserRole }) => {
      // First, invite the user via Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.admin.inviteUserByEmail(
        params.email,
        {
          redirectTo: `${window.location.origin}/auth`,
        }
      );

      if (authError) throw authError;

      // Then create a role entry (will be fulfilled when user signs up)
      const { error: roleError } = await supabase
        .from("user_roles")
        .insert({
          user_id: authData.user.id,
          role: params.role,
        });

      if (roleError) throw roleError;

      return authData;
    },
    onSuccess: () => {
      toast.success(t("admin.user_invited"));
      setNewUserEmail("");
      queryClient.invalidateQueries({ queryKey: ["allUserRoles"] });
    },
    onError: (error: any) => {
      toast.error(error.message || t("admin.invite_failed"));
    },
  });

  // Delete role mutation
  const deleteMutation = useMutation({
    mutationFn: async (userId: string) => {
      const { error } = await supabase
        .from("user_roles")
        .delete()
        .eq("user_id", userId);

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success(t("admin.user_removed"));
      queryClient.invalidateQueries({ queryKey: ["allUserRoles"] });
    },
    onError: (error: any) => {
      toast.error(error.message || t("admin.remove_failed"));
    },
  });

  // Update role mutation
  const updateRoleMutation = useMutation({
    mutationFn: async (params: { userId: string; role: UserRole }) => {
      const { error } = await supabase
        .from("user_roles")
        .update({ role: params.role })
        .eq("user_id", params.userId);

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success(t("admin.role_updated"));
      queryClient.invalidateQueries({ queryKey: ["allUserRoles"] });
    },
    onError: (error: any) => {
      toast.error(error.message || t("admin.update_failed"));
    },
  });

  if (!isOwner) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t("admin.access_denied")}</CardTitle>
          <CardDescription>{t("admin.owner_only_feature")}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const handleInvite = () => {
    if (!newUserEmail || !newUserRole) {
      toast.error(t("admin.fill_all_fields"));
      return;
    }
    inviteMutation.mutate({ email: newUserEmail, role: newUserRole });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          {t("admin.user_management")}
        </CardTitle>
        <CardDescription>{t("admin.manage_team_access")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Invite Form */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder={t("admin.email_placeholder")}
            type="email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="flex-1"
          />
          <Select value={newUserRole} onValueChange={(val) => setNewUserRole(val as UserRole)}>
            <SelectTrigger className="w-full sm:w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="agent">{t("admin.role_agent")}</SelectItem>
              <SelectItem value="owner">{t("admin.role_owner")}</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleInvite} disabled={inviteMutation.isPending}>
            <Mail className="h-4 w-4 mr-2" />
            {t("admin.invite")}
          </Button>
        </div>

        {/* Users Table */}
        <div className="border rounded-lg">
          {isLoading ? (
            <div className="p-8 text-center text-muted-foreground">
              {t("admin.loading")}
            </div>
          ) : userRoles && userRoles.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("admin.user_id")}</TableHead>
                  <TableHead>{t("admin.role")}</TableHead>
                  <TableHead>{t("admin.created_at")}</TableHead>
                  <TableHead className="text-right">{t("admin.actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userRoles.map((userRole) => (
                  <TableRow key={userRole.id}>
                    <TableCell className="font-mono text-xs">
                      {userRole.user_id.substring(0, 8)}...
                    </TableCell>
                    <TableCell>
                      <Select
                        value={userRole.role}
                        onValueChange={(val) =>
                          updateRoleMutation.mutate({
                            userId: userRole.user_id,
                            role: val as UserRole,
                          })
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agent">
                            <Badge variant="secondary">{t("admin.role_agent")}</Badge>
                          </SelectItem>
                          <SelectItem value="owner">
                            <Badge variant="default">{t("admin.role_owner")}</Badge>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(userRole.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>{t("admin.confirm_remove")}</AlertDialogTitle>
                            <AlertDialogDescription>
                              {t("admin.remove_user_warning")}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>{t("admin.cancel")}</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteMutation.mutate(userRole.user_id)}
                            >
                              {t("admin.remove")}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              {t("admin.no_users")}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserManagement;
