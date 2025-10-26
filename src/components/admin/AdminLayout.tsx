import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Phone, 
  Menu, 
  LogOut, 
  User,
  Users as UsersIcon
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useUserRole } from "@/hooks/useUserRole";
import { Badge } from "@/components/ui/badge";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { role, isLoading, isOwner } = useUserRole();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const navItems = [
    { path: "/admin", label: t("admin.dashboard"), icon: LayoutDashboard },
    { path: "/admin/leads", label: t("admin.leads_title"), icon: Users },
    { path: "/admin/meetings", label: t("admin.meetings_title"), icon: Calendar },
    { path: "/admin/callbacks", label: t("admin.callbacks_title"), icon: Phone },
  ];

  if (isOwner) {
    navItems.push({ path: "/admin/users", label: t("admin.users_title"), icon: UsersIcon });
  }

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => mobile && setOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b border-border z-50 flex items-center justify-between px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="p-6">
              <img src="/logo.svg" alt="NLG Consulting" className="h-8 w-auto mb-6" />
              <NavLinks mobile />
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {role}
          </Badge>
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex-col">
        <div className="p-6">
          <Link to="/">
            <img src="/logo.svg" alt="NLG Consulting" className="h-8 w-auto" />
          </Link>
        </div>
        
        <div className="flex-1 px-4 py-6">
          <NavLinks />
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-accent mb-2">
            <User className="h-5 w-5" />
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="text-xs">
                {role}
              </Badge>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3" 
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            {t("nav.logout")}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64 pt-16 lg:pt-0">
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
