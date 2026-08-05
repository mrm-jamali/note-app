import {
  Search,
  ChevronDown,
  Trash2,
  MoreVertical,
} from "lucide-react";

function TrashToolbar() {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-end">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search in trash..."
          className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="flex h-12 items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 font-medium transition hover:bg-gray-50">
          Filter
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