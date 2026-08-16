
import NoteCard from './NoteCard'
// import { notes } from '@/data/notes'


import { Note } from "@/types/note";

type Props = {
  notes: Note[];
    updateNote: (updatedNote: Note) => void;
  deleteNote: (id:number)=>void;
  archiveNote: (id:number)=>void;
   restoreNote: (id: number) => void;
};

function NoteGride({
  notes,
    updateNote,
  deleteNote,
  archiveNote,
  restoreNote,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {notes
        .filter((note) => !note.deleted)
        .map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
            restoreNote={restoreNote}  updateNote={updateNote}
          />
        ))}
     
    </div>
  )
}

export default NoteGride