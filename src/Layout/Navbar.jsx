import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedNavbarText from "../Components/AnimatedNavbarText";
import styled from "styled-components";
import StyledSecondaryButton from "../Components/SecondaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Logo = styled.a`
  color: var(--text);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Nav = styled.nav`
  background: var(--background);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-left: 8rem;
  padding-right: 8rem;
  position: relative;
  z-index: 10;
  border-bottom: 2px solid var(--accent);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: #160df9;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    background: #333;
    transition: left 0.3s ease-in-out;
  }
`;

const MenuItem = styled.a`
  color: var(--text);
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 20px;

  &:hover {
    color: var(--text);
  }

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

const StyledNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Nav>
        <Logo href="#" data-aos="fade-right">
          DEV.J
        </Logo>
        <MenuIcon onClick={toggle}>
          <i className={isOpen ? "X" : "X"}></i>
        </MenuIcon>
        <Menu isOpen={isOpen} data-aos="fade-right">
          <MenuItem>
            <Link to={"/"}>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Skills"}>Skills</Link>
          </MenuItem>
          <MenuItem href="#">Services</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
          <MenuItem href="#">
            <StyledSecondaryButton title="DOWNLOAD CV">
              Download CV
            </StyledSecondaryButton>
          </MenuItem>
        </Menu>
      </Nav>
    </div>
  );
};

export default StyledNavbar;
