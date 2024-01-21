import React, { useEffect } from "react";
import jhunriz from "../assets/jhunriz.png";
import SecondaryButton from "../Components/SecondaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Introduction() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center p-28 lg:p-10">
        <img src={jhunriz} className="z-20" />
        <p
          data-aos="fade-right"
          className="text-6xl lg:text-8xl md:text-9xl font-extrabold absolute z-10 uppercase mx-24"
        >
          Full Stack web developer
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="lg:text-5xl text-2xl font-bold uppercase">
          Full Stack Web Developer
        </p>
        <p className="lg:text-2xl px-10 font-bold text-gray-500 py-5">
          Hey, I am{" "}
          <strong className="text-black uppercase">
            Jhunriz Barcoma Lalata
          </strong>{" "}
          {}a Full Stack Developer I have Experience in Coding for 4 years
        </p>
        <div className="flex flex-grow justify-center items-center gap-5">
          <a href="https://www.linkedin.com/in/jhunriz-b-lalata-036a6b272/">
            <SecondaryButton>
              <div className="flex flex-grow justify-center items-center gap-1">
                <ion-icon name="logo-linkedin"></ion-icon>
                LinkedIn
              </div>
            </SecondaryButton>
          </a>
          <button className="`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-dark-300 uppercase tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
            <a href="https://github.com/Jhunriz">
              <div className="flex justify-center items-center gap-1">
                <ion-icon name="logo-github"></ion-icon>Github
              </div>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
