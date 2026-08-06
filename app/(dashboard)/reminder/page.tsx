import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
import { CalendarClock, Clock } from "lucide-react";

export default function ReminderPage() {
  const todayReminders = [
    {
      time: "08:00",
      title: "مراجعه به پزشک",
    },
    {
      time: "11:00",
      title: "جلسه با تیم",
    },
    {
      time: "15:00",
      title: "تماس با مشتری",
    },
  ];

  const tomorrowReminders = [
    {
      time: "10:00",
      title: "بررسی پروژه جدید",
    },
  ];

  return (
    <Page>

      <PageHeader
        title="یادآوری‌ها"
        description="مدیریت تمام یادآوری‌های شما"
      />


      {/* Today */}
      <section className="mb-10">

        <div className="mb-4 flex items-center gap-2">
          <CalendarClock
            size={22}
            className="text-orange-500"
          />

          <h2 className="text-lg font-semibold text-gray-700">
            امروز
          </h2>
        </div>


        <div className="space-y-3">

          {todayReminders.map((item) => (
            <div
              key={item.time}
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

                <div className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-orange-100
                ">
                  <Clock
                    size={20}
                    className="text-orange-600"
                  />
                </div>


                <span className="font-medium text-gray-700">
                  {item.title}
                </span>

              </div>


              <span className="
                rounded-lg
                bg-gray-100
                px-3 py-1
                text-sm
                font-medium
                text-gray-600
              ">
                {item.time}
              </span>

            </div>
          ))}

        </div>

      </section>



      {/* Tomorrow */}
      <section>

        <div className="mb-4 flex items-center gap-2">

          <CalendarClock
            size={22}
            className="text-blue-500"
          />

          <h2 className="text-lg font-semibold text-gray-700">
            فردا
          </h2>

        </div>


        <div className="space-y-3">

          {tomorrowReminders.map((item) => (
            <div
              key={item.time}
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

                <div className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-blue-100
                ">
                  <Clock
                    size={20}
                    className="text-blue-600"
                  />
                </div>


                <span className="font-medium text-gray-700">
                  {item.title}
                </span>

              </div>


              <span className="
                rounded-lg
                bg-gray-100
                px-3 py-1
                text-sm
                font-medium
                text-gray-600
              ">
                {item.time}
              </span>

            </div>
          ))}

        </div>

      </section>


    </Page>
  );
}