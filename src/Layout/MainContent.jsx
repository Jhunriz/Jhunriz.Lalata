import React from "react";
import Introduction from "../Pages/Introduction";
import About from "../Pages/About";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-24">
      <div>
        <Introduction />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
