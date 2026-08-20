"use client";

import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotificationSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    const savedNotifications = localStorage.getItem(
      "notificationsEnabled"
    );

    setNotificationsEnabled(
      savedNotifications === null
        ? true
        : savedNotifications === "true"
    );
  }, []);

  useEffect(() => {
    if (notificationsEnabled === null) return;

    localStorage.setItem(
      "notificationsEnabled",
      String(notificationsEnabled)
    );
  }, [notificationsEnabled]);

  if (notificationsEnabled === null) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100">
          <Bell
            size={20}
            className="text-yellow-500"
          />
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">
            اعلان‌ها
          </h2>

          <p className="text-sm text-gray-400">
            مدیریت اعلان‌های برنامه
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
        <div>
          <p className="text-sm font-medium text-gray-700">
            اعلان یادآوری‌ها
          </p>

          <p className="mt-1 text-xs text-gray-400">
            دریافت اعلان هنگام رسیدن زمان یادآوری
          </p>
        </div>

        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={(e) =>
            setNotificationsEnabled(e.target.checked)
          }
          className="h-5 w-5 accent-orange-500"
        />
      </div>
    </section>
  );
}