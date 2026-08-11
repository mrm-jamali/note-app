"use client";
import { useState } from "react";
import { useNotes } from "@/hooks/useNotes";
import { useLabels } from "@/hooks/useLabels";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowRight,
  Bell,

  Pencil,
  Archive,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";


const noteColors = {
  blue: "bg-blue-50 border-blue-200",
  yellow: "bg-yellow-50 border-yellow-200",
  green: "bg-green-50 border-green-200",
  purple: "bg-purple-50 border-purple-200",
  red: "bg-red-50 border-red-200",
};

export default function DetailsNote() {
 const {
  notes,
  archiveNote,
  deleteNote,
} = useNotes();
  const { labels } = useLabels();

  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const note = notes.find((item) => item.id === id);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
 

  if (!note) {
    return (
      <div dir="rtl" className="p-8">
        <p className="text-gray-600">
          یادداشت پیدا نشد.
        </p>
      </div>
    );
  }

  const selectedLabel = labels.find(
    (item) => item.name === note.label
  );

  return (
    <div
      dir="rtl"
      className="mx-auto w-full max-w-4xl p-4 sm:p-6 lg:p-8"
    >
      {/* Back */}
      <div className="mb-6">
        <button
          onClick={() => router.push("/home")}
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-500
            transition
            hover:text-gray-900
          "
        >
          <ArrowRight size={18} />
          بازگشت به یادداشت‌ها
        </button>
      </div>

      {/* Note */}
      <div
        className={`
          rounded-2xl
          border
          p-6
          shadow-sm
          sm:p-8
          ${noteColors[note.color]}
        `}
      >
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {note.title}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              ایجاد شده در{" "}
              {new Date(note.createdAt).toLocaleDateString("fa-IR")}
            </p>
          </div>

         
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="mb-3 text-sm font-semibold text-gray-500">
            توضیحات
          </h2>

          <p className="whitespace-pre-wrap leading-8 text-gray-700">
            {note.description}
          </p>
        </div>

        {/* Label */}
        {note.label && (
          <div className="mt-8">
            <h2 className="mb-3 text-sm font-semibold text-gray-500">
              برچسب
            </h2>

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-3
                py-1.5
                text-sm
                font-medium
              "
              style={{
                backgroundColor: selectedLabel?.color
                  ? `${selectedLabel.color}20`
                  : "#f3f4f6",
                color:
                  selectedLabel?.color ?? "#6b7280",
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor:
                    selectedLabel?.color ?? "#9ca3af",
                }}
              />

              {note.label}
            </span>
          </div>
        )}

        {/* Reminder */}
        {note.reminder && (
          <div className="mt-8">
            <h2 className="mb-3 text-sm font-semibold text-gray-500">
              یادآوری
            </h2>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Bell
                size={18}
                className="text-yellow-500"
              />

              <span>
                {new Date(note.reminder).toLocaleString(
                  "fa-IR",
                  {
                    dateStyle: "full",
                    timeStyle: "short",
                  }
                )}
              </span>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 flex flex-wrap gap-3 border-t border-black/5 pt-6">
          <Link
            href={`/home/${note.id}/edit`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-green-500
              px-4
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-green-600
            "
          >
            <Pencil size={17} />
            ویرایش
          </Link>

    <button
  type="button"
  onClick={() => {
    archiveNote(note.id);
    router.push("/archive");
  }}
  className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    border
    border-orange-200
    bg-white
    px-4
    py-2.5
    text-sm
    font-medium
    text-orange-600
    transition
    hover:bg-orange-50
  "
>
  <Archive size={17} />
  آرشیو
</button>

   <button
  type="button"
  onClick={() => setShowDeleteModal(true)}
  className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    border
    border-red-200
    bg-white
    px-4
    py-2.5
    text-sm
    font-medium
    text-red-600
    transition
    hover:bg-red-50
  "
>
  <Trash2 size={17} />
  حذف
</button>
        </div>
      </div>
      <DeleteConfirmModal
  open={showDeleteModal}
  title={note.title}
  onClose={() => setShowDeleteModal(false)}
  onConfirm={() => {
    deleteNote(note.id);
    setShowDeleteModal(false);
    router.push("/home");
  }}
/>
    </div>
  );
}