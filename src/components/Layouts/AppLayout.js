import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen  h-full relative bg-[#FAFAFA]">
      <Sidebar />
      <main className="mr-0 bg-[#FAFAFA] py-10 px-6 ml-64">{children}</main>
    </div>
  );
};

export default AppLayout;
