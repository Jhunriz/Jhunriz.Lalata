import React, { useEffect } from "react";
import jhunriz from "../assets/jhunriz.png";
import SecondaryButton from "../Components/SecondaryButton";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "../Layout/MainLayout";
import styled from "styled-components";

export default function Introduction() {
  useEffect(() => {
    AOS.init();
  }, []);

  const CvTitle = styled.h1`
    display: inline-block;
    padding: 50px;
    font-size: 40px;
    font-weight: 800;
    background-image: linear-gradient(135deg, #fff, #f2f2f2, var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-family: "poppins", ui-sans-serif;

    @media (max-width: 768px) {
      padding: 0 10px;
      font-size: 40px;
    }

    @media (max-width: 400px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  const CvtitleDiv = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    direction: column;
    padding: 10px;
    margin: 5px;
  `;

  return (
    <>
      <CvtitleDiv>
        <CvTitle data-aos="fade-right">Hay' im Jhunriz.</CvTitle>
      </CvtitleDiv>

      {/* <div className="flex flex-col justify-center items-center">
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
      </div> */}
    </>
  );
}
