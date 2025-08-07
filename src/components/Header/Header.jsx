// import React from "react";
// import { HiMenu } from "react-icons/hi";
// import Icons from '../../assets/image'

// const Header = ({ setSidebarOpen }) => {
//   return (
//     <div className="fixed top-0 left-0 md:left-64 right-0 h-22.5 bg-White  px-4 flex items-center z-40">
//      <div className="flex items-center justify-between w-full">
//        {/* Hamburger icon on mobile only */}
//       <button
//         className="md:hidden mr-4"
//         onClick={() => setSidebarOpen(true)}
//         aria-label="Toggle Sidebar"
//       >
//         <HiMenu className="text-2xl" />
//       </button>
      
//        <div className="flex justify-end">
//          <div className="flex items-center gap-4 px-4">
//             <div>
//               <img
//                 src={Icons.profilePic}
//                 alt="user profile picture"
//                 className="h-15 w-15 rounded-full"
//               />
//             </div>
//             <div>
//               <h1 className="text-[1.5rem] font-semibold text-textClr leading-[100%]">Dr Cori</h1>
//               <p className="text-[1.175rem] text-stroke">cori@gmail.com</p>
//             </div>
//           </div>
//        </div>
      
//      </div>


      
//     </div>
//   );
// };

// export default Header;


import React from "react";
import { HiMenu } from "react-icons/hi";
import Icons from "../../assets/image";

const Header = ({ setSidebarOpen }) => {
  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 h-22.5 bg-White px-4 flex items-center z-40">
      <div className="flex items-center justify-between w-full">
        {/* Hamburger icon on mobile only */}
        <button
          className="md:hidden mr-4"
          onClick={() => setSidebarOpen(true)}
          aria-label="Toggle Sidebar"
        >
          <HiMenu className="text-2xl" />
        </button>

        {/* Right Side: Profile Info */}
        <div className="flex items-center gap-4 ml-auto">
          <img
            src={Icons.profilePic}
            alt="user profile"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="hidden md:block">
            <h1 className="text-[1.25rem] font-semibold text-textClr leading-[100%]">
              Dr Cori
            </h1>
            <p className="text-[1rem] text-stroke">cori@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
