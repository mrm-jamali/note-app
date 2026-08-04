import React from "react";
import Link from "next/link";

function Login() {
  return (
    <div className="min-h-screen  flex item-center justify-center px-4 ">
      <div
        className="
    w-full
    max-w-md
    bg-white
    rounded-2xl
    shadow-lg
    p-8 
  "
      >
        <div className=" mt-3 bg-blue-500 px-2 flex flex-col items-center gap-2">
          <h2 className=" text-2xl font-bold">به اپ یادداشت ملینا خوش آمدید</h2>
          <p>لطفا وارد شوید</p>
        </div>

        <form className="flex flex-col gap-5">
          <label htmlFor="username">نام کاربری</label>
          <input
            className="
w-full
border
rounded-lg
px-4
py-3
outline-none
"
            type="text"
            placeholder="نام کاربری خود را وارد کنید"
          />
          <label className="font-medium" htmlFor="password">
            رمز عبور
          </label>
          <input
            className="
w-full
border
rounded-lg
px-4
py-3
outline-none
"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
          />
          <label className="font-medium">
            <input type="checkbox" />
            مرا به خاطر بسپار
          </label>
          <Link href="/forgot-password">فراموشی رمز عبور؟</Link>

          <button
            className="
    w-full
    rounded-lg
    bg-orange-600
    py-3
    text-white
    font-medium
    hover:bg-blue-700
    transition-colors
  "
            type="submit"
          >
            ورود
          </button>
          <Link className="text-center" href="/register">
            ثبت نام
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
