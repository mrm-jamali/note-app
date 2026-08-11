"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Label } from "@/types/label";

type Props = {
  labels: Label[];
  value: string;
  onChange: (value: string) => void;
};

export default function LabelPicker({
  labels,
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const selectedLabel = labels.find(
    (item) => item.name === value
  );

  const handleSelect = (name: string) => {
    onChange(name);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Selected Label */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          h-11
          w-full
          items-center
          justify-between
          rounded-xl
          border
          border-gray-200
          bg-gray-50
          px-4
          text-sm
          transition
          hover:bg-white
          focus:border-orange-500
          focus:bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-orange-100
        "
      >
        <div className="flex items-center gap-2">
          {selectedLabel ? (
            <>
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: selectedLabel.color,
                }}
              />

              <span className="text-gray-700">
                {selectedLabel.name}
              </span>
            </>
          ) : (
            <span className="text-gray-400">
              انتخاب برچسب
            </span>
          )}
        </div>

        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            z-50
            mt-2
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            bg-white
            p-1
            shadow-lg
          "
        >
          {/* بدون برچسب */}
          <button
            type="button"
            onClick={() => handleSelect("")}
            className="
              flex
              w-full
              items-center
              rounded-lg
              px-3
              py-2.5
              text-sm
              text-gray-500
              transition
              hover:bg-gray-100
            "
          >
            بدون برچسب

            {value === "" && (
              <Check
                size={16}
                className="mr-auto text-orange-500"
              />
            )}
          </button>

          {/* Labels */}
          {labels.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.name)}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-lg
                px-3
                py-2.5
                text-sm
                text-gray-700
                transition
                hover:bg-gray-100
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span>{item.name}</span>
              </div>

              {value === item.name && (
                <Check
                  size={16}
                  className="text-orange-500"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}