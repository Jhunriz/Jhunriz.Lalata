import React from "react";
import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 20;
}
`;
const AniNavTextContent = styled.text`
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    color: gray;
  }
`;

export default function AnimatedNavbarText({ display }) {
  return <AniNavTextContent>{display}</AniNavTextContent>;
}
