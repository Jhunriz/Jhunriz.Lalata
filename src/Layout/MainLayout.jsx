import React from "react";
import Footer from "./Footer";
import StyledNavbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <StyledNavbar />
      <main className="py-24">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
