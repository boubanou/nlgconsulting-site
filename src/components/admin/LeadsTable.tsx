import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit2, 
  UserPlus,
  Loader2 
} from "lucide-react";

const LeadsTable = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [localeFilter, setLocaleFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editedNotes, setEditedNotes] = useState("");

  const { data: leads, isLoading } = useQuery({
    queryKey: ["leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  // Realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel("leads-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "leads",
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ["leads"] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  const updateLeadMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: any }) => {
      const { error } = await supabase
        .from("leads")
        .update(updates)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
      toast({
        title: t("admin.success"),
        description: t("admin.lead_updated"),
      });
    },
    onError: () => {
      toast({
        title: t("admin.error"),
        description: t("admin.update_failed"),
        variant: "destructive",
      });
    },
  });

  const filteredLeads = leads?.filter((lead) => {
    const matchesSearch =
      search === "" ||
      lead.name?.toLowerCase().includes(search.toLowerCase()) ||
      lead.email?.toLowerCase().includes(search.toLowerCase()) ||
      lead.company?.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || lead.priority === priorityFilter;
    const matchesLocale = localeFilter === "all" || lead.locale === localeFilter;

    return matchesSearch && matchesStatus && matchesPriority && matchesLocale;
  });

  const handleExportCSV = () => {
    if (!filteredLeads || filteredLeads.length === 0) return;

    const headers = ["Name", "Email", "Company", "Phone", "Status", "Priority", "Locale", "Created"];
    const rows = filteredLeads.map((lead) => [
      lead.name,
      lead.email,
      lead.company || "",
      lead.phone || "",
      lead.status,
      lead.priority,
      lead.locale,
      new Date(lead.created_at).toLocaleDateString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const openLeadDetail = (lead: any) => {
    setSelectedLead(lead);
    setEditedNotes(lead.notes || "");
    setIsDrawerOpen(true);
  };

  const handleSaveNotes = () => {
    if (selectedLead) {
      updateLeadMutation.mutate({
        id: selectedLead.id,
        updates: { notes: editedNotes },
      });
    }
  };

  const handleStatusChange = (leadId: string, newStatus: string) => {
    updateLeadMutation.mutate({
      id: leadId,
      updates: { status: newStatus },
    });
  };

  const handlePriorityChange = (leadId: string, newPriority: string) => {
    updateLeadMutation.mutate({
      id: leadId,
      updates: { priority: newPriority },
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("admin.search_leads")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder={t("admin.status")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("admin.all_status")}</SelectItem>
              <SelectItem value="New">{t("admin.status_new")}</SelectItem>
              <SelectItem value="In-Review">{t("admin.status_in_review")}</SelectItem>
              <SelectItem value="Qualified">{t("admin.status_qualified")}</SelectItem>
              <SelectItem value="Lost">{t("admin.status_lost")}</SelectItem>
              <SelectItem value="Won">{t("admin.status_won")}</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder={t("admin.priority")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("admin.all_priority")}</SelectItem>
              <SelectItem value="Normal">{t("admin.priority_normal")}</SelectItem>
              <SelectItem value="High">{t("admin.priority_high")}</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-2" />
            CSV
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("admin.name")}</TableHead>
              <TableHead>{t("admin.email")}</TableHead>
              <TableHead>{t("admin.company")}</TableHead>
              <TableHead>{t("admin.phone")}</TableHead>
              <TableHead>{t("admin.status")}</TableHead>
              <TableHead>{t("admin.priority")}</TableHead>
              <TableHead>{t("admin.locale")}</TableHead>
              <TableHead>{t("admin.created")}</TableHead>
              <TableHead className="text-right">{t("admin.actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads && filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.company || "-"}</TableCell>
                  <TableCell>{lead.phone || "-"}</TableCell>
                  <TableCell>
                    <Select
                      value={lead.status}
                      onValueChange={(value) => handleStatusChange(lead.id, value)}
                    >
                      <SelectTrigger className="w-[130px]">
                        <Badge variant={lead.status === "New" ? "default" : "secondary"}>
                          {t(`admin.status_${lead.status.toLowerCase().replace("-", "_")}`)}
                        </Badge>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">{t("admin.status_new")}</SelectItem>
                        <SelectItem value="In-Review">{t("admin.status_in_review")}</SelectItem>
                        <SelectItem value="Qualified">{t("admin.status_qualified")}</SelectItem>
                        <SelectItem value="Lost">{t("admin.status_lost")}</SelectItem>
                        <SelectItem value="Won">{t("admin.status_won")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={lead.priority}
                      onValueChange={(value) => handlePriorityChange(lead.id, value)}
                    >
                      <SelectTrigger className="w-[110px]">
                        <Badge variant={lead.priority === "High" ? "destructive" : "outline"}>
                          {t(`admin.priority_${lead.priority.toLowerCase()}`)}
                        </Badge>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Normal">{t("admin.priority_normal")}</SelectItem>
                        <SelectItem value="High">{t("admin.priority_high")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{lead.locale.toUpperCase()}</Badge>
                  </TableCell>
                  <TableCell>{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openLeadDetail(lead)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center text-muted-foreground py-12">
                  {t("admin.no_data")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Lead Detail Drawer */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{t("admin.lead_details")}</SheetTitle>
          </SheetHeader>
          {selectedLead && (
            <div className="space-y-6 mt-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground">{t("admin.name")}</Label>
                  <p className="font-medium">{selectedLead.name}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">{t("admin.email")}</Label>
                  <p className="font-medium">{selectedLead.email}</p>
                </div>
                {selectedLead.company && (
                  <div>
                    <Label className="text-xs text-muted-foreground">{t("admin.company")}</Label>
                    <p className="font-medium">{selectedLead.company}</p>
                  </div>
                )}
                {selectedLead.phone && (
                  <div>
                    <Label className="text-xs text-muted-foreground">{t("admin.phone")}</Label>
                    <p className="font-medium">{selectedLead.phone}</p>
                  </div>
                )}
                {selectedLead.message && (
                  <div>
                    <Label className="text-xs text-muted-foreground">{t("admin.message")}</Label>
                    <p className="text-sm">{selectedLead.message}</p>
                  </div>
                )}
                <div>
                  <Label className="text-xs text-muted-foreground">{t("admin.locale")}</Label>
                  <Badge variant="outline">{selectedLead.locale.toUpperCase()}</Badge>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">{t("admin.created")}</Label>
                  <p className="text-sm">{new Date(selectedLead.created_at).toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>{t("admin.notes")}</Label>
                <Textarea
                  value={editedNotes}
                  onChange={(e) => setEditedNotes(e.target.value)}
                  rows={6}
                  placeholder={t("admin.add_notes")}
                />
                <Button onClick={handleSaveNotes} className="w-full">
                  {t("admin.save_notes")}
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default LeadsTable;
