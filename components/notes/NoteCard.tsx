"use client";
import { Bell, Pencil, Palette, Trash2 , Eye, } from "lucide-react";
import { useState } from "react";
import { Note } from "@/types/note";
import Link from "next/link";
import DeleteConfirmModal from "../DeleteConfirmModal";

type NoteCardProps = {
  note: Note;
};

function NoteCard({ note }: NoteCardProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
     <div className="w-60 rounded-xl border p-5 shadow-sm" >

      <h2 className="text-lg font-bold">
        {note.title}
      </h2>

      <p className="mt-3 text-gray-600">
       {note.description}
      </p>

      <span className="mt-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm">
       {note.label}
      </span>


     <div className="mt-5 flex gap-3">
      <button
          className="rounded-lg p-2 transition hover:bg-blue-100 hover:bg-gray-100"
          title="View Details"
        >
          <Eye size={18} />
        </button>
  <button className="rounded-lg p-2 hover:bg-gray-100">
    <Bell size={18} />
  </button>

  <Link href={`/home/${note.id}/edit`}>
  <button className="rounded-lg p-2 hover:bg-gray-100">
    <Pencil size={18} />
  </button>
</Link>

  <button className="rounded-lg p-2 hover:bg-gray-100">
    <Palette size={18} />
  </button>

 
  <button
  onClick={() => setShowDeleteModal(true)}
  className="rounded-lg p-2 hover:bg-red-100 transition"
>
  <Trash2 size={18} />
</button>

</div>
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
  )
}

export default NoteCard