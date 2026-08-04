import { Calendar, Tag } from "lucide-react";

export default function NewNotePage() {
  return (
    <div className="mx-auto mt-10 w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mt-12 sm:p-6 lg:p-8">

      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        ایجاد یادداشت جدید
      </h1>

      <form className="space-y-6">

        {/* Title */}
        <div>
          <label className="mb-2 block font-medium">
            عنوان
          </label>

          <input
            type="text"
            placeholder="عنوان یادداشت..."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block font-medium">
            توضیحات
          </label>

          <textarea
            rows={6}
            placeholder="متن یادداشت را وارد کنید..."
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>

        {/* Label */}
        <div>
          <label className="mb-2 flex items-center gap-2 font-medium">
            <Tag size={18} />
            برچسب
          </label>

          <input
            type="text"
            placeholder="مثلاً کاری"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>

        {/* Reminder */}
        <div>
          <label className="mb-2 flex items-center gap-2 font-medium">
            <Calendar size={18} />
            یادآوری
          </label>

          <input
            type="datetime-local"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>

        {/* Colors */}
        <div>
          <p className="mb-3 font-medium">
            رنگ یادداشت
          </p>

          <div className="flex gap-3">

            <button
              type="button"
              className="h-10 w-10 rounded-full bg-red-300 ring-2 ring-transparent hover:ring-red-500"
            />

            <button
              type="button"
              className="h-10 w-10 rounded-full bg-yellow-300 ring-2 ring-transparent hover:ring-yellow-500"
            />

            <button
              type="button"
              className="h-10 w-10 rounded-full bg-green-300 ring-2 ring-transparent hover:ring-green-500"
            />

            <button
              type="button"
              className="h-10 w-10 rounded-full bg-blue-300 ring-2 ring-transparent hover:ring-blue-500"
            />

            <button
              type="button"
              className="h-10 w-10 rounded-full bg-purple-300 ring-2 ring-transparent hover:ring-purple-500"
            />

          </div>
        </div>

        {/* Buttons */}

        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-end">

          <button
            type="button"
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
          >
            انصراف
          </button>

          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            ذخیره یادداشت
          </button>

        </div>

      </form>
    </div>
  );
}