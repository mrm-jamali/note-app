import { Note } from "@/types/note";

export const notes: Note[] = [
 {
  id: 1,
  title: "بروزرسانی رزومه",
  description: "آخرین پروژه‌های React و Next.js را به رزومه اضافه کنم.",
  label: "کاری",
  color: "blue",
  archived: true,
  reminder: "2026-08-08 09:00",
  createdAt: "2026-08-01",
},
{
  id: 2,
  title: "خرید خانه",
  description: "خرید شیر، نان، تخم‌مرغ، میوه و سبزیجات.",
  label: "شخصی",
  color: "yellow",
  archived: true,
  reminder: "",
  createdAt: "2026-08-01",
},
{
  id: 3,
  title: "مطالعه برای مصاحبه",
  description: "مرور useMemo، useCallback و Server Components.",
  label: "مطالعه",
  color: "green",
  archived: false,
  reminder: "2026-08-05 14:00",
  createdAt: "2026-08-02",
},
{
  id: 4,
  title: "خواندن کتاب Clean Code",
  description: "فصل چهارم را تمام کنم و نکات مهم را یادداشت کنم.",
  label: "مطالعه",
  color: "purple",
  archived: false,
  reminder: "",
  createdAt: "2026-08-02",
},
{
  id: 5,
  title: "ویزیت پزشک",
  description: "مراجعه برای چکاپ سالانه.",
  label: "سلامتی",
  color: "red",
  archived: false,
  reminder: "2026-08-10 11:00",
  createdAt: "2026-08-02",
},
];


