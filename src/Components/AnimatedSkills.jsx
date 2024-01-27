import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  font-family: arial;
  margin-bottom: 15px;
  color: purple;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const AnimatedSkills = ({ title, Description, imageUrl }) => {
  return (
    <div className="">
      <CardWrapper>
        {/* <CardImage src={imageUrl} alt={title} /> */}
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{Description}</CardDescription>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

export default AnimatedSkills;
