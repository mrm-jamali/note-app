import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="relative w-full md:w-96">
      <input
        type="text"
        placeholder="جستجوی یادداشت..."
        className="w-full rounded-xl border border-gray-200 py-3 pr-14 pl-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
      />

      <button
        className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-orange-500 text-white transition hover:bg-orange-600"
      >
        <Search size={18} />
      </button>
    </div>
  )
}

export default SearchBar