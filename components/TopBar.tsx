import {
  Search,
  Bell,
  Settings,
  User,
  Calendar,
} from "lucide-react";

function TopBar() {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="جستجو..."
          className="border rounded-lg px-3 py-2"
        />
        <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white">
          <Search size={18} />
          جستجو
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Calendar size={20} />
          <span>date</span>
        </div>

        <Bell size={20} className="cursor-pointer" />

        <Settings size={20} className="cursor-pointer" />

        <div className="flex items-center gap-2 cursor-pointer">
          <User size={20} />
          <span>پروفایل کاربر</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;