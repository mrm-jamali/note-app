import { Info } from "lucide-react";

function TrashHeader() {
  return (
    <div className="mb-6 flex flex-col gap-3 md:mb-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
        سطل زباله
      </h1>

      <div className="flex items-start gap-2 text-sm text-gray-500 sm:items-center sm:text-base">
        <Info
          size={18}
          className="mt-0.5 shrink-0 sm:mt-0"
        />

        <p className="leading-6">
         یادداشت‌های موجود در سطل زباله پس از ۳۰ روز حذف می‌شوند.
        </p>
      </div>
    </div>
  );
}

export default TrashHeader;