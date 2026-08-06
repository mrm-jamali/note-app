"use client";
import NoteGride from '@/components/notes/NoteGride'
import NoteHeader from '@/components/notes/NoteHeader'
import Page from '@/components/layout/Page'
import PageHeader from '@/components/layout/PageHeader'
import React from 'react'
// import SearchBAR from '@/components/SearchBAR'
import SearchBar from '@/components/notes/SearchBar'
import NoteFilter from '@/components/notes/NoteFilter'
import Link from 'next/link'
import { useState } from "react";
import { notes } from "@/data/notes";

function Home() {
  
  const [search, setSearch] = useState("");
    const filteredNotes = notes.filter((note) =>
    note.title.includes(search)
  );
  return (
    <Page>
      <div className="flex items-center justify-between">
        <PageHeader
          title="همه یادداشت‌ها"
          description="مدیریت یادداشت‌های شما"
        />
 <Link href="/home/new">
 <button className="rounded-xl bg-orange-500 px-4 py-2 text-white">
          + یادداشت جدید
        </button>
     </Link>
       
      </div>
    

      {/* <NoteHeader /> */}

      <div className=" mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SearchBar    value={search}
        onChange={setSearch}/>
       <div className="flex justify-end">
    <NoteFilter    />
  </div>
      </div>

      <NoteGride notes={filteredNotes} />
    </Page>
  )
}
export default Home