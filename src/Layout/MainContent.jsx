import React from "react";
import Introduction from "../Pages/Introduction";
import Skills from "../Pages/Skills";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-24">
      <div>
        <Introduction />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}
