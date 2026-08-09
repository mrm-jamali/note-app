import {
  Search,
  ChevronDown,
  Trash2,
  MoreVertical,
} from "lucide-react";

function TrashToolbar() {
  return (
    <div className="flex items-center justify-between gap-4">

      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="جستجو..."
          className="h-12 w-full rounded-xl border border-gray-200 bg-white pr-11 pl-4 outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="flex h-12 items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 font-medium transition hover:bg-gray-50">
          فیلتر
          <ChevronDown size={18} />
        </button>

        <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:bg-red-50 hover:text-red-600">
          <Trash2 size={20} />
        </button>

        <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-white transition hover:bg-gray-100">
          <MoreVertical size={20} />
        </button>
      </div>

    </div>
  );
}

export default TrashToolbar;