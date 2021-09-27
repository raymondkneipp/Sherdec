import React from "react";
import Link from "next/link";
import { Logo } from "./icons";

const Navbar = () => {
  return (
    <nav class="bg-base-100 border-b border-base-200 text-base-content z-50 md:sticky left-0 right-0 top-0">
      <div className="container navbar">
        <div class="flex-1 text-primary">
          <Logo />
          <span class="text-3xl font-bold font-lucida ml-5 text-base-content">
            Sherdec
          </span>
        </div>
        <div class="flex-none hidden lg:block">
          <div class="flex items-stretch">
            <Link href="/">
              <a class="btn btn-ghost rounded-btn">Home</a>
            </Link>
            <Link href="/about">
              <a class="btn btn-ghost rounded-btn">About</a>
            </Link>
            <Link href="/services">
              <a class="btn btn-ghost rounded-btn">Services</a>
            </Link>
            <Link href="/contact">
              <a class="btn btn-ghost rounded-btn">Contact</a>
            </Link>
            <div class="dropdown dropdown-hover">
              <div tabindex="0" class="btn btn-ghost">
                Tree Care
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                class="p-2 border border-base-200 shadow-xl menu dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Seasonal Care</a>
                </li>
                <li>
                  <a>Health/Maintenance</a>
                </li>
                <li>
                  <a>Insects</a>
                </li>
                <li>
                  <a>Disease/Fertilization</a>
                </li>
                <li>
                  <a>Pruning Tips</a>
                </li>
              </ul>
            </div>
            <a class="btn btn-primary rounded-btn">Schedule</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
