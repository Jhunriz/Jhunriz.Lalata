import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navBar, setNavBar] = useState(false);

  const toggleMenu = () => {
    setNavBar(!navBar);
  };

  return (
    <>
      <div className="sticky lg:flex lg:flex-grow gap-5 justify-between lg:justify-between items-center p-10 lg:p-8 shadow-2xl w-full top-0 bg-white z-50 lg:px-24">
        <div className="flex flex-grow w-full justify-between items-center">
          <div className="text-xl lg:text-3xl font-semibold">JL-DEV</div>
          <div
            className="lg:hidden justify-end cursor-pointer"
            onClick={toggleMenu}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
        <div
          className={`lg:flex lg:justify-center justify-center flex flex-col lg:flex-row items-center gap-5 ${
            navBar ? "flex" : "hidden"
          } mt-5`}
        >
          <ul className="flex flex-col lg:flex-row gap-5">
            <li>
              <Link
                className="hover:font-bold cursor-pointer flex flex-grow w-full py-2 justify-center items-center"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold cursor-pointer flex flex-grow w-full py-2 justify-center items-center"
                to={"/Skills"}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold cursor-pointer flex flex-grow w-full py-2 justify-center items-center"
                to={"/Skills"}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold cursor-pointer flex flex-grow w-full py-2 justify-center items-center"
                to={"/Skills"}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold cursor-pointer flex flex-grow w-full py-2 justify-center items-center"
                to={"/Skills"}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
