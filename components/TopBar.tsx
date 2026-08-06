"use client";

import {
  Bell,
  Calendar,
  Search,
  Settings,
} from "lucide-react";
import { useState } from "react";
import Logout from "./Logout";
type TopBarProps = {
  onMenuClick: () => void;
};

function TopBar({ onMenuClick }: TopBarProps) {
  const [open, setOpen] = useState(false);

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

      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
          <button
  onClick={onMenuClick}
  className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
>
  ☰
</button>
        <div className="flex items-center gap-4 px-4 py-4 md:px-6 lg:px-8">
          {/* Search */}
          <div className="relative flex-1 max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="جستجو در یادداشت‌ها..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            {/* Date */}
            <div className="hidden items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-sm text-gray-600 xl:flex">
              <Calendar size={18} />
              <span>۵ مرداد ۱۴۰۵</span>
            </div>

            {/* Notification */}
            <button className="relative rounded-xl p-2 transition hover:bg-gray-100">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Settings */}
            <button className="rounded-xl p-2 transition hover:bg-gray-100">
              <Settings size={20} />
            </button>

            {/* Profile */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-gray-100 md:px-3"
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
        </div>
      </header>
    </>
  );
}

export default TopBar;