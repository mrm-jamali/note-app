"use client";

import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
import { CalendarClock, Clock } from "lucide-react";
import { useNotes } from "@/hooks/useNotes";

export default function ReminderPage() {
  const { notes } = useNotes();

  const reminders = notes
    .filter((note) => note.reminder && !note.deleted && !note.archived)
    .sort(
      (a, b) =>
        new Date(a.reminder!).getTime() - new Date(b.reminder!).getTime(),
    );

  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(today.getDate() + 1);
  const isSameDay = (dateString: string, targetDate: Date) => {
    const date = new Date(dateString);

    return (
      date.getFullYear() === targetDate.getFullYear() &&
      date.getMonth() === targetDate.getMonth() &&
      date.getDate() === targetDate.getDate()
    );
  };

  const todayReminders = reminders.filter((note) =>
    isSameDay(note.reminder!, today),
  );

  const tomorrowReminders = reminders.filter((note) =>
    isSameDay(note.reminder!, tomorrow),
  );
const endOfTomorrow = new Date(tomorrow);
endOfTomorrow.setHours(23, 59, 59, 999);

const laterReminders = reminders.filter((note) => {
  const reminderDate = new Date(note.reminder!);

  return reminderDate > endOfTomorrow;
});

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Page>
      <PageHeader
        title="یادآوری‌ها"
        description="مدیریت تمام یادآوری‌های شما"
      />

      {/* امروز */}
      <section className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <CalendarClock size={22} className="text-orange-500" />

          <h2 className="text-lg font-semibold text-gray-700">امروز</h2>
        </div>

        <div className="space-y-3">
          {todayReminders.length > 0 ? (
            todayReminders.map((note) => (
              <div
                key={note.id}
                className="
                  flex items-center justify-between
                  rounded-xl border border-gray-200
                  bg-white px-5 py-4
                  shadow-sm
                  transition
                  hover:border-orange-300
                  hover:shadow-md
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full bg-orange-100
                    "
                  >
                    <Clock size={20} className="text-orange-600" />
                  </div>

                  <span className="font-medium text-gray-700">
                    {note.title}
                  </span>
                </div>

                <span
                  className="
                    rounded-lg
                    bg-gray-100
                    px-3 py-1
                    text-sm
                    font-medium
                    text-gray-600
                  "
                >
                  {formatTime(note.reminder!)}
                </span>
              </div>
            ))
          ) : (
            <p className="rounded-xl bg-gray-50 p-5 text-sm text-gray-400">
              برای امروز یادآوری‌ای وجود ندارد.
            </p>
          )}
        </div>
      </section>

      {/* فردا */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <CalendarClock size={22} className="text-blue-500" />

          <h2 className="text-lg font-semibold text-gray-700">فردا</h2>
        </div>

        <div className="space-y-3">
          {tomorrowReminders.length > 0 ? (
            tomorrowReminders.map((note) => (
              <div
                key={note.id}
                className="
                  flex items-center justify-between
                  rounded-xl border border-gray-200
                  bg-white px-5 py-4
                  shadow-sm
                  transition
                  hover:border-blue-300
                  hover:shadow-md
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full bg-blue-100
                    "
                  >
                    <Clock size={20} className="text-blue-600" />
                  </div>

                  <span className="font-medium text-gray-700">
                    {note.title}
                  </span>
                </div>

                <span
                  className="
                    rounded-lg
                    bg-gray-100
                    px-3 py-1
                    text-sm
                    font-medium
                    text-gray-600
                  "
                >
                  {formatTime(note.reminder!)}
                </span>
              </div>
            ))
          ) : (
            <p className="rounded-xl bg-gray-50 p-5 text-sm text-gray-400">
              برای فردا یادآوری‌ای وجود ندارد.
            </p>
          )}
        </div>
      </section>
      {/* بعداً */}
      <section className="mt-10">
        <div className="mb-4 flex items-center gap-2">
          <CalendarClock size={22} className="text-purple-500" />

          <h2 className="text-lg font-semibold text-gray-700">بعداً</h2>
        </div>

        <div className="space-y-3">
          {laterReminders.length > 0 ? (
            laterReminders.map((note) => (
              <div
                key={note.id}
                className="
            flex items-center justify-between
            rounded-xl border border-gray-200
            bg-white px-5 py-4
            shadow-sm
            transition
            hover:border-purple-300
            hover:shadow-md
          "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                flex h-10 w-10 items-center justify-center
                rounded-full bg-purple-100
              "
                  >
                    <Clock size={20} className="text-purple-600" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-gray-700">
                      {note.title}
                    </span>

                    <span className="text-xs text-gray-400">
                      {new Date(note.reminder!).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                </div>

                <span
                  className="
              rounded-lg
              bg-gray-100
              px-3 py-1
              text-sm
              font-medium
              text-gray-600
            "
                >
                  {formatTime(note.reminder!)}
                </span>
              </div>
            ))
          ) : (
            <p className="rounded-xl bg-gray-50 p-5 text-sm text-gray-400">
              یادآوری دیگری وجود ندارد.
            </p>
          )}
        </div>
      </section>
    </Page>
  );
}
