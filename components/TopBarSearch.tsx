"use client";

import { Search } from "lucide-react";

type TopBarSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export default function TopBarSearch({
  value,
  onChange,
  onSearch,
}: TopBarSearchProps) {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
    }
  };

  return (
    <div className="group relative w-full max-w-2xl">
      {/* Search Button - Left */}
      <button
        type="button"
        onClick={onSearch}
        aria-label="جستجو"
        className="
          absolute left-2 top-1/2 z-10
          flex h-8 w-8
          -translate-y-1/2
          cursor-pointer
          items-center justify-center
          rounded-lg
          text-gray-400
          transition-all duration-200
          hover:bg-orange-50
          hover:text-orange-500
          active:scale-95
          group-focus-within:text-orange-500
        "
      >
        <Search size={18} strokeWidth={2} />
      </button>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="یادداشت مورد نظرتان را جستجو کنید..."
        className="
          h-11
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-white
          pr-4
          pl-12
          text-sm
          text-gray-700
          shadow-sm
          outline-none
          transition-all duration-200

          placeholder:text-gray-400

          hover:border-gray-300
          hover:shadow-md

          focus:border-orange-300
          focus:bg-white
          focus:shadow-md
          focus:ring-4
          focus:ring-orange-50
        "
      />
    </div>
  );
}