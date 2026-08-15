"use client";

import React from "react";
import Link from "next/link";
import { Bowlby_One_SC } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
});

function Login() {
  const router = useRouter();
  const { login, error } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      return;
    }

    const success = login(username, password);

    if (success) {
      if (remember) {
        localStorage.setItem("rememberMe", "true");
      }

      router.push("/home");
    }
  };
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          
          {/* Left Section */}
          <div className="hidden bg-orange-500 p-12 text-white md:flex md:flex-col md:justify-between">
            <div>
              <div className={`${bowlby.className} text-4xl`}>
                <span className="text-black">Me</span>
                <span className="text-white">Lina</span>
              </div>

              <h2 className="mt-10 text-3xl font-bold leading-relaxed">
                یادداشت‌هایت را
                <br />
                ساده‌تر مدیریت کن.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-orange-50">
                ایده‌ها، کارها و یادداشت‌های روزمره‌ات را
                در یک فضای ساده و مرتب مدیریت کن.
              </p>
            </div>

            <p className="text-sm text-orange-100">
              فضای شخصی برای یادداشت‌های تو ✦
            </p>
          </div>

          {/* Login Section */}
          <div className="flex items-center justify-center p-7 sm:p-10 md:p-12">
            <div className="w-full max-w-md">

              {/* Mobile Logo */}
              <div
                className={`${bowlby.className} mb-10 text-center text-3xl md:hidden`}
              >
                <span className="text-black">Me</span>
                <span className="text-orange-500">Lina</span>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  خوش آمدید 👋
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  برای ورود به حساب کاربری خود وارد شوید.
                </p>
              </div>
              {error && (
  <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
    {error}
  </p>
)}
<form
  onSubmit={handleLogin}
  className="space-y-5"
>
                
                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    نام کاربری
                  </label>

                  <input
                    id="username"
                    type="text" value={username}
onChange={(e) => setUsername(e.target.value)}
                    placeholder="نام کاربری خود را وارد کنید"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      py-3.5
                      text-sm
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-orange-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-orange-100
                    "
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      رمز عبور
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-medium text-orange-500 transition hover:text-orange-600"
                    >
                      فراموشی رمز عبور؟
                    </Link>
                  </div>

                  <input
                     id="password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="رمز عبور خود را وارد کنید"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      py-3.5
                      text-sm
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-orange-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-orange-100
                    "
                  />
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">
               <input
  id="remember"
  type="checkbox"
  checked={remember}
  onChange={(e) => setRemember(e.target.checked)}
  className="h-4 w-4 rounded border-gray-300 accent-orange-500"
/>

                  <label
                    htmlFor="remember"
                    className="cursor-pointer text-sm text-gray-600"
                  >
                    مرا به خاطر بسپار
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="
                    w-full
                    rounded-xl
                    bg-orange-500
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    duration-200
                    hover:bg-orange-600
                    hover:shadow-md
                    active:scale-[0.99]
                  "
                >
                  ورود به حساب
                </button>
              </form>

              {/* Register */}
              <div className="mt-8 text-center text-sm text-gray-500">
                حساب کاربری ندارید؟

                <Link
                  href="/register"
                  className="mr-1 font-semibold text-orange-500 transition hover:text-orange-600"
                >
                  ثبت نام کنید
                </Link>
              </div>
              {/* Demo Account */}
<div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-center">
  
  <p className="mt-3 text-sm text-gray-600">
    نام کاربری:
    <span className="mr-1 font-semibold text-gray-900">
      demo
    </span>
  </p>

  <p className="mt-1 text-sm text-gray-600">
    رمز عبور:
    <span className="mr-1 font-semibold text-gray-900">
      123
    </span>
  </p>

  
</div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;