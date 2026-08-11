import Link from "next/link";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-gray-50 px-4"
    >
      <div className="w-full max-w-md text-center">

        <div className="mb-6 text-8xl font-bold text-orange-500">
          404
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          صفحه پیدا نشد
        </h1>

        <p className="mt-3 text-sm leading-7 text-gray-500">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد
          یا ممکن است حذف شده باشد.
        </p>

        <Link
          href="/home"
          className="
            mt-7
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-orange-500
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition
            hover:bg-orange-600
          "
        >
          بازگشت به یادداشت‌ها
        </Link>

      </div>
    </main>
  );
}