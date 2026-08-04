import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <TopBar />
        {children}
      </div>
    </div>
  );
}