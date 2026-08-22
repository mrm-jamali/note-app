"use client";

import { Bell, Calendar, Settings } from "lucide-react";
import { useState } from "react";
import Logout from "../Logout";
import { format } from "date-fns-jalali";
import { useNotifications } from "@/hooks/useNotifications";
import { useRouter } from "next/navigation";
import SearchBar from "../notes/SearchBar";
import NotificationPanel from "../notifications/NotificationPanel";

type TopBarProps = {
  onMenuClick: () => void;
};

function TopBar({ onMenuClick }: TopBarProps) {
  const [open, setOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [search, setSearch] = useState("");

  const { notifications } = useNotifications();
  const today = format(new Date(), "d MMMM yyyy");
  const router = useRouter();

  const handleSearch = () => {
    if (!search.trim()) return;

    router.push(`/search?q=${encodeURIComponent(search.trim())}`);
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  return (
    <>
      <Logout
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          console.log("Logout");
          setOpen(false);
        }}
      />

      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="px-4 py-3 md:px-6 lg:px-8">

          {/* Top row */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={onMenuClick}
              className="cursor-pointer rounded-lg p-2 hover:bg-gray-100 md:hidden"
            >
              ☰
            </button>

            {/* Search - Desktop */}
            <div className="hidden flex-1 md:block">
              <SearchBar
                value={search}
                onChange={setSearch}
                onSearch={handleSearch}
              />
            </div>

            {/* Date */}
            <div className="hidden items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-sm text-gray-600 xl:flex">
              <Calendar size={18} />
              <span>{today}</span>
            </div>

            {/* Notification + Settings */}
            <div className="flex items-center gap-2 md:gap-3">

              {/* Notification */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setShowNotifications((prev) => !prev)
                  }
                  className="relative cursor-pointer rounded-xl p-2 transition hover:bg-gray-100"
                  title="اعلان‌ها"
                >
                  <Bell size={20} />

                  {unreadCount > 0 && (
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                  )}
                </button>

                {showNotifications && (
                  <NotificationPanel
                    onClose={() => setShowNotifications(false)}
                  />
                )}
              </div>

              {/* Settings */}
              <button
                type="button"
                onClick={() => router.push("/setting")}
                className="cursor-pointer rounded-xl p-2 transition hover:bg-gray-100"
                title="تنظیمات"
              >
                <Settings size={20} />
              </button>
            </div>

            {/* Profile / Logout - Left */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="ml-auto flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-gray-100 md:px-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-600">
                M
              </div>

              <div className="hidden text-right lg:block">
                <p className="text-sm font-semibold">
                  Maryam
                </p>

                <p className="text-xs text-gray-500">
                  Frontend Developer
                </p>
              </div>
            </button>
          </div>

          {/* Search - Mobile */}
          <div className="mt-3 w-full md:hidden">
            <SearchBar
              value={search}
              onChange={setSearch}
              onSearch={handleSearch}
            />
          </div>

        </div>
      </header>
    </>
  );
}

export default TopBar;