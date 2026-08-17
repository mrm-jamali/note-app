"use client";

import Page from "@/components/layout/Page";
import TrashHeader from "@/components/trash/TrashHeader";
import TrashToolbar from "@/components/trash/TrashToolbar";
import TrashTable from "@/components/trash/TrashTable";
import { useNotes } from "@/hooks/useNotes";
import { useState } from "react";


function Trash() {
  const {
    notes,
    restoreFromTrash,
    permanentlyDeleteNote,
     emptyTrash,
  } = useNotes();
  const [searchText, setSearchText] = useState("");
const [search, setSearch] = useState("");
const [selectedLabel, setSelectedLabel] = useState("");


const deletedNotes = notes.filter((note) => {
  if (!note.deleted) return false;

  if (!note.title.includes(search)) {
    return false;
  }

  if (selectedLabel === "hasLabel" && !note.label) {
    return false;
  }

  if (selectedLabel === "noLabel" && note.label) {
    return false;
  }

  return true;
});
  return (
    <Page>
      <TrashHeader />

   <div className="mb-6 flex items-center justify-between gap-4">
  



<TrashToolbar
  search={searchText}
  onSearchChange={setSearchText}
  onSearch={() => setSearch(searchText)}
  filter={selectedLabel}
  onFilterChange={setSelectedLabel} onEmptyTrash={emptyTrash}
/>
</div>

      <TrashTable
        notes={deletedNotes}
        restoreFromTrash={restoreFromTrash}
        permanentlyDeleteNote={permanentlyDeleteNote}
      />
    </Page>
  );
}

export default Trash;