"use client";

import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
import NoteForm from "@/components/notes/NoteForm";
import { useNotes } from "@/hooks/useNotes";
import { useRouter } from "next/navigation";

export default function NewNotePage() {
  const { addNote } = useNotes();

  const router = useRouter();

  return (
    <Page>

      <PageHeader
        title="یادداشت جدید"
        description="ایجاد یک یادداشت جدید"
      />

      <div className="mt-8">
        <NoteForm
          onSubmit={(data) => {
            addNote({
              
              ...data,
            });

            router.push("/home");
          }}
        />
      </div>

    </Page>
  );
}