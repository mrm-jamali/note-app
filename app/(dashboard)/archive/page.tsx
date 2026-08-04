import { notes } from "@/data/notes";

export default function ArchivePage() {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        آرشیو
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {archivedNotes.map((note) => (
          <div
            key={note.id}
            className="rounded-2xl p-5 shadow-sm"
            style={{ backgroundColor: note.color }}
          >
            <h2 className="text-lg font-bold">
              {note.title}
            </h2>

            <span className="mt-3 inline-block rounded-full bg-white/70 px-3 py-1 text-sm">
              {note.label}
            </span>

            <p className="mt-12 text-sm text-gray-600">
              آرشیو شده در {note.createdAt}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}