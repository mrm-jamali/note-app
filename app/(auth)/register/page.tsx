"use client";


import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bowlby_One_SC } from "next/font/google";
import { useAuth } from "@/hooks/useAuth";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
});

function Register() {
  const router = useRouter();
  const { register, error } = useAuth();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    const success = register(
      name,
      username,
      password
    );

    if (success) {
      router.push("/login");
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
                فضای خودت را
                <br />
                برای یادداشت‌ها بساز.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-orange-50">
                با ساخت حساب کاربری، یادداشت‌ها، ایده‌ها و
                کارهای روزمره‌ات را در یک فضای مرتب مدیریت کن.
              </p>
            </div>

            <p className="text-sm text-orange-100">
              ساده بنویس، مرتب نگه دار ✦
            </p>
          </div>

          {/* Register Section */}
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
                  ساخت حساب کاربری ✨
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  برای شروع، اطلاعات خود را وارد کنید.
                </p>
              </div>
{error && (
  <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
    {error}
  </p>
)}
              <form className="space-y-5"  onSubmit={handleRegister}>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    نام
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="نام خود را وارد کنید"  value={name}
onChange={(e) => setName(e.target.value)}
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
                 
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="یک نام کاربری انتخاب کنید"
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
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    رمز عبور
                  </label>

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

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    تکرار رمز عبور
                  </label>

                  <input
                    id="confirmPassword"
  type="password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  placeholder="رمز عبور را دوباره وارد کنید"
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

                {/* Register Button */}
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
                  ساخت حساب
                </button>
              </form>

              {/* Login Link */}
              <div className="mt-8 text-center text-sm text-gray-500">
                قبلاً حساب ساخته‌اید؟

                <Link
                  href="/login"
                  className="mr-1 font-semibold text-orange-500 transition hover:text-orange-600"
                >
                  وارد شوید
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;