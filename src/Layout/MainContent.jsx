import React from "react";
import MainLayout from "./MainLayout";
import Introduction from "../Pages/Introduction";

const MainContent = () => {
  return (
    <MainLayout>
      <div>
        <Introduction />
      </div>
    </MainLayout>
  );
};

export default MainContent;
