import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";

export default function ReminderPage() {
  return (
      <Page>

      <PageHeader
        title="یادآوری‌ها"
        description="مدیریت تمام یادآوری‌های شما"
      />

      {/* Upcoming */}
      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          امروز
        </h2>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

          <div className="flex items-center border-b px-5 py-4">
            <span className="w-24 font-medium text-gray-500">
              08:00
            </span>

            <span>
              مراجعه به پزشک
            </span>
          </div>

          <div className="flex items-center border-b px-5 py-4">
            <span className="w-24 font-medium text-gray-500">
              11:00
            </span>

            <span>
              جلسه با تیم
            </span>
          </div>

          <div className="flex items-center px-5 py-4">
            <span className="w-24 font-medium text-gray-500">
              15:00
            </span>

            <span>
              تماس با مشتری
            </span>
          </div>

        </div>
      </section>

      {/* Tomorrow */}

      <section>

        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          فردا
        </h2>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

          <div className="flex items-center px-5 py-4">

            <span className="w-24 font-medium text-gray-500">
              10:00
            </span>

            <span>
              بررسی پروژه جدید
            </span>

          </div>

        </div>

      </section>

       </Page>
  );
}