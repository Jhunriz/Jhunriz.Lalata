import React, { useState, useEffect } from "react";
import SkillCards from "../Components/Card";
import react from "../assets/react2.png";
import laravel from "../assets/laravel2.png";
import mysql from "../assets/mysql.png";
export default function Skills() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((rotation) => rotation + 1);
    }, 30);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div class="grid grid-col lg:grid-cols-3 justify-items-center gap-5 lg:px-32 py-24">
      <SkillCards
        title={"Reactjs"}
        styledColor={"bg-blue-100"}
        image={react}
        style={{
          fontSize: "30vh",
          transform: `rotate(${rotation}deg)`,
          color: "",
        }}
      />
      <SkillCards
        title={"Laravel"}
        styledColor={"bg-red-100"}
        image={laravel}
        style={{
          fontSize: "30vh",
          transform: `rotate(${rotation}deg)`,
          color: "",
        }}
      />
      <SkillCards
        title={"MySQL"}
        image={mysql}
        styledColor={"bg-gray-200"}
        style={{
          fontSize: "30vh",
          transform: `rotate(${rotation}deg)`,
          color: "",
        }}
      />
    </div>
  );
}
