"use client";
import { useLabels } from "@/hooks/useLabels";
import { useState } from "react";
import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";

import { Pencil, Trash2 } from "lucide-react";
import { Label } from "@/types/label";
import EditLabelModal from "@/components/labels/EditLabelModal";


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
const {
  labels,
  addLabel,
  updateLabel,
  deleteLabel,
} = useLabels();
  const [labelName, setLabelName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [editingLabel, setEditingLabel] = useState<Label | null>(null);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!labelName.trim()) return;

  addLabel(labelName.trim(), selectedColor);

  setLabelName("");
};

 return (
  <Page>
    <PageHeader
      title="برچسب‌ها"
      description="برچسب‌های یادداشت‌های خود را مدیریت کنید"
    />

    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

      {/* ساخت برچسب */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-6 text-lg font-bold">
          ساخت برچسب جدید
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-7"
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
                bg-gray-50
                px-4
                py-3
                outline-none
                transition
                focus:border-orange-500
                focus:bg-white
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
                  style={{
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
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
        </form>
      </div>


      {/* لیست برچسب‌ها */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold">
            برچسب‌های من
          </h2>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600">
            {labels.length} برچسب
          </span>
        </div>

        {labels.length === 0 ? (
          <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-gray-300 text-sm text-gray-400">
            هنوز برچسبی ایجاد نکرده‌اید
          </div>
        ) : (
          <div className="space-y-3">
            {labels.map((label) => (
              <div
                key={label.id}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-gray-100
                  bg-gray-50
                  px-4
                  py-3
                  transition
                  hover:bg-gray-100
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-4 w-4 rounded-full"
                    style={{
                      backgroundColor: label.color,
                    }}
                  />

                  <span className="font-medium text-gray-700">
                    {label.name}
                  </span>
                </div>

           <div className="flex items-center gap-1">

  {/* ویرایش */}
  <button
    onClick={() => setEditingLabel(label)}
    className="rounded-lg p-2 text-gray-500 transition hover:bg-green-100 hover:text-green-600"
    title="ویرایش"
  >
    <Pencil size={18} />
  </button>

  {/* حذف */}
  <button
    onClick={() => deleteLabel(label.id)}
    className="rounded-lg p-2 text-gray-500 transition hover:bg-red-100 hover:text-red-600"
    title="حذف"
  >
    <Trash2 size={18} />
  </button>

</div>
                
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
    <EditLabelModal
  label={editingLabel}
  onClose={() => setEditingLabel(null)}
  onSave={(name, color) => {
    if (!editingLabel) return;

    updateLabel(
      editingLabel.id,
      name,
      color
    );
  }}
/>
  </Page>
);
}

export default Labels;