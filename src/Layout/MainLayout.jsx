import React from "react";
import Footer from "./Footer";
import StyledNavbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <StyledNavbar />
      <main className="lg:px-24 md:px-40 py-24">{children}</main>
    </div>
  );
};

export default MainLayout;
