import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex md:h-screen">
      {/* Sidebar: visible on desktop, togglable on mobile */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Right section with header + content */}
      <div className="flex-1 flex flex-col">
        <Header setSidebarOpen={setIsSidebarOpen} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 mt-16 md:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
