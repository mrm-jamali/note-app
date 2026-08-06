import React from 'react'
import { notes } from '@/data/notes'
import Link from 'next/link';


function NoteHeader() {
  return (
   <div className="mt-8 flex flex-col items-start justify-between gap-4 px-4 sm:mt-10 sm:flex-row sm:items-center sm:px-6 bg-yellow-200">
 

<Link
  href="/newnote"
  className="flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-medium text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg active:scale-95 sm:w-auto"
>
  یادداشت جدید
</Link>
</div>
  )
}

export default NoteHeader