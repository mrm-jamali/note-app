"use client";

import { useState } from "react";

import { Note } from "@/types/note";
import { Save } from "lucide-react";
import Link from "next/link";

type Props = {
  note?: Note;
   onSubmit: (data: Omit<Note, "id">) => void;
};


export default function NoteForm({ note, onSubmit }: Props) {
  const isEdit = !!note;
  const [title, setTitle] = useState(note?.title ?? "");

const [description, setDescription] = useState(
  note?.description ?? ""
);

const [label, setLabel] = useState(
  note?.label ?? "کاری"
);

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
          <label className="mb-2 block text-sm font-medium text-gray-700">
            برچسب
          </label>

          <select
            value={label}
  onChange={(e) => setLabel(e.target.value)}
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
          >
            <option>کاری</option>
            <option>شخصی</option>
            <option>مطالعه</option>
            <option>سلامتی</option>
          </select>
        </div>

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


        <button  onClick={() =>
  onSubmit({
    title,
    description,
    label,
    color: note?.color ?? "blue",
    archived: note?.archived ?? false,
    reminder: note?.reminder ?? null,
    createdAt: note?.createdAt ?? new Date().toISOString(),
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