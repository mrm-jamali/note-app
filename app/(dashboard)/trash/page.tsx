"use client";

import Page from "@/components/layout/Page";
import TrashHeader from "@/components/trash/TrashHeader";
import TrashToolbar from "@/components/trash/TrashToolbar";
import TrashTable from "@/components/trash/TrashTable";
import { useNotes } from "@/hooks/useNotes";

function Trash() {
  const {
    notes,
    restoreFromTrash,
    permanentlyDeleteNote,
  } = useNotes();

  const deletedNotes = notes.filter(
    (note) => note.deleted
  );

  return (
    <Page>
      <TrashHeader />

      <TrashToolbar />

      <TrashTable
        notes={deletedNotes}
        restoreFromTrash={restoreFromTrash}
        permanentlyDeleteNote={permanentlyDeleteNote}
      />
    </Page>
  );
}

export default Trash;