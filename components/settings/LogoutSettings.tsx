"use client";

import { LogOut } from "lucide-react";
import { useState } from "react";
import Logout from "../Logout";

export default function LogoutSettings() {
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <>
      <section className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
              <LogOut
                size={20}
                className="text-red-500"
              />
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">
                خروج از حساب
              </h2>

              <p className="text-sm text-gray-400">
                خروج از حساب کاربری
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLogoutOpen(true)}
            className="rounded-xl bg-red-50 px-5 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-100"
          >
            خروج
          </button>
        </div>
      </section>

      <Logout
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={() => setLogoutOpen(false)}
      />
    </>
  );
}