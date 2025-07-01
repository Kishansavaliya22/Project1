// import React from "react";

export default function Header() {
  return (
    <header class="flex flex-row justify-between items-stretch font-[Poppins]">
      <div class="font-bold text-2xl tracking-normal">
        <a href="#">
          <img
            class="max-w-fit"
            src="../../../public/images/logo.png"
            alt="Design Agency"
          />
        </a>
      </div>
      <nav>
        <ul class="flex font-medium text-lg tracking-normal text-black">
          <li class="px-2">Services</li>
          <li class="px-2">About Us</li>
          <li class="px-2">Contact Us</li>
          <li class="px-2 border-solid border-black">Login</li>
          <li class="px-2">Register</li>
        </ul>
      </nav>
    </header>
  );
}
