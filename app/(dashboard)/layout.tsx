"use client";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) 
 
{
  const [open, setOpen] = useState(false);
  return (
   <div className="flex">
      <Sidebar
  open={open}
  onClose={() => setOpen(false)}
/>

      <div className="flex-1">
       <TopBar
          onMenuClick={() => setOpen(true)}
        />
        {children}
      </div>
    </div>
  );
}