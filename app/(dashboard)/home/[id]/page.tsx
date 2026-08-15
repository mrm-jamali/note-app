
import DetailsNote from "./NoteDetails";
import { notes } from "@/data/notes";

export function generateStaticParams() {
  return notes.map((note) => ({
    id: String(note.id),
  }));
}

export default function Page() {
  return <DetailsNote />;
}