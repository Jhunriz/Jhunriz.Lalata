import React from "react";
import Footer from "./Footer";
import StyledNavbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <StyledNavbar />
      <main className="px-24 py-24">{children}</main>
    </div>
  );
};

export default MainLayout;
