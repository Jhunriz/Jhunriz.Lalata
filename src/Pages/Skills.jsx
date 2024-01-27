import React, { useState, useEffect } from "react";
import AnimatedSkills from "../Components/AnimatedSkills";

export default function Skills() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((rotation) => rotation + 1);
    }, 30);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div class="grid grid-col lg:grid-cols-4 justify-items-center gap-10 lg:px-96 py-24">
      <AnimatedSkills title="test" />
    </div>
  );
}
