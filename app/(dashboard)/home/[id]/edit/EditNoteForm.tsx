"use client";

import { Note } from "@/types/note";
import { ArrowRight, Save } from "lucide-react";
import Link from "next/link";


type Props = {
  note: Note;
};


export default function EditNoteForm({
  note,
}: Props) {


  return (
    <div className="p-6 md:p-10" dir="rtl">


      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <Link
          href={`/home/${note.id}`}
          className="
            rounded-xl
            p-2
            hover:bg-gray-100
          "
        >
          <ArrowRight size={22}/>
        </Link>


        <div>

          <h1 className="text-2xl font-bold">
            ویرایش یادداشت
          </h1>

          <p className="text-sm text-gray-500">
            تغییر اطلاعات یادداشت
          </p>

        </div>

      </div>



      {/* Form */}

      <div
        className="
          max-w-3xl
          rounded-2xl
          border
          bg-white
          p-6
          shadow-sm
        "
      >


        <label className="mb-2 block text-sm font-medium">
          عنوان
        </label>

        <input
          defaultValue={note.title}
          className="
            mb-5
            w-full
            rounded-xl
            border
            px-4
            py-3
          "
        />



        <label className="mb-2 block text-sm font-medium">
          توضیحات
        </label>

        <textarea
          defaultValue={note.description}
          rows={6}
          className="
            mb-5
            w-full
            rounded-xl
            border
            px-4
            py-3
          "
        />



        <label className="mb-2 block text-sm font-medium">
          برچسب
        </label>

        <select
          defaultValue={note.label}
          className="
            mb-8
            w-full
            rounded-xl
            border
            px-4
            py-3
          "
        >
          <option>کاری</option>
          <option>شخصی</option>
          <option>مطالعه</option>
          <option>سلامتی</option>
        </select>



        <div className="flex justify-end gap-3">


          <Link
            href={`/home/${note.id}`}
            className="
              rounded-xl
              px-5
              py-3
              text-gray-600
              hover:bg-gray-100
            "
          >
            لغو
          </Link>



          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-orange-500
              px-5
              py-3
              text-white
              hover:bg-orange-600
            "
          >

            <Save size={18}/>

            ذخیره

          </button>


        </div>


      </div>


    </div>
  );
}