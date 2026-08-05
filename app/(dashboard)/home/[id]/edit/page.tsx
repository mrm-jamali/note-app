import { notes } from "@/data/notes";
import EditNoteForm from "./EditNoteForm";

export function generateStaticParams() {
  return notes.map((note) => ({
    id: String(note.id),
  }));
}

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const note = notes.find(
    (note) => note.id === Number(id)
  );

  if (!note) {
    return <div>یادداشت پیدا نشد</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        ویرایش: {note.title}
      </h1>

      <EditNoteForm note={note} />
    </div>
  );
}