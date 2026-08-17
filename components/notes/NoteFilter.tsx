"use client";

import { Filter, ChevronDown } from "lucide-react";
import { useState } from "react";

type NoteFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

function NoteFilter({ value, onChange }: NoteFilterProps) {
  const [open, setOpen] = useState(false);

  const options = [
    { value: "", label: "همه" },
    { value: "hasLabel", label: "دارای برچسب" },
    { value: "noLabel", label: "بدون برچسب" },
  ];

  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];

  return (
    <div className="relative w-full md:w-72">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-700 shadow-sm transition hover:border-orange-400 hover:shadow-md"
      >
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <span>{selectedOption.label}</span>
        </div>

        <ChevronDown
          size={18}
          className={`text-gray-500 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`w-full px-4 py-3 text-right text-sm transition hover:bg-orange-50 ${
                value === option.value
                  ? "bg-orange-50 font-medium text-orange-600"
                  : "text-gray-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default NoteFilter;