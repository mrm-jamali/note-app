import TrashRow from "./TrashRow";

const trashNotes = [
  {
    id: 1,
    title: "JavaScript Notes",
    label: "Programming",
    deletedAt: "2 days ago",
    expiresIn: "28 days left",
  },
  {
    id: 2,
    title: "React Hooks",
    label: "Frontend",
    deletedAt: "5 days ago",
    expiresIn: "25 days left",
  },
  {
    id: 3,
    title: "Meeting Notes",
    label: "Work",
    deletedAt: "1 week ago",
    expiresIn: "23 days left",
  },
  {
    id: 4,
    title: "Shopping List",
    label: "Personal",
    deletedAt: "10 days ago",
    expiresIn: "20 days left",
  },
];

function TrashTable() {
  return (
    <div className="mt-6 space-y-4">
      {/* Table Header */}
      <div className="hidden grid-cols-4 rounded-xl bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-600 md:grid">
        <p>Note</p>
        <p>Deleted At</p>
        <p>Expires In</p>
        <p className="text-right">Action</p>
      </div>

      {/* Rows */}
      <div className="space-y-3">
        {trashNotes.map((note) => (
          <TrashRow
            key={note.id}
            title={note.title}
            label={note.label}
            deletedAt={note.deletedAt}
            expiresIn={note.expiresIn}
          />
        ))}
      </div>
    </div>
  );
}

export default TrashTable;