import { Bell, Pencil, Palette, Trash2 } from "lucide-react";

import { Note } from "@/types/note";

type NoteCardProps = {
  note: Note;
};

function NoteCard({ note }: NoteCardProps) {
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
  <button className="rounded-lg p-2 hover:bg-gray-100">
    <Bell size={18} />
  </button>

  <button className="rounded-lg p-2 hover:bg-gray-100">
    <Pencil size={18} />
  </button>

  <button className="rounded-lg p-2 hover:bg-gray-100">
    <Palette size={18} />
  </button>

  <button className="rounded-lg p-2 hover:bg-gray-100">
    <Trash2 size={18} />
  </button>
</div>
    </div>
  )
}

export default NoteCard