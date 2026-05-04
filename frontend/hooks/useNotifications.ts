"use client";

import { useEffect, useState } from "react";
import { initSocket } from "@/lib/socket";
import { Notification } from "@/types/notification";

export const useNotifications = (userId: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (!userId) return;

    const socket = initSocket(userId);

    socket.on("new_notification", (data: Notification) => {
      setNotifications((prev) => {
        // duplicate avoid
        if (prev.find((n) => n._id === data._id)) return prev;
        return [data, ...prev];
      });
    });

    return () => {
      socket.off("new_notification");
    };
  }, [userId]);

  return { notifications, setNotifications };
};