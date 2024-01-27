import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 20;
  }
`;

const CardWrapper = styled.div`
  width: 300px;
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0px;
  transition: transform 0.3s;
  background-color: #191919;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border: none;
  padding: 20px;
`;

const CardContent = styled.div`
  padding: 16px;
  background-color: #353535;
  border-radius: 5px;
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  font-family: arial;
  margin-bottom: 15px;
  color: black;
  font-family: Nunito;
  font-weight: bold;
  color: white;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: white;
`;

const AnimatedSkills = ({ title, Description, imageUrl, bg }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Adjust this threshold as needed

      setIsVisible(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <CardWrapper isVisible={isVisible} className={bg}>
        <CardImage src={imageUrl} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{Description}</CardDescription>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

export default AnimatedSkills;
