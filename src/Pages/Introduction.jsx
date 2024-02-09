import React, { useEffect } from "react";
import jhunriz from "../assets/jhunriz.png";
import SecondaryButton from "../Components/SecondaryButton";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "../Layout/MainLayout";
import styled from "styled-components";
import JhunrizImage from "../assets/LALATA_JHUNRIZ.png";

export default function Introduction() {
  useEffect(() => {
    AOS.init();
  }, []);

  const CvTitle = styled.h1`
    display: inline-block;
    font-size: 40px;
    font-weight: 800;
    background-image: linear-gradient(135deg, #fff, #f2f2f2, var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-family: "poppins", ui-sans-serif;

    @media (max-width: 1440) {
      padding: 0 10px;
      font-size: 40px;
    }

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
    display: inline-block;
    padding: 50px;
  `;

  const CvParagraph = styled.p`
    color: var(--text);
    font-size: 20px;
    font-weight: 500;
  `;
  const CvPre = styled.p`
    color: var(--text);
    font-size: 16px;
    line-height: 1.5;
  `;
  const CvImageDiv = styled.div`
    display: flex;
    border-radius: 77% 20% 58% 34% / 48% 53% 28% 28%;
    padding: 300px;
    justify-content: flex-start;
    background-color: var(--accent);
    background-image: url(${JhunrizImage}); // Set the background image
    background-size: fit; // Adjust the size of the background image
    background-repeat: no-repeat;
    background-position: center; // Center the background image
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 400px) {
      display: flex;
      flex-direction: column;
    }
  `;

  const ContentDiv = styled.div`
    display: flex;
    flex-direction: row; /* Change to column */
    justify-content: center;
    align-items: center;
    padding-top: 20px;

    @media (max-width: 1250px) {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 400px) {
      display: flex;
      flex-direction: column;
    }
  `;

  return (
    <>
      <ContentDiv>
        <CvtitleDiv>
          <CvTitle data-aos="fade-right">Hay' im Jhunriz.</CvTitle>
          <CvParagraph className="text-white" data-aos="fade-right">
            A Junior Full Stact Developer
          </CvParagraph>
          <CvPre data-aos="fade-right">
            A dynamic and results-driven [Your Current Position or Professional
            Title], with a proven track record of [mention one or two key
            accomplishments or skills relevant to the position you're applying
            for]. With a background in [your field or industry], I bring
            [number] years of experience in [mention areas of expertise or key
            skills]. My dedication to [specific aspect of your work, e.g.,
            quality, efficiency, innovation] has consistently driven success in
            [mention relevant projects or responsibilities]. I am eager to
            leverage my skills and experience to [mention what you hope to
            achieve in the position you're applying for].
          </CvPre>
        </CvtitleDiv>
        <CvImageDiv data-aos="fade-right"></CvImageDiv>
      </ContentDiv>
    </>
  );
}
