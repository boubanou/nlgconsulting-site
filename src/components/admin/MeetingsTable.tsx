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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Mail, User, Search, Edit2, Loader2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const MeetingsTable = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [search, setSearch] = useState("");
  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editedNotes, setEditedNotes] = useState("");

  const { data: meetings, isLoading } = useQuery({
    queryKey: ["meetings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("meetings")
        .select("*")
        .order("start_ts", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  // Realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel("meetings-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "meetings",
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ["meetings"] });
          toast({
            title: t("admin.new_meeting"),
            description: t("admin.meeting_booked"),
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient, t, toast]);

  const updateMeetingMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: any }) => {
      const { error } = await supabase
        .from("meetings")
        .update(updates)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["meetings"] });
      toast({
        title: t("admin.success"),
        description: t("admin.meeting_updated"),
      });
      setIsDrawerOpen(false);
    },
    onError: () => {
      toast({
        title: t("admin.error"),
        description: t("admin.update_failed"),
        variant: "destructive",
      });
    },
  });

  const filteredMeetings = meetings?.filter((meeting) => {
    if (search === "") return true;
    return (
      meeting.attendee_name?.toLowerCase().includes(search.toLowerCase()) ||
      meeting.attendee_email?.toLowerCase().includes(search.toLowerCase())
    );
  });

  const openMeetingDetail = (meeting: any) => {
    setSelectedMeeting(meeting);
    setEditedNotes(meeting.notes || "");
    setIsDrawerOpen(true);
  };

  const handleSaveNotes = () => {
    if (selectedMeeting) {
      updateMeetingMutation.mutate({
        id: selectedMeeting.id,
        updates: { notes: editedNotes },
      });
    }
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
      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={t("admin.search_meetings")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("admin.attendee_name")}</TableHead>
              <TableHead>{t("admin.email")}</TableHead>
              <TableHead>{t("admin.start_time")}</TableHead>
              <TableHead>{t("admin.end_time")}</TableHead>
              <TableHead>{t("admin.duration")}</TableHead>
              <TableHead>{t("admin.notes")}</TableHead>
              <TableHead className="text-right">{t("admin.actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMeetings && filteredMeetings.length > 0 ? (
              filteredMeetings.map((meeting) => {
                const duration = Math.round(
                  (new Date(meeting.end_ts).getTime() - new Date(meeting.start_ts).getTime()) /
                    (1000 * 60)
                );
                return (
                  <TableRow key={meeting.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        {meeting.attendee_name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        {meeting.attendee_email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {new Date(meeting.start_ts).toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>{new Date(meeting.end_ts).toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {duration} min
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {meeting.notes || "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openMeetingDetail(meeting)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-12">
                  {t("admin.no_data")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Meeting Detail Drawer */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>{t("admin.meeting_details")}</SheetTitle>
          </SheetHeader>
          {selectedMeeting && (
            <div className="space-y-6 mt-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("admin.attendee_name")}</p>
                  <p className="font-medium">{selectedMeeting.attendee_name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("admin.email")}</p>
                  <p className="font-medium">{selectedMeeting.attendee_email}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("admin.start_time")}</p>
                  <p className="text-sm">
                    {new Date(selectedMeeting.start_ts).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("admin.end_time")}</p>
                  <p className="text-sm">
                    {new Date(selectedMeeting.end_ts).toLocaleString()}
                  </p>
                </div>
                {selectedMeeting.calendly_event_id && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Calendly Event ID</p>
                    <p className="text-xs font-mono bg-muted p-2 rounded">
                      {selectedMeeting.calendly_event_id}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">{t("admin.notes")}</p>
                <Textarea
                  value={editedNotes}
                  onChange={(e) => setEditedNotes(e.target.value)}
                  rows={6}
                  placeholder={t("admin.add_meeting_notes")}
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

export default MeetingsTable;
