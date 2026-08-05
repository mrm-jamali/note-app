
"use client";
import {
  Bell,
  Calendar,
  Plus,
  Search,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logout from "./Logout";

function TopBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <Logout
  open={open}
  onClose={() => setOpen(false)}
  onConfirm={() => {
    console.log("Logout");

    setOpen(false);
  }}
/>

      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="جستجو در یادداشت‌ها..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Date */}
        <div className="hidden items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-sm text-gray-600 lg:flex">
          <Calendar size={18} />
          <span>۵ مرداد ۱۴۰۵</span>
        </div>

        {/* New Note */}
        <Link
          href="/newnotes"
          className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
        >
          <Plus size={18} />
          یادداشت جدید
        </Link>

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
       
        <button className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-gray-100" onClick={() => setOpen(true)}>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-600">
            M
          </div>

          <div className="hidden text-right md:block">
            <p className="text-sm font-semibold">
              Maryam
            </p>

            <p className="text-xs text-gray-500">
              Frontend Developer
            </p>
          </div>

        </button>
       

      </div>

    </header>
  );
}

export default TopBar;