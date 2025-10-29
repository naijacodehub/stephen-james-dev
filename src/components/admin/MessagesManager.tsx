import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Mail, MailOpen } from "lucide-react";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

export function MessagesManager() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch messages");
    } else {
      setMessages(data || []);
    }
  };

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("contact_messages")
      .update({ is_read: !currentStatus })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update message status");
    } else {
      toast.success(`Message marked as ${!currentStatus ? "read" : "unread"}`);
      fetchMessages();
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Contact Messages</h2>

      <div className="grid gap-4">
        {messages.map((message) => (
          <Card key={message.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-lg flex items-center gap-2">
                  {message.name}
                  {message.is_read ? (
                    <Badge variant="secondary">Read</Badge>
                  ) : (
                    <Badge>Unread</Badge>
                  )}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{message.email}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(message.created_at).toLocaleString()}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleReadStatus(message.id, message.is_read)}
              >
                {message.is_read ? (
                  <Mail className="h-4 w-4" />
                ) : (
                  <MailOpen className="h-4 w-4" />
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm whitespace-pre-wrap">{message.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
