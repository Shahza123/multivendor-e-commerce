"use client";
import React, { useState } from "react";
import Sidebar from "../../components/backoffice/Sidebar";

import Navbar from "../../components/backoffice/Navbar";

export default function Layout({ children }) {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <div className="flex ">
      <Sidebar ShowSidebar={showSideBar} setShowSidebar={setShowSidebar} />

      <div className="md:ml-64 ml-0 flex-grow min-h-screen">
        <Navbar ShowSidebar={showSideBar} setShowSidebar={setShowSidebar} />
        <main className="p-8 bg-slate-50  dark:bg-slate-900 text-slate-50  mt-16 min-h-screen ">
          {children}
        </main>
      </div>
    </div>
  );
}
