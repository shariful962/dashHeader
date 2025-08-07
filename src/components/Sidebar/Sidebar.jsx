// import React from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const links = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "Profile", path: "/profile" },
//     { name: "Settings", path: "/settings" },
//   ];

//   return (
//     <>
//       {/* Sidebar: Desktop */}
//       <aside className="hidden md:block w-64 h-full bg-white shadow-md fixed top-0 left-0 pt-16 z-40">
//         <nav className="flex flex-col p-4 space-y-2">
//           {links.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 `p-2 rounded ${
//                   isActive ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"
//                 }`
//               }
//               end
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       {/* Sidebar: Mobile Drawer */}
//       <div
//         className={`fixed inset-0 z-50 bg-black/10 bg-opacity-30 md:hidden transition ${
//           isOpen ? "block" : "hidden"
//         }`}
//         onClick={() => setIsOpen(false)}
//       >
//         <aside
//           className="w-64 bg-white h-full shadow-md fixed top-0 left-0 pt-16"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <nav className="p-4 space-y-2">
//             {links.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)} // Close sidebar on click
//                 className={({ isActive }) =>
//                   `block p-2 rounded ${
//                     isActive ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"
//                   }`
//                 }
//                 end
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </nav>
//         </aside>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react"; // Install lucide-react or use any icon library
import Icons from "../../assets/image";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Dashboard1", path: "/dashboard1" },
    { name: "User management", path: "/user_manage" },
    { name: "Medicines Overview", path: "/medicine_overview" },
  ];

  return (
    <>
      {/* Sidebar: Desktop */}
      <aside className="hidden md:flex flex-col w-64 h-full bg-white shadow-md fixed top-0 left-0 z-40">
        {/* Logo Section */}
        <div className="flex items-center gap-5 px-4 py-4">
          <img src={Icons.navLogo} alt="Logo" className="object-cover" />
          <span className="text-2xl text-Primary">Say My Meds</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-4 space-y-2 text-base md:text-xl">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 mb-4  rounded-2xl ${
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
        className={`fixed inset-0 z-50 bg-black/10 md:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <aside
          className="w-64 bg-white h-full shadow-md fixed top-0 left-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img src={Icons.navLogo} alt="Logo" className="object-cover" />
              <span className="text-2xl text-Primary">Say My Meds</span>
              <div
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 absolute right-1 top-2 w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full"
              >
                <X size={22} />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block p-4 rounded ${
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
