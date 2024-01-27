import React from "react";
import AnimatedSkills from "../Components/AnimatedSkills";

const Skills = () => {
  return (
    <div class="grid grid-col w- lg:grid-cols-3 justify-items-center items-center gap-3 py-24">
      <AnimatedSkills
        title="HTML5"
        Description={"sdfsdffsdafsdffasdasdfasdf"}
        bg={"hover:bg-orange-500"}
        imageUrl={"https://cdn-icons-png.flaticon.com/512/732/732212.png"}
      />
      <AnimatedSkills
        title="CSS3"
        Description={"sdfsdffsdafsdffasdasdfasdf"}
        imageUrl={
          "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
        }
      />
      <AnimatedSkills
        title="Javascript"
        Description={"sdfsdffsdafsdffasdasdfasdf"}
        imageUrl={
          "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
        }
      />
      <AnimatedSkills title="PHP" Description={"sdfsdffsdafsdffasdasdfasdf"} />
      <AnimatedSkills
        title="MySql"
        Description={"sdfsdffsdafsdffasdasdfasdf"}
      />
      <AnimatedSkills
        title="TailwindCss"
        Description={"sdfsdffsdafsdffasdasdfasdf"}
      />
      <AnimatedSkills
        title="Styled-Components"
        Description={"sdfsdffsdafsdffasdasdfasdf"}
      />
    </div>
  );
};

export default Skills;
