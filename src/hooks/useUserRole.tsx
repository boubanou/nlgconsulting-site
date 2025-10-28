import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type UserRole = "owner" | "agent" | null;

export const useUserRole = () => {
  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const { data: role, isLoading } = useQuery({
    queryKey: ["userRole", session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching user role:", error);
        return null;
      }

      return data?.role as UserRole;
    },
    enabled: !!session?.user?.id,
  });

  return {
    role,
    isLoading,
    isOwner: role === "owner",
    isAgent: role === "agent",
    hasAccess: role === "owner" || role === "agent",
  };
};
