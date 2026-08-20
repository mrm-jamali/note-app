"use client";

import { Eye } from "lucide-react";
import Link from "next/link";
import { Note } from "@/types/note";
import { useLabels } from "@/hooks/useLabels";

type SearchResultCardProps = {
  note: Note;
};

function SearchResultCard({ note }: SearchResultCardProps) {
  const { labels } = useLabels();

  const noteColors = {
    blue: "bg-blue-50 border-blue-200",
    yellow: "bg-yellow-50 border-yellow-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    red: "bg-red-50 border-red-200",
  };

  const selectedLabel = labels.find(
    (item) => item.name === note.label
  );

  return (
    <div
      className={`flex h-[240px] w-full flex-col rounded-xl border p-5 shadow-sm ${
        noteColors[note.color]
      }`}
    >
      {/* Title */}
      <h2 className="truncate text-lg font-bold text-gray-800">
        {note.title}
      </h2>

      {/* Description */}
      <p className="mt-3 line-clamp-5 text-sm leading-6 text-gray-600">
        {note.description}
      </p>

      {/* Label */}
      {note.label && (
        <span
          className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium"
          style={{
            backgroundColor: selectedLabel?.color
              ? `${selectedLabel.color}20`
              : "#f3f4f6",
            color: selectedLabel?.color ?? "#6b7280",
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor:
                selectedLabel?.color ?? "#9ca3af",
            }}
          />

          {note.label}
        </span>
      )}

      {/* Action */}
      <div className="mt-auto flex justify-center pt-4">
        <Link
          href={`/home/${note.id}`}
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-600 transition hover:bg-blue-100 hover:text-blue-600"
        >
          <Eye size={17} />
          مشاهده یادداشت
        </Link>
      </div>
    </div>
  );
}

export default SearchResultCard;