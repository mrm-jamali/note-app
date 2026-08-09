"use client";

import { useState } from "react";
import { RotateCcw, Trash2 } from "lucide-react";
import { Note } from "@/types/note";
import DeleteConfirmModal from "../DeleteConfirmModal";

type TrashRowProps = {
  note: Note;
  restoreFromTrash: (id: number) => void;
  permanentlyDeleteNote: (id: number) => void;
};

function TrashRow({
  note,
  restoreFromTrash,
  permanentlyDeleteNote,
}: TrashRowProps)


{
  const getDeletedDate = (date: string | null) => {
  if (!date) return "تاریخ ثبت نشده";

  return new Date(date).toLocaleDateString("fa-IR");
};

const getDaysLeft = (date: string | null) => {
  if (!date) return 30;

  const deletedDate = new Date(date).getTime();
  const expireDate = deletedDate + 30 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  const daysLeft = Math.ceil(
    (expireDate - now) / (24 * 60 * 60 * 1000)
  );

  return Math.max(0, daysLeft);
};
const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div
      className="
        group
        grid
        grid-cols-1
        gap-5
        rounded-2xl
        border
        border-gray-100
        bg-white
        px-5
        py-5
        shadow-sm
        transition-all
        duration-200
        hover:border-gray-200
        hover:shadow-md
        md:grid-cols-4
        md:items-center
      "
    >
      {/* Note */}
      <div>
        <h3 className="font-semibold text-gray-800 transition-colors group-hover:text-gray-900">
          {note.title}
        </h3>

        <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {note.label}
        </span>
      </div>

      {/* Deleted At */}
      <div>
  <p className="mb-1 text-xs text-gray-400 md:hidden">
    تاریخ حذف
  </p>

 <p className="text-gray-600">
  {getDeletedDate(note.deletedAt)}
</p>
</div>

      {/* Expires */}
      <div>
        <p className="mb-1 text-xs text-gray-400 md:hidden">
          منقضی‌شده
        </p>

     <span
  className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
    getDaysLeft(note.deletedAt) === 0
      ? "bg-red-50 text-red-500"
      : "bg-orange-50 text-orange-600"
  }`}
>
  {getDaysLeft(note.deletedAt) === 0
    ? "منقضی شده"
    : `${getDaysLeft(note.deletedAt)} روز`}
</span>
      </div>

      {/* Actions */}
      <div className="flex justify-self-start gap-2 md:justify-self-end">
        {/* Restore */}
        <button
          onClick={() => restoreFromTrash(note.id)}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-gray-500
            transition-all
            hover:bg-green-50
            hover:text-green-600
          "
          title="بازگرداندن"
        >
          <RotateCcw size={18} />
        </button>

        {/* Permanent Delete */}
     <button
  onClick={() => setShowDeleteModal(true)}
  className="
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-lg
    text-gray-500
    transition-all
    hover:bg-red-50
    hover:text-red-600
  "
  title="حذف دائمی"
>
  <Trash2 size={18} />
</button>
      </div>
      <DeleteConfirmModal
  open={showDeleteModal}
  onClose={() => setShowDeleteModal(false)}
  onConfirm={() => {
    permanentlyDeleteNote(note.id);
    setShowDeleteModal(false);
  }}
  title={note.title}
/>
      
    </div>
  );
}

export default TrashRow;