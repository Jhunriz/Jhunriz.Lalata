import React from "react";
import styled from "styled-components";

const Facebook = styled.button`
  background-color: ${(props) => props.backgroundColor || "black"};
  border: none;
  color: ${(props) => props.textColor || "white"};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  width: ${(props) => props.width || "20vh"};
  position: fixed;
  bottom: 29vh;
  z-index: 20;
  transform: translateX(-70%);
  transition: 1s;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 9vh;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "Blue"};
    transform: translateX(-10%);
    color: ${(props) => props.hoverTextColor || "white"};
    z-index: 50;
  }
`;

const Github = styled.button`
  background-color: ${(props) => props.backgroundColor || "black"};
  border: none;
  color: ${(props) => props.textColor || "white"};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  width: ${(props) => props.width || "20vh"};
  position: fixed;
  bottom: 23vh;
  z-index: 20;
  transform: translateX(-70%);
  transition: 1s;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 12vh;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "purple"};
    transform: translateX(-10%);
    color: ${(props) => props.hoverTextColor || "black"};
    z-index: 50;
  }
`;

const LinkedIn = styled.button`
  background-color: ${(props) => props.backgroundColor || "black"};
  border: none;
  color: ${(props) => props.textColor || "white"};
  padding: 15px 32px;
  text-align: right;
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  width: ${(props) => props.width || "20vh"};
  position: fixed;
  bottom: 17vh;
  z-index: 20;
  transform: translateX(-70%);
  transition: 1s;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 10vh;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "lightblue"};
    transform: translateX(-10%);
    color: ${(props) => props.hoverTextColor || "blue"};
    z-index: 50;
  }
`;

const FeedbackButton = ({ onClick, label, ...props }) => {
  return (
    <div>
      <Facebook key="Facebook" onClick={onClick} {...props}>
        {label || "Facebook"} <ion-icon name="logo-facebook"></ion-icon>
      </Facebook>
      <Github key="Github" onClick={onClick} {...props}>
        {label || "Github"} <ion-icon name="logo-github"></ion-icon>
      </Github>
      <LinkedIn key="LinkedIn" onClick={onClick} {...props}>
        {label || "LinkedIn"} <ion-icon name="logo-linkedin"></ion-icon>
      </LinkedIn>
    </div>
  );
};

export default FeedbackButton;
