"use client";

import { useRouter } from "next/navigation";

type LogoutProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function Logout({
  open,
  onClose,
  onConfirm,
}: LogoutProps) {
  const router = useRouter();

  if (!open) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    onConfirm();

    router.replace("/login");
  };

  return (
    <div
      dir="rtl"
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/30
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-sm
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
      >
        <h2 className="text-lg font-bold text-gray-900">
          خروج از حساب
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          آیا مطمئن هستید که می‌خواهید از حساب خود خارج شوید؟
        </p>

        <div className="mt-6 flex gap-3">

          <button
            type="button"
            onClick={onClose}
            className="
              flex-1
              rounded-xl
              border
              border-gray-200
              px-4
              py-2.5
              text-sm
              text-gray-600
              transition
              hover:bg-gray-50
            "
          >
            انصراف
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="
              flex-1
              rounded-xl
              bg-red-500
              px-4
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-red-600
            "
          >
            خروج
          </button>

        </div>
      </div>
    </div>
  );
}