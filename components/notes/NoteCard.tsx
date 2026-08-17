"use client";

import {
  Bell,
  Pencil,
  Palette,
  Trash2,
  Eye,
  Archive,
  ArchiveRestore,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Note } from "@/types/note";
import Link from "next/link";
import DeleteConfirmModal from "../DeleteConfirmModal";
import { useLabels } from "@/hooks/useLabels";

const noteColors = {
  blue: "bg-blue-50 border-blue-200",
  yellow: "bg-yellow-50 border-yellow-200",
  green: "bg-green-50 border-green-200",
  purple: "bg-purple-50 border-purple-200",
  red: "bg-red-50 border-red-200",
};

type NoteCardProps = {
  note: Note;
  archived?: boolean;
  deleteNote: (id: number) => void;
  archiveNote: (id: number) => void;
  restoreNote: (id: number) => void;
  updateNote: (updatedNote: Note) => void;
};

function NoteCard({
  note,
  archived = false,
  deleteNote,
  updateNote,
  archiveNote,
  restoreNote,
}: NoteCardProps) {
  const { labels } = useLabels();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [reminderDate, setReminderDate] = useState("");
  const [reminderTime, setReminderTime] = useState("");

  const reminderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        reminderRef.current &&
        !reminderRef.current.contains(event.target as Node)
      ) {
        setShowReminder(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLabel = labels.find((item) => item.name === note.label);
  const saveReminder = () => {
    if (!reminderDate || !reminderTime) return;

    const reminder = `${reminderDate}T${reminderTime}`;

    updateNote({
      ...note,
      reminder,
    });

    setShowReminder(false);
  };

  return (
    <div
      className={`w-full h-[320px] rounded-xl border p-4 shadow-sm flex flex-col ${
        noteColors[note.color]
      }`}
    >
      {/* عنوان - ارتفاع کمتر */}
      <div className="h-7">
        <h2 className="text-lg font-bold truncate leading-tight">
          {note.title}
        </h2>
      </div>

      {/* توضیحات - ارتفاع کمتر */}
      <div className="mt-2 h-[52px] overflow-hidden">
        <p className="text-gray-600 text-sm leading-5 line-clamp-3">
          {note.description}
        </p>
      </div>

      {/* لیبل */}
      {note.label && (
        <span
          className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-sm font-medium self-start"
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
              backgroundColor: selectedLabel?.color ?? "#9ca3af",
            }}
          />
          {note.label}
        </span>
      )}

      {/* دکمه‌ها */}
      <div className="mt-auto flex items-center justify-center gap-1.5 pt-2">
        {!archived ? (
          <>
            <Link
              href={`/home/${note.id}`}
              className="rounded-lg p-1.5 text-gray-600 transition hover:bg-blue-100 hover:text-blue-600"
              title="مشاهده"
            >
              <Eye size={17} />
            </Link>

            <div ref={reminderRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  if (note.reminder) {
                    const date = note.reminder.slice(0, 10);
                    const time = note.reminder.slice(11, 16);

                    setReminderDate(date);
                    setReminderTime(time);
                  } else {
                    setReminderDate("");
                    setReminderTime("");
                  }

                  setShowReminder((prev) => !prev);
                }}
                className="relative rounded-lg p-1.5 text-gray-600 transition hover:bg-yellow-100 hover:text-yellow-600"
                title="یادآوری"
              >
                <Bell size={17} />
                {note.reminder && (
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                )}
              </button>

              {showReminder && (
                <div className="absolute bottom-full right-0 z-50 mb-2 w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Bell size={16} className="text-yellow-500" />

                    <span className="text-sm font-semibold text-gray-700">
                      {note.reminder ? "ویرایش یادآوری" : "ایجاد یادآوری"}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="mb-1 block text-xs text-gray-500">
                        تاریخ
                      </label>

                      <input
                        type="date"
                        value={reminderDate}
                        onChange={(e) => setReminderDate(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs text-gray-500">
                        ساعت
                      </label>

                      <input
                        type="time"
                        value={reminderTime}
                        onChange={(e) => setReminderTime(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={saveReminder}
                      disabled={!reminderDate || !reminderTime}
                      className="w-full rounded-lg bg-yellow-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {note.reminder ? "ویرایش یادآوری" : "ثبت یادآوری"}
                    </button>

                    {note.reminder && (
                      <button
                        type="button"
                        onClick={() => {
                          updateNote({
                            ...note,
                            reminder: null,
                          });

                          setReminderDate("");
                          setReminderTime("");
                          setShowReminder(false);
                        }}
                        className="w-full rounded-lg px-3 py-2 text-sm text-red-500 transition hover:bg-red-50"
                      >
                        حذف یادآوری
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link href={`/home/${note.id}/edit`}>
              <button
                className="rounded-lg p-1.5 text-gray-600 transition hover:bg-green-100 hover:text-green-600"
                title="ویرایش"
              >
                <Pencil size={17} />
              </button>
            </Link>

            <button
              className="rounded-lg p-1.5 text-gray-600 transition hover:bg-purple-100 hover:text-purple-600"
              title="تغییر رنگ"
            >
              <Palette size={17} />
            </button>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="rounded-lg p-1.5 text-gray-600 transition hover:bg-red-100 hover:text-red-600"
              title="حذف"
            >
              <Trash2 size={17} />
            </button>

            <button
              onClick={() => archiveNote(note.id)}
              className="rounded-lg p-1.5 text-gray-600 transition hover:bg-orange-100 hover:text-orange-600"
              title="آرشیو"
            >
              <Archive size={17} />
            </button>
          </>
        ) : (
          <button
            onClick={() => restoreNote(note.id)}
            className="rounded-lg p-1.5 text-gray-600 transition hover:bg-green-100 hover:text-green-600"
            title="بازگرداندن"
          >
            <ArchiveRestore size={17} />
          </button>
        )}
      </div>

      <DeleteConfirmModal
        open={showDeleteModal}
        title={note.title}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          deleteNote(note.id);
          setShowDeleteModal(false);
        }}
      />
    </div>
  );
}

export default NoteCard;
