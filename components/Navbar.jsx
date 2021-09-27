import React from "react";
import Link from "next/link";
import { Logo } from "./icons";

const Navbar = () => {
  return (
    <nav className="bg-base-100 border-b border-base-200 text-base-content z-50 md:sticky left-0 right-0 top-0">
      <div className="container navbar">
        <div className="flex-1 text-primary">
          <Logo />
          <span className="text-3xl font-bold font-lucida ml-5 text-base-content">
            Sherdec
          </span>
        </div>
        <div className="flex-none hidden lg:block">
          <div className="flex items-stretch">
            <Link href="/">
              <a className="btn btn-ghost rounded-btn">Home</a>
            </Link>
            <Link href="/about">
              <a className="btn btn-ghost rounded-btn">About</a>
            </Link>
            <Link href="/services">
              <a className="btn btn-ghost rounded-btn">Services</a>
            </Link>
            <Link href="/contact">
              <a className="btn btn-ghost rounded-btn">Contact</a>
            </Link>
            <div className="dropdown dropdown-hover">
              <div tabIndex="0" className="btn btn-ghost">
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
                tabIndex="0"
                className="p-2 border border-base-200 shadow-xl menu dropdown-content bg-base-100 rounded-box w-52"
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
            <a className="btn btn-primary rounded-btn">Schedule</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
