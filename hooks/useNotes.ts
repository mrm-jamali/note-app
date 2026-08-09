"use client";

import { useEffect, useState } from "react";
import { notes as mockNotes } from "@/data/notes";
import { Note } from "@/types/note";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    } else {
      setNotes(mockNotes);
      localStorage.setItem("notes", JSON.stringify(mockNotes));
    }
  }, []);

 const addNote = (note: Omit<Note, "id">) => {

  const newNote = {
    id: Date.now(),
    ...note,
  };

  const updatedNotes = [
    ...notes,
    newNote
  ];

  setNotes(updatedNotes);

  localStorage.setItem(
    "notes",
    JSON.stringify(updatedNotes)
  );
};
  const updateNote = (updatedNote: Note) => {
  const updatedNotes = notes.map((note) =>
    note.id === updatedNote.id
      ? updatedNote
      : note
  );

  setNotes(updatedNotes);

  localStorage.setItem(
    "notes",
    JSON.stringify(updatedNotes)
  );
};
 // انتقال به Trash
  const deleteNote = (id: number) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            deleted: true,
              deletedAt: new Date().toISOString(),
          }
        : note
    );

    setNotes(updatedNotes);

    localStorage.setItem(
      "notes",
      JSON.stringify(updatedNotes)
    );
  };

  // حذف دائمی
  const permanentlyDeleteNote = (id: number) => {
    const updatedNotes = notes.filter(
      (note) => note.id !== id
    );

    setNotes(updatedNotes);

    localStorage.setItem(
      "notes",
      JSON.stringify(updatedNotes)
    );
  };

  // بازگرداندن از Trash
  const restoreFromTrash = (id: number) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            deleted: false,
               deletedAt: null,
          }
        : note
    );

    setNotes(updatedNotes);

    localStorage.setItem(
      "notes",
      JSON.stringify(updatedNotes)
    );
  };

const archiveNote = (id: number) => {
  const updatedNotes = notes.map((note) =>
    note.id === id
      ? {
          ...note,
          archived: true,
        }
      : note
  );

  setNotes(updatedNotes);

  localStorage.setItem(
    "notes",
    JSON.stringify(updatedNotes)
  );
};
const restoreNote = (id: number) => {
  const updatedNotes = notes.map((note) =>
    note.id === id
      ? {
          ...note,
          archived: false,
        }
      : note
  );

  setNotes(updatedNotes);

  localStorage.setItem(
    "notes",
    JSON.stringify(updatedNotes)
  );
};
  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
    permanentlyDeleteNote,
    archiveNote,
    restoreNote,
    restoreFromTrash,

  };
}