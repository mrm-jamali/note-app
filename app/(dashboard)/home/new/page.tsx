
import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
import NoteForm from "@/components/notes/NoteForm";

export default function NewNotePage() {
  return (
    <Page>

      <PageHeader
        title="یادداشت جدید"
        description="ایجاد یک یادداشت جدید"
      />

      <div className="mt-8">
        <NoteForm />
      </div>

    </Page>
  );
}