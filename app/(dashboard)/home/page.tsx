"use client";
import NoteGride from "@/components/notes/NoteGride";
// import NoteHeader from '@/components/notes/NoteHeader'
import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
// import React from 'react'
// import SearchBAR from '@/components/SearchBAR'
import SearchBar from "@/components/notes/SearchBar";
import NoteFilter from "@/components/notes/NoteFilter";
import Link from "next/link";
import { useState } from "react";
import { useNotes } from "@/hooks/useNotes";
// import { notes } from "@/data/notes";

function Home() {
  const { notes, updateNote, deleteNote, archiveNote, restoreNote } =
    useNotes();
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.includes(search) &&
      (selectedLabel === "" ||
        (selectedLabel === "hasLabel" && note.label) ||
        (selectedLabel === "noLabel" && !note.label)),
  );
  return (
    <Page>
   <div className="flex items-center justify-between">
  {/* Desktop & Tablet */}
  <div className="hidden md:block">
    <PageHeader
      title="همه یادداشت‌ها"
      description="مدیریت یادداشت‌های شما"
    />
  </div>

  {/* Mobile */}
  <div className="md:hidden">
    <PageHeader
      title=""
      description=""
    />
  </div>

  <Link
    href="/home/new"
    className="ml-auto mb-4 w-full md:ml-0 md:mb-0 md:w-auto"
  >
    <button className="w-full rounded-xl bg-orange-500 px-4 py-2 text-white md:w-auto">
      + یادداشت جدید
    </button>
  </Link>
</div>

      {/* <NoteHeader /> */}

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-full md:max-w-[500px]">
          <SearchBar
            value={searchText}
            onChange={setSearchText}
            onSearch={() => setSearch(searchText)}
          />
        </div>

        <div className="w-full md:w-auto">
          <NoteFilter value={selectedLabel} onChange={setSelectedLabel} />
        </div>
      </div>
      <NoteGride
        notes={filteredNotes}
        updateNote={updateNote}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
        restoreNote={restoreNote}
      />
    </Page>
  );
}
export default Home;
