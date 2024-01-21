import React from "react";
import Introduction from "../Pages/Introduction";
import Skills from "../Pages/Skills";
import FeedbackButton from "../Components/FeedBack";

export default function MainContent() {
  const handleFeedBackClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex flex-col gap-24">
      <div>
        <Introduction />
      </div>
      <div className="feedbackButton hidden sm:inline-block">
        <FeedbackButton width="30vh" />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}
