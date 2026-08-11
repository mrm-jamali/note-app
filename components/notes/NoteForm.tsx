"use client";

import { useState } from "react";

import { Note } from "@/types/note";
import { Save } from "lucide-react";
import Link from "next/link";
import { useLabels } from "@/hooks/useLabels";
import LabelPicker from "@/components/labels/LabelPicker";


type Props = {
  note?: Note;
  onSubmit: (data: Omit<Note, "id">) => void;
};

export default function NoteForm({ note, onSubmit }: Props) {
  const { labels } = useLabels();
  const isEdit = !!note;
  const [title, setTitle] = useState(note?.title ?? "");
  const [color, setColor] = useState<Note["color"]>(note?.color ?? "blue");
  const [reminder, setReminder] = useState(
  note?.reminder ?? ""
);

  const [description, setDescription] = useState(note?.description ?? "");

  const [label, setLabel] = useState(note?.label ?? "");

  return (
    <div
      dir="rtl"
      className="
        w-full
        max-w-2xl
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
        sm:p-6
      "
    >
      <div className="space-y-5">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            عنوان یادداشت
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان یادداشت را وارد کنید"
            className="
              h-11
              w-full
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              px-4
              text-sm
              outline-none
              transition
              focus:border-orange-500
              focus:bg-white
              focus:ring-2
              focus:ring-orange-100
            "
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            توضیحات
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="متن یادداشت را وارد کنید"
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-orange-500
              focus:bg-white
              focus:ring-2
              focus:ring-orange-100
            "
          />
        </div>

        {/* Label */}
        <div>
       
          <div className="relative">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                برچسب
              </label>

              <LabelPicker labels={labels} value={label} onChange={setLabel} />
            </div>

         
          </div>
        </div>
        {/* Note Color */}
<div>
  <label className="mb-3 block text-sm font-medium text-gray-700">
    رنگ یادداشت
  </label>

  <div className="flex flex-wrap gap-3">
    {[
      { name: "red", className: "bg-red-300", ring: "ring-red-500" },
      { name: "yellow", className: "bg-yellow-300", ring: "ring-yellow-500" },
      { name: "green", className: "bg-green-300", ring: "ring-green-500" },
      { name: "blue", className: "bg-blue-300", ring: "ring-blue-500" },
      { name: "purple", className: "bg-purple-300", ring: "ring-purple-500" },
    ].map((item) => (
      <button
        key={item.name}
        type="button"
        onClick={() => setColor(item.name as Note["color"])}
        className={`
          h-10
          w-10
          rounded-full
          ${item.className}
          transition
          hover:scale-110
          ${
            color === item.name
              ? `ring-2 ${item.ring} ring-offset-2`
              : ""
          }
        `}
        title={`رنگ ${item.name}`}
      />
    ))}
  </div>
</div>
      </div>
      {/* Reminder */}
<div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    یادآوری
  </label>

  <input
    type="datetime-local"
    value={reminder}
    onChange={(e) => setReminder(e.target.value)}
    className="
      h-11
      w-full
      rounded-xl
      border
      border-gray-200
      bg-gray-50
      px-4
      text-sm
      outline-none
      transition
      focus:border-orange-500
      focus:bg-white
      focus:ring-2
      focus:ring-orange-100
    "
  />
</div>

      {/* Actions */}
      <div
        className="
          mt-7
          flex
          flex-col-reverse
          gap-3
          sm:flex-row
          sm:justify-end
        "
      >
        <Link
          href="/home"
          className="
            rounded-xl
            border
            border-gray-200
            px-5
            py-2.5
            text-center
            text-sm
            text-gray-600
            transition
            hover:bg-gray-50
          "
        >
          لغو
        </Link>

        <button
          onClick={() =>
        onSubmit({
  title,
  description,
  label,
  color,
  archived: note?.archived ?? false,
  deleted: note?.deleted ?? false,
  reminder: reminder || null,
  createdAt: note?.createdAt ?? new Date().toISOString(),
  deletedAt: note?.deletedAt ?? null,
})
          }
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-orange-500
            px-5
            py-2.5
            text-sm
            text-white
            transition
            hover:bg-orange-600
            active:scale-95
          "
        >
          <Save size={17} />

          {isEdit ? "ذخیره تغییرات" : "ایجاد یادداشت"}
        </button>
      </div>
    </div>
  );
}
