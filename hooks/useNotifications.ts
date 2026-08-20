"use client";

import { useEffect, useState } from "react";

export type Notification = {
  id: number;
  type: "created" | "edited" | "deleted" | "archived";
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
};

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
useEffect(() => {
  const loadNotifications = () => {
    const storedNotifications =
      localStorage.getItem("notifications");

    if (storedNotifications) {
      setNotifications(JSON.parse(storedNotifications));
    } else {
      setNotifications([]);
    }
  };

  loadNotifications();

  window.addEventListener(
    "notificationsUpdated",
    loadNotifications
  );

  return () => {
    window.removeEventListener(
      "notificationsUpdated",
      loadNotifications
    );
  };
}, []);

 const addNotification = (
  type: Notification["type"],
  title: string,
  message: string
) => {
  const notificationsEnabled =
    localStorage.getItem("notificationsEnabled");

  if (notificationsEnabled === "false") {
    return;
  }

  const newNotification: Notification = {
    id: Date.now(),
    type,
    title,
    message,
    createdAt: new Date().toISOString(),
    read: false,
  };

  const updatedNotifications = [
    newNotification,
    ...notifications,
  ];

  console.log("NEW NOTIFICATION:", newNotification);

  setNotifications(updatedNotifications);

  localStorage.setItem(
    "notifications",
    JSON.stringify(updatedNotifications)
  );

  window.dispatchEvent(
    new Event("notificationsUpdated")
  );
};

  const markAsRead = (id: number) => {
    const updatedNotifications = notifications.map(
      (notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
    );

    setNotifications(updatedNotifications);

    localStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );
    window.dispatchEvent(new Event("notificationsUpdated"));
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(
      (notification) => ({
        ...notification,
        read: true,
      })
    );

    setNotifications(updatedNotifications);

    localStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );
    window.dispatchEvent(new Event("notificationsUpdated"));
  };

  const deleteNotification = (id: number) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );

    setNotifications(updatedNotifications);

    localStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );
    window.dispatchEvent(new Event("notificationsUpdated"));
  };

  return {
    notifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  };
}