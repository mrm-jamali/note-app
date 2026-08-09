export type NoteColor = "blue" | "yellow" | "green" | "purple" | "red";

export type Note = {
  id: number;
  title: string;
  description: string;
  label: string;
  color: NoteColor;
  archived: boolean;
  deleted: boolean;
  reminder: string | null;
  createdAt: string;
  deletedAt: string | null;
};
