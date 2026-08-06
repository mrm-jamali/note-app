import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";

import { notes } from "@/data/notes";
import NoteForm from "@/components/notes/NoteForm";
export function generateStaticParams() {
  return notes.map((note) => ({
    id: String(note.id),
  }));
}
export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;


  const note = notes.find(
    (note) => note.id === Number(id)
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


      <NoteForm note={note} />

    </Page>
  );
}