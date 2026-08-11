"use client";

import { Bell, Pencil, Palette, Trash2, Eye,Archive, ArchiveRestore } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Note } from "@/types/note";
import Link from "next/link";
import DeleteConfirmModal from "../DeleteConfirmModal";
import { useLabels } from "@/hooks/useLabels";


const noteColors = {
  blue: "bg-blue-50 border-blue-200",
  yellow: "bg-yellow-50 border-yellow-200",
  green: "bg-green-50 border-green-200",
  purple: "bg-purple-50 border-purple-200",
  red: "bg-red-50 border-red-200",
};


type NoteCardProps = {
  note: Note;
  archived?: boolean;
  deleteNote: (id:number)=>void;
  archiveNote: (id:number)=>void;
  restoreNote: (id:number)=>void;
};


function NoteCard({
  note,
  archived = false,
  deleteNote,
  archiveNote,
  restoreNote,
}: NoteCardProps) {
const { labels } = useLabels();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  
const reminderRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      reminderRef.current &&
      !reminderRef.current.contains(event.target as Node)
    ) {
      setShowReminder(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


const selectedLabel = labels.find(
  (item) => item.name === note.label
);

  return (
    <div
      className={`w-full rounded-xl border p-5 shadow-sm ${
        noteColors[note.color]
      }`}
    >

      <h2 className="text-lg font-bold">
        {note.title}
      </h2>


      <p className="mt-3 text-gray-600">
        {note.description}
      </p>


      {/* <span className="mt-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm">
        {note.label}
      </span> */}

{note.label && (
  <span
    className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium"
    style={{
      backgroundColor: selectedLabel?.color
        ? `${selectedLabel.color}20`
        : "#f3f4f6",
      color: selectedLabel?.color ?? "#6b7280",
    }}
  >
    <span
      className="h-2.5 w-2.5 rounded-full"
      style={{
        backgroundColor: selectedLabel?.color ?? "#9ca3af",
      }}
    />

    {note.label}
  </span>
)}

      {!archived && (
        <div className="mt-5 flex items-center justify-center gap-2">


          {/* مشاهده */}
         <Link
  href={`/home/${note.id}`}
  className="rounded-lg p-2 text-gray-600 transition hover:bg-blue-100 hover:text-blue-600"
  title="مشاهده"
>
  <Eye size={18} />
</Link>


    <div ref={reminderRef} className="relative">
  <button
    type="button"
    onClick={() => setShowReminder((prev) => !prev)}
    className="relative rounded-lg p-2 text-gray-600 transition hover:bg-yellow-100 hover:text-yellow-600"
    title="یادآوری"
  >
    <Bell size={18} />

    {note.reminder && (
      <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
    )}
  </button>

  {showReminder && note.reminder && (
    <div
      className="
        absolute
        bottom-full
        right-0
        z-50
        mb-2
        w-56
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-lg
      "
    >
      <div className="flex items-center gap-2">
        <Bell size={16} className="text-yellow-500" />

        <span className="text-sm font-semibold text-gray-700">
          یادآوری
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {new Date(note.reminder).toLocaleString("fa-IR", {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </p>
    </div>
  )}
</div>

          {/* ویرایش */}
          <Link href={`/home/${note.id}/edit`}>
            <button
              className="rounded-lg p-2 text-gray-600 transition hover:bg-green-100 hover:text-green-600"
              title="ویرایش"
            >
              <Pencil size={18} />
            </button>
          </Link>


          {/* تغییر رنگ */}
          <button
            className="rounded-lg p-2 text-gray-600 transition hover:bg-purple-100 hover:text-purple-600"
            title="تغییر رنگ"
          >
            <Palette size={18} />
          </button>


          {/* حذف */}
          <button
            onClick={() => setShowDeleteModal(true)}
            className="rounded-lg p-2 text-gray-600 transition hover:bg-red-100 hover:text-red-600"
            title="حذف"
          >
            <Trash2 size={18} />
          </button>
          {/* آرشیو */}
<button
  onClick={() => archiveNote(note.id)}
  className="rounded-lg p-2 text-gray-600 transition hover:bg-orange-100 hover:text-orange-600"
  title="آرشیو"
>
  <Archive size={18} />
</button>



        </div>
      )}


{archived && (
  <div className="mt-5 flex items-center justify-center gap-2">

    <button
      onClick={() => restoreNote(note.id)}
      className="
        rounded-lg
        p-2
        text-gray-600
        transition
        hover:bg-green-100
        hover:text-green-600
      "
      title="بازگرداندن"
    >
      <ArchiveRestore size={18} />
    </button>

  </div>
)}
      <DeleteConfirmModal
        open={showDeleteModal}
        title={note.title}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {

          deleteNote(note.id);

          setShowDeleteModal(false);

        }}
      />

    </div>
  );
}


export default NoteCard;