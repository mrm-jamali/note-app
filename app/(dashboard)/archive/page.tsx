"use client";

import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
import NoteCard from "@/components/notes/NoteCard";
import { useNotes } from "@/hooks/useNotes";
import { Archive } from "lucide-react";

export default function ArchivePage() {
  const {
    notes,
    deleteNote,
    archiveNote,
    restoreNote,
    updateNote,
  } = useNotes();

  const archivedNotes = notes.filter(
    (note) => note.archived
  );

  return (
    <Page>
      <PageHeader
        title="آرشیو"
        description="یادداشت‌های آرشیو شده شما"
      />

      {archivedNotes.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
            <Archive
              size={30}
              className="text-orange-500"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-700">
            هیچ یادداشت آرشیو شده‌ای وجود ندارد
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            یادداشت‌هایی که آرشیو می‌کنید در اینجا نمایش داده می‌شوند.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {archivedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              archived
              deleteNote={deleteNote}
              archiveNote={archiveNote}
              restoreNote={restoreNote}
              updateNote={updateNote}
            />
          ))}
        </div>
      )}
    </Page>
  );
}