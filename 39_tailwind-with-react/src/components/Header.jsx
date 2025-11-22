import React from "react";
import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
      <img src={viteLogo} alt="vite-logo" />
      <ul className="flex gap-4">
        <li>
          <a className="text-blue-700 underline" href="/home">
            Home
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
