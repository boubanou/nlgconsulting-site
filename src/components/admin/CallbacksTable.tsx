import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Clock, User, Loader2, GripVertical } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const CallbacksTable = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedCallback, setSelectedCallback] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editedNote, setEditedNote] = useState("");

  const { data: callbacks, isLoading } = useQuery({
    queryKey: ["callbacks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("callbacks")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  // Realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel("callbacks-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "callbacks",
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ["callbacks"] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  const updateCallbackMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: any }) => {
      const { error } = await supabase
        .from("callbacks")
        .update(updates)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["callbacks"] });
      toast({
        title: t("admin.success"),
        description: t("admin.callback_updated"),
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

  const handleStatusChange = (callbackId: string, newStatus: string) => {
    updateCallbackMutation.mutate({
      id: callbackId,
      updates: { status: newStatus },
    });
  };

  const openCallbackDetail = (callback: any) => {
    setSelectedCallback(callback);
    setEditedNote(callback.note || "");
    setIsDrawerOpen(true);
  };

  const handleSaveNote = () => {
    if (selectedCallback) {
      updateCallbackMutation.mutate({
        id: selectedCallback.id,
        updates: { note: editedNote },
      });
    }
  };

  const statusColumns = [
    { key: "New", label: t("admin.callback_new"), variant: "default" as const },
    { key: "Attempted", label: t("admin.callback_attempted"), variant: "secondary" as const },
    { key: "Reached", label: t("admin.callback_reached"), variant: "outline" as const },
    { key: "Closed", label: t("admin.callback_closed"), variant: "outline" as const },
  ];

  const getCallbacksByStatus = (status: string) => {
    return callbacks?.filter((cb) => cb.status === status) || [];
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
      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statusColumns.map((column) => {
          const columnCallbacks = getCallbacksByStatus(column.key);
          return (
            <div key={column.key} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Badge variant={column.variant}>{column.label}</Badge>
                  <span className="text-muted-foreground">({columnCallbacks.length})</span>
                </h3>
              </div>
              <div className="space-y-2">
                {columnCallbacks.map((callback) => (
                  <Card
                    key={callback.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => openCallbackDetail(callback)}
                  >
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        {callback.phone}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 space-y-2">
                      {callback.note && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {callback.note}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {new Date(callback.created_at).toLocaleDateString()}
                      </div>
                      {callback.timezone && (
                        <div className="text-xs text-muted-foreground">
                          🌍 {callback.timezone}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
                {columnCallbacks.length === 0 && (
                  <div className="text-center p-8 text-sm text-muted-foreground border-2 border-dashed rounded-lg">
                    {t("admin.no_callbacks")}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Callback Detail Drawer */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>{t("admin.callback_details")}</SheetTitle>
          </SheetHeader>
          {selectedCallback && (
            <div className="space-y-6 mt-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("admin.phone")}</p>
                  <p className="font-medium text-lg">{selectedCallback.phone}</p>
                </div>
                {selectedCallback.timezone && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t("admin.timezone")}</p>
                    <p className="font-medium">{selectedCallback.timezone}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("admin.status")}</p>
                  <div className="flex gap-2 flex-wrap">
                    {statusColumns.map((status) => (
                      <Button
                        key={status.key}
                        size="sm"
                        variant={selectedCallback.status === status.key ? "default" : "outline"}
                        onClick={() => handleStatusChange(selectedCallback.id, status.key)}
                      >
                        {status.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("admin.created")}</p>
                  <p className="text-sm">{new Date(selectedCallback.created_at).toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">{t("admin.note")}</p>
                <Textarea
                  value={editedNote}
                  onChange={(e) => setEditedNote(e.target.value)}
                  rows={6}
                  placeholder={t("admin.add_note")}
                />
                <Button onClick={handleSaveNote} className="w-full">
                  {t("admin.save_note")}
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CallbacksTable;
