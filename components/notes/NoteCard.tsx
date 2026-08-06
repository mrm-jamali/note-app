"use client";
import { Bell, Pencil, Palette, Trash2, Eye } from "lucide-react";
import { useState } from "react";
import { Note } from "@/types/note";
import Link from "next/link";
import DeleteConfirmModal from "../DeleteConfirmModal";



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
};

function NoteCard({ note, archived = false }: NoteCardProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div   className={`w-full rounded-xl border p-5 shadow-sm ${
        noteColors[note.color]
      }`}>
      <h2 className="text-lg font-bold">{note.title}</h2>

      <p className="mt-3 text-gray-600">{note.description}</p>

      <span className="mt-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm">
        {note.label}
      </span>

    {!archived && (
  <div className="mt-5 flex items-center gap-2">

    <button
      className="rounded-lg p-2 text-gray-600 transition hover:bg-blue-100 hover:text-blue-600"
      title="مشاهده"
    >
      <Eye size={18} />
    </button>

    <button
      className="rounded-lg p-2 text-gray-600 transition hover:bg-yellow-100 hover:text-yellow-600"
      title="یادآوری"
    >
      <Bell size={18} />
    </button>

    <Link href={`/home/${note.id}/edit`}>
      <button
        className="rounded-lg p-2 text-gray-600 transition hover:bg-green-100 hover:text-green-600"
        title="ویرایش"
      >
        <Pencil size={18} />
      </button>
    </Link>

    <button
      className="rounded-lg p-2 text-gray-600 transition hover:bg-purple-100 hover:text-purple-600"
      title="تغییر رنگ"
    >
      <Palette size={18} />
    </button>

    <button
      onClick={() => setShowDeleteModal(true)}
      className="rounded-lg p-2 text-gray-600 transition hover:bg-red-100 hover:text-red-600"
      title="حذف"
    >
      <Trash2 size={18} />
    </button>

  </div>
)}
      <DeleteConfirmModal
        open={showDeleteModal}
        title={note.title}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          console.log("Delete note:", note.id);

          // اینجا بعداً حذف واقعی انجام می‌شود

          setShowDeleteModal(false);
        }}
      />
    </div>
  );
}

export default NoteCard;
