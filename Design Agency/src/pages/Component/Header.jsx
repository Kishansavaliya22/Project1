// import React from "react";

export default function Header() {
  return (
    <header class="flex flex-row justify-between items-stretch font-[Poppins]">
      <div class="font-bold text-2xl tracking-normal">
        <a href="#">
          <img class="max-w-fit" src="/images/logo.png" alt="Design Agency" />
        </a>
      </div>
      <nav>
        <ul class="flex font-medium text-lg tracking-normal text-black gap-x-8">
          <li class="px-3 w-33">Services</li>
          <li class="px-3 w-26">About Us</li>
          <li class="px-3 w-31">Contact Us</li>
          <li class="px-3 border border-[#20B15A] border-solid rounded-lg w-26">
            Login
          </li>
          <li class="px-3 border border-[#20B15A] border-solid rounded-lg bg-[#20B15A] w-30">
            Register
          </li>
        </ul>
      </nav>
    </header>
  );
}
