// import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="m-12 flex flex-row justify-between items-stretch font-Poppins">
      <div className="font-bold text-2xl tracking-normal">
        <a href="#">
          <img
            className="max-w-fit"
            src="/images/logo.png"
            alt="Design Agency"
          />
        </a>
      </div>
      <nav>
        <ul className="flex font-medium text-lg tracking-normal text-black gap-x-4">
          <NavLink
            to="/login"
            className="border border-green-700 border-solid rounded-lg w-22"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="border border-green-700  border-solid rounded-lg bg-green-700 w-26"
          >
            Register
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
