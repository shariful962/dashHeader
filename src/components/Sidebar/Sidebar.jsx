import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* Sidebar: Desktop */}
      <aside className="hidden md:block w-64 h-full bg-white shadow-md fixed top-0 left-0 pt-16 z-40">
        <nav className="flex flex-col p-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `p-2 rounded ${
                  isActive ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"
                }`
              }
              end
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Sidebar: Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/10 bg-opacity-30 md:hidden transition ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <aside
          className="w-64 bg-white h-full shadow-md fixed top-0 left-0 pt-16"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="p-4 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close sidebar on click
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"
                  }`
                }
                end
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
