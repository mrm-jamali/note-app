"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Label } from "@/types/label";

type Props = {
  label: Label | null;
  onClose: () => void;
  onSave: (name: string, color: string) => void;
};

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

export default function EditLabelModal({
  label,
  onClose,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    if (label) {
      setName(label.name);
      setColor(label.color);
    }
  }, [label]);

  if (!label) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    onSave(name.trim(), color);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        dir="rtl"
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            ویرایش برچسب
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              نام برچسب
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Color */}
          <div>
            <label className="mb-4 block text-sm font-medium text-gray-700">
              رنگ برچسب
            </label>

            <div className="flex flex-wrap gap-4">
              {colors.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setColor(item)}
                  className={`h-10 w-10 rounded-full border-4 border-white shadow transition hover:scale-110 ${
                    color === item
                      ? "ring-2 ring-gray-500 ring-offset-2"
                      : ""
                  }`}
                  style={{
                    backgroundColor: item,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-gray-200 px-5 py-3 text-sm text-gray-600 transition hover:bg-gray-50"
            >
              لغو
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-orange-500 px-5 py-3 text-sm text-white transition hover:bg-orange-600"
            >
              ذخیره تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}