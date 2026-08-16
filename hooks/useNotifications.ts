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
    const storedNotifications =
      localStorage.getItem("notifications");

    if (storedNotifications) {
      setNotifications(JSON.parse(storedNotifications));
    }
  }, []);

  const addNotification = (
    type: Notification["type"],
    title: string,
    message: string
  ) => {
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
  };

  return {
    notifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  };
}