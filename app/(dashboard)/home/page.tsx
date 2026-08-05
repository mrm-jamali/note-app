import NoteGride from '@/components/notes/NoteGride'
import NoteHeader from '@/components/notes/NoteHeader'
import Page from '@/components/layout/Page'
import PageHeader from '@/components/layout/PageHeader'
import React from 'react'
// import SearchBAR from '@/components/SearchBAR'
import SearchBar from '@/components/notes/SearchBar'
import NoteFilter from '@/components/notes/NoteFilter'

function Home() {
  return (
   <Page>

   <PageHeader
      title="همه یادداشت‌ها"
      description="مدیریت یادداشت‌های شما"
   />
      <NoteHeader  title="همه یادداشت‌ها" />
       <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SearchBar />
        <NoteFilter />
      </div>
      <NoteGride />
   </Page>
  )
}

export default Home