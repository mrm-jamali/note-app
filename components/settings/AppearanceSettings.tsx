"use client";

import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
   <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
          <Palette size={20} className="text-purple-500" />
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">
            ظاهر
          </h2>

          <p className="text-sm text-gray-400">
            تنظیمات ظاهری برنامه
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
        <div>
          <p className="text-sm font-medium text-gray-700">
            حالت نمایش
          </p>

          <p className="mt-1 text-xs text-gray-400">
            انتخاب حالت روشن یا تاریک
          </p>
        </div>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:border-orange-500"
        >
          <option value="light">روشن</option>
          <option value="dark">تاریک</option>
        </select>
      </div>
    </section>
  );
}