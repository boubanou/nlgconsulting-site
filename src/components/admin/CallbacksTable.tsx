import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
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

const CallbacksTable = () => {
  const { t } = useTranslation();

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {callbacks && callbacks.length > 0 ? (
            callbacks.map((callback) => (
              <TableRow key={callback.id}>
                <TableCell className="font-medium">{callback.phone}</TableCell>
                <TableCell>
                  <Badge variant={callback.status === "New" ? "default" : "secondary"}>
                    {t(`admin.callback_${callback.status.toLowerCase()}`)}
                  </Badge>
                </TableCell>
                <TableCell>{callback.note || "-"}</TableCell>
                <TableCell>{new Date(callback.created_at).toLocaleDateString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground">
                {t("admin.no_data")}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CallbacksTable;
