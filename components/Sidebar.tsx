"use client";

import React from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { usePathname } from "next/navigation";
import { NotebookPen, Bell, Tags, Archive, Trash2 } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();
  const navs = [
    {
      title: "همه یادداشت‌ها",
      link: "/home",
      icon: NotebookPen,
    },
    {
      title: "یادآوری",
      link: "/reminder",
      icon: Bell,
    },
    {
      title: "برچسب‌ها",
      link: "/labels",
      icon: Tags,
    },
    {
      title: "آرشیو",
      link: "/archive",
      icon: Archive,
    },
    {
      title: "سطل زباله",
      link: "/trash",
      icon: Trash2,
    },
  ];

  return (
    <div className="w-60 h-250 bg-gray-100">
      <div className="mt-5 px-5 text-3xl mb-3">MeLina</div>
      <div>
        <ul className="mt-8 flex flex-col gap-2">
  {navs.map((item) => {
    const Icon = item.icon;

    return (
      <li key={item.title}>
        <Link
          href={item.link}
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
            pathname === item.link
              ? "bg-orange-100 text-black font-medium"
              : "text-black hover:bg-gray-100"
          }`}
        >
          <Icon size={20} />

          <span>{item.title}</span>
        </Link>
      </li>
    );
  })}
</ul>
      </div>
    
    </div>
  );
}

export default Sidebar;
