
import NoteCard from './NoteCard'
import { notes } from '@/data/notes'


function NoteGride() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10">
        {notes.map(note=>(
            <NoteCard note={note}  key={note.id} />
        ))}
     
    </div>
  )
}

export default NoteGride