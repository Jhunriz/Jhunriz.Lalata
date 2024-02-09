import React from "react";
import Footer from "./Footer";
import StyledNavbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <StyledNavbar />
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
