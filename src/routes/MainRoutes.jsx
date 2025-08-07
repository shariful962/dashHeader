// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Profile from "../pages/Profile/Profile";
// import Settings from "../pages/Settings/Settings";

// const MainRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />

//       {/* Main application routes wrapped in MainLayout */}
//       <Route path="/" element={<MainLayout />} />
//       <Route path="/dashboard" element={<MainLayout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/settings" element={<Settings />} />
//       </Route>

//       {/* Catch-all route for 404 */}
//       <Route path="*" element={<div>404 Not Found</div>} />
//     </Routes>

//     // <Route element={<MainLayout />}>
//     //   <Route index element={<Dashboard />} />
//     //   <Route path="profile" element={<Profile />} />
//     //   <Route path="settings" element={<Settings />} />
//     // </Route>
//     // </Routes>
//   );
// };


// export default MainRoutes;


import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Settings/Settings";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Dashboard1 from "../pages/Dashboard/Dashboard1";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Default Route: SignIn */}
      <Route path="/" element={<SignIn />} />

      {/* Auth Routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;

