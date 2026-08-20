import { User } from "lucide-react";

export default function ProfileSettings() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
          <User
            size={20}
            className="text-orange-500"
          />
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">
            پروفایل
          </h2>

          <p className="text-sm text-gray-400">
            اطلاعات حساب کاربری
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-gray-600">
            نام
          </label>

          <input
            type="text"
            value="Maryam"
            readOnly
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-600">
            نقش
          </label>

          <input
            type="text"
            value="Frontend Developer"
            readOnly
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
          />
        </div>
      </div>
    </section>
  );
}