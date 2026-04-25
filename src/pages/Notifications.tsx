import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { Bell, CheckCircle2, XCircle } from "lucide-react";

type Notification = {
  id: string;
  message: string;
  status: string;
  created_at: string;
};

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // ✅ FETCH FUNCTION
  const fetchNotifications = async () => {
    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setNotifications(data);
    }
  };

  // ✅ SINGLE USEEFFECT (FETCH + REALTIME)
  useEffect(() => {
    fetchNotifications();

    const channel = supabase
      .channel("notifications-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "notifications",
        },
        (payload) => {
          console.log("Realtime:", payload);

          // 🔥 HANDLE LIVE UPDATES
          if (payload.eventType === "INSERT") {
            setNotifications((prev) => [payload.new as Notification, ...prev]);
          }

          if (payload.eventType === "UPDATE") {
            setNotifications((prev) =>
              prev.map((n) =>
                n.id === (payload.new as Notification).id
                  ? (payload.new as Notification)
                  : n
              )
            );
          }

          if (payload.eventType === "DELETE") {
            setNotifications((prev) =>
              prev.filter((n) => n.id !== (payload.old as Notification).id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // ✅ ICON LOGIC
  const getIcon = (status: string) => {
    if (status === "accepted")
      return <CheckCircle2 className="text-green-500 w-6 h-6" />;
    if (status === "rejected")
      return <XCircle className="text-red-500 w-6 h-6" />;
    return <Bell className="text-yellow-500 w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f6f2] to-[#f3eee9] p-6">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-semibold flex items-center gap-3">
          <Bell className="w-7 h-7 text-primary" />
          Notifications
        </h1>
        <p className="text-muted-foreground mt-1">
          Stay updated with your bookings
        </p>
      </div>

      {/* LIST */}
      <div className="max-w-3xl mx-auto space-y-4">

        {notifications.length === 0 && (
          <div className="text-center text-muted-foreground mt-20">
            No notifications yet
          </div>
        )}

        {notifications.map((n) => (
          <div
            key={n.id}
            className="flex items-center gap-4 p-5 rounded-2xl 
            bg-white/80 backdrop-blur-md 
            border border-white/40
            shadow-sm hover:shadow-lg 
            transition-all duration-300"
          >
            {/* ICON */}
            <div className="p-2 rounded-full bg-white shadow-sm">
              {getIcon(n.status)}
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <p className="font-medium text-[15px]">
                {n.message}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {new Date(n.created_at).toLocaleString()}
              </p>
            </div>

            {/* STATUS BADGE */}
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                n.status === "accepted"
                  ? "bg-green-100 text-green-700"
                  : n.status === "rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {n.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;