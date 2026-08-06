import { notes } from "@/data/notes";
import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
import NoteCard from "@/components/notes/NoteCard";

export default function ArchivePage() {

  const archivedNotes = notes.filter(
    (note) => note.archived
  );


  return (
    <Page>

      <PageHeader
        title="آرشیو"
        description="یادداشت‌های آرشیو شده شما"
      />


      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

        {archivedNotes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            archived
          />
        ))}

      </div>


    </Page>
  );
}