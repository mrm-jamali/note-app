type LogoutProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

function Logout({
  open,
  onClose,
  onConfirm,
}: LogoutProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="text-xl font-bold">
          خروج از حساب
        </h2>

        <p className="mt-3 text-gray-600">
          آیا مطمئن هستید که می‌خواهید از حساب کاربری خارج شوید؟
        </p>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border px-4 py-2 hover:bg-gray-100"
          >
            انصراف
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            خروج
          </button>

        </div>

      </div>

    </div>
  );
}

export default Logout;