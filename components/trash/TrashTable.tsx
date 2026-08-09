import TrashRow from "./TrashRow";
import { Note } from "@/types/note";

type TrashTableProps = {
  notes: Note[];
  restoreFromTrash: (id: number) => void;
  permanentlyDeleteNote: (id: number) => void;
};

function TrashTable({
  notes,
  restoreFromTrash,
  permanentlyDeleteNote,
}: TrashTableProps) {
  return (
  <div className="mt-6 rounded-2xl bg-slate-50/100 p-4">
      {/* Table Header */}
      {notes.length > 0 && (
        <div
          className="
            hidden
            grid-cols-4
            items-center
            gap-5
            px-5
            py-3
            text-xs
            font-medium
            text-gray-800
            md:grid mt-11
          "
        >
          <div>یادداشت</div>

          <div>تاریخ حذف</div>

          <div>منقضی‌شده</div>

          <div className="justify-self-end">
            گزینه‌ها
          </div>
        </div>
      )}

      {/* Rows */}
      <div className="space-y-3">
        {notes.length === 0 ? (
          <div
            className="
              flex
              min-h-[220px]
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-gray-200
              bg-gray-50/50
              text-center
            "
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <span className="text-2xl">🗑️</span>
            </div>

            <h3 className="text-base font-semibold text-gray-700">
              سطل زباله خالی است
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              یادداشتی در سطل زباله وجود ندارد.
            </p>
          </div>
        ) : (
          notes.map((note) => (
            <TrashRow
              key={note.id}
              note={note}
              restoreFromTrash={restoreFromTrash}
              permanentlyDeleteNote={permanentlyDeleteNote}
            />
          ))
        )}
      </div>

    </div>
  );
}

export default TrashTable;