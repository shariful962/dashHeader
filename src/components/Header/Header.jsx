import React from "react";
import { HiMenu } from "react-icons/hi";

const Header = ({ setSidebarOpen }) => {
  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white shadow px-4 flex items-center z-40">
      {/* Hamburger icon on mobile only */}
      <button
        className="md:hidden mr-4"
        onClick={() => setSidebarOpen(true)}
        aria-label="Toggle Sidebar"
      >
        <HiMenu className="text-2xl" />
      </button>

      <h1 className="text-xl font-bold">Page Header</h1>
    </div>
  );
};

export default Header;
