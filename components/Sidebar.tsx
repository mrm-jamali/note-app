"use client";

import React from "react";
import Link from "next/link";
import { Bowlby_One_SC } from "next/font/google";

// import { usePathname } from "next/navigation";
import { usePathname } from "next/navigation";
import { NotebookPen, Bell, Tags, Archive, Trash2 } from "lucide-react";
type SidebarProps = {
  open: boolean;
  onClose: () => void;
};
const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
});
function Sidebar({ open, onClose }: SidebarProps) {
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
    <>
    {/* فضای خالی پشت Sidebar */}
    {open && (
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 md:hidden"
      />
    )}

   
{/* Sidebar */}
<div
  className={`
    fixed top-0 right-0 z-50
    flex h-screen w-64 flex-col
    border-l border-gray-200
    bg-orange-100
    shadow-sm
    transition-transform duration-300

    ${open ? "translate-x-0" : "translate-x-full"}

    md:static
    md:translate-x-0
  `}
>
  {/* Logo */}
  <div
    className={`${bowlby.className} mt-8 mb-3  px-5 text-center text-3xl`}
  >
    <span className="text-black">Me</span>
    <span className="text-orange-500">Lina</span>
  </div>
<hr className="mt-2 mb-5 border-gray-200" />
  {/* Navigation */}
  <nav className="mt-8 px-3">
    <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-400">
      منو
    </p>

    <ul className="space-y-1.5">
      {navs.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.link;

        return (
          <li key={item.title}>
            <Link
              href={item.link}
              onClick={onClose}
              className={`
                group
                flex items-center gap-3
                rounded-xl
                px-4 py-3
                text-sm
                transition-all duration-200

                ${
                  isActive
                    ? "bg-orange-50 font-semibold text-orange-600 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={`
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-400 group-hover:text-orange-500"
                  }
                `}
              />

              <span>{item.title}</span>

              {/* Active indicator */}
              {isActive && (
                <span className="mr-auto h-2 w-2 rounded-full bg-orange-500" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>

  {/* Bottom Section */}
  <div className="mt-auto border-t border-gray-100 p-4">
    <div className="flex items-center gap-3 rounded-xl bg-orange-500 p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600">
        M
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-gray-800">
          MeLina
        </p>

        <p className="text-xs text-white">
          یادداشت‌های من
        </p>
      </div>
    </div>
    
  </div>
</div>


    </>
  );
}

export default Sidebar;
