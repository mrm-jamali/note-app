import { MoreVertical } from "lucide-react";

type TrashRowProps = {
  title: string;
  label: string;
  deletedAt: string;
  expiresIn: string;
};

function TrashRow({
  title,
  label,
  deletedAt,
  expiresIn,
}: TrashRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-sm md:grid-cols-4 md:items-center">
      {/* Note */}
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>

        <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {label}
        </span>
      </div>

      {/* Deleted At */}
      <div>
        <p className="text-xs text-gray-400 md:hidden">
          Deleted At
        </p>

        <p className="text-gray-600">{deletedAt}</p>
      </div>

      {/* Expires */}
      <div>
        <p className="text-xs text-gray-400 md:hidden">
          Expires In
        </p>

        <span className="font-medium text-red-500">
          {expiresIn}
        </span>
      </div>

      {/* Action */}
      <div className="flex justify-end">
        <button className="rounded-lg p-2 transition hover:bg-gray-100">
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
}

export default TrashRow;