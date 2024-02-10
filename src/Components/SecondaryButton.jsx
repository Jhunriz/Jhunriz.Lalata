import React from "react";
import styled from "styled-components";

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background-color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  outline: none;
  color: var(--text);
  transition: ease-in-out 150ms;

  &:focus {
    ring: 2px black;
    ring-offset: 2px;
  }
  &:disabled {
    opacity: 0.25;
    pointer-events: none;
  }

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.25;
  `}
`;

export default function StyledSecondaryButton({
  type = "button",
  className = "",
  title,
  disabled,
  children,
  ...props
}) {
  return (
    <SecondaryButton
      type={type}
      title={title}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </SecondaryButton>
  );
}
