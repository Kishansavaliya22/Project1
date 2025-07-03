// import React from "react";

export default function Header() {
  return (
    <header class="flex flex-row justify-between items-stretch font-Poppins">
      <div class="font-bold text-2xl tracking-normal">
        <a href="#">
          <img class="max-w-fit" src="/images/logo.png" alt="Design Agency" />
        </a>
      </div>
      <nav>
        <ul class="flex font-medium text-lg tracking-normal text-black gap-x-4">
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li class="border border-green-700 border-solid rounded-lg w-22">
            Login
          </li>
          <li class="border border-green-700  border-solid rounded-lg bg-green-700 w-26">
            Register
          </li>
        </ul>
      </nav>
    </header>
  );
}
