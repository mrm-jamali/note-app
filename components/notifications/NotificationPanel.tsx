"use client";

import {
  Bell,
  Check,
  Archive,
  Pencil,
  Trash2,
  Plus,
  X,
} from "lucide-react";

import { useNotifications } from "@/hooks/useNotifications";

type Props = {
  onClose: () => void;
};

export default function NotificationPanel({ onClose }: Props) {
  const {
    notifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications();

  const getIcon = (type: string) => {
    switch (type) {
      case "created":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100">
            <Plus size={17} className="text-green-600" />
          </div>
        );

      case "edited":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100">
            <Pencil size={17} className="text-blue-600" />
          </div>
        );

      case "deleted":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100">
            <Trash2 size={17} className="text-red-600" />
          </div>
        );

      case "archived":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100">
            <Archive size={17} className="text-orange-600" />
          </div>
        );

      default:
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <Bell size={17} className="text-gray-500" />
          </div>
        );
    }
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <div className="absolute left-0 top-12 z-50 w-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-700">
            اعلان‌ها
          </h3>

          {unreadCount > 0 && (
            <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">
              {unreadCount}
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          title="بستن"
        >
          <X size={17} />
        </button>
      </div>

      {/* Mark all as read */}
      {unreadCount > 0 && (
        <button
          onClick={markAllAsRead}
          className="flex w-full items-center gap-2 border-b border-gray-100 px-4 py-2.5 text-xs text-orange-600 transition hover:bg-orange-50"
        >
          <Check size={15} />
          همه را خوانده‌شده علامت بزن
        </button>
      )}

      {/* Notifications */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex gap-3 border-b border-gray-100 px-4 py-4 transition hover:bg-gray-50 ${
                !notification.read ? "bg-orange-50/40" : ""
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              {getIcon(notification.type)}

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-700">
                  {notification.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {notification.message}
                </p>

                <p className="mt-1 text-[11px] text-gray-400">
                  {new Date(
                    notification.createdAt
                  ).toLocaleString("fa-IR", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>

              {/* Delete notification */}
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  deleteNotification(notification.id);
                }}
                className="h-fit rounded-md p-1 text-gray-300 transition hover:bg-red-50 hover:text-red-500"
                title="حذف اعلان"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))
        ) : (
          <div className="px-4 py-10 text-center">
            <Bell
              size={32}
              className="mx-auto mb-3 text-gray-300"
            />

            <p className="text-sm text-gray-400">
              اعلان جدیدی ندارید
            </p>
          </div>
        )}
      </div>
    </div>
  );
}