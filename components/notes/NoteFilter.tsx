
import { Filter, ChevronDown } from "lucide-react";

function NoteFilter() {
  return (
    <button
      className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-700 shadow-sm transition hover:border-orange-400 hover:shadow-md  md:w-72"
    >
      <div className="flex items-center gap-2">
        <Filter size={18} className="text-gray-500" />
        <span>همه</span>
      </div>

      <ChevronDown size={18} className="text-gray-500" />
    </button>
  );
}

export default NoteFilter;