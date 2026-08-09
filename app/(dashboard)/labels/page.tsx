"use client";

import { useState } from "react";
import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";

function Labels() {
  const colors = [
    "#EF4444",
    "#22C55E",
    "#06B6D4",
    "#3B82F6",
    "#A78BFA",
    "#FACC15",
    "#FB7185",
    "#C084FC",
  ];

  const [labelName, setLabelName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!labelName.trim()) return;

    console.log({
      name: labelName,
      color: selectedColor,
    });

    setLabelName("");
  };

  return (
    <Page>
      <PageHeader
        title="برچسب‌ها"
        description="برچسب‌های یادداشت‌های خود را مدیریت کنید"
      />

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-2xl space-y-8"
      >
        {/* Label Name */}
        <div>
          <label className="mb-2 block font-medium">
            نام برچسب
          </label>

          <input
            type="text"
            value={labelName}
            onChange={(e) => setLabelName(e.target.value)}
            placeholder="مثلاً کاری"
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              outline-none
              transition
              focus:border-orange-500
              focus:ring-2
              focus:ring-orange-200
            "
          />
        </div>

        {/* Colors */}
        <div>
          <label className="mb-4 block font-medium">
            رنگ برچسب
          </label>

          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`
                  h-10
                  w-10
                  rounded-full
                  border-4
                  border-white
                  shadow
                  transition
                  hover:scale-110
                  ${
                    selectedColor === color
                      ? "ring-2 ring-gray-500 ring-offset-2"
                      : ""
                  }
                `}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setLabelName("")}
            className="
              rounded-xl
              border
              border-gray-300
              px-6
              py-3
              font-medium
              transition
              hover:bg-gray-100
            "
          >
            انصراف
          </button>

          <button
            type="submit"
            className="
              rounded-xl
              bg-orange-500
              px-6
              py-3
              font-medium
              text-white
              transition
              hover:bg-orange-600
            "
          >
            افزودن برچسب
          </button>
        </div>
      </form>
    </Page>
  );
}

export default Labels;