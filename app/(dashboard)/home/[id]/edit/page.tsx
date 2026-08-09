"use client";

import { useNotes } from "@/hooks/useNotes";
import { useRouter, useParams } from "next/navigation";

import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
import NoteForm from "@/components/notes/NoteForm";


export default function EditPage() {

  const { updateNote, notes } = useNotes();

  const router = useRouter();

  const params = useParams();

  const id = Number(params.id);


  const note = notes.find(
    (note) => note.id === id
  );


  if (!note) {
    return <div>یادداشت پیدا نشد</div>;
  }


  return (
    <Page>

      <PageHeader
        title="ویرایش یادداشت"
        description="تغییر اطلاعات یادداشت"
      />


      <NoteForm
        note={note}
        onSubmit={(data) => {

          updateNote({
            id: note.id,
            ...data,
          });

          router.push("/home");

        }}
      />


    </Page>
  );
}