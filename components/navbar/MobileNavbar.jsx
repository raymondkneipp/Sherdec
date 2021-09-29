import React from "react";
import Link from "next/link";
import { DownArrow } from "../icons";

const MobileNavbar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul
        className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content space-y-2"
        style={{ maxWidth: "100vw" }}
      >
        <li className="ml-auto">
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost drawer-button btn-square"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </li>
        <li>
          <Link href="/">
            <a className="btn btn-ghost leading-4">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="btn btn-ghost leading-4">About</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a className="btn btn-ghost leading-4">Services</a>
          </Link>
        </li>
        <li>
          <div className="dropdown w-full">
            <div tabIndex="0" className="btn btn-block btn-ghost">
              Tree Care
              <DownArrow />
            </div>
            <ul
              tabIndex="0"
              className="p-2 border border-base-200 shadow-xl menu dropdown-content bg-base-100 rounded-box w-full"
            >
              <li>
                <Link href="/seasonal-care">
                  <a>Seasonal Care</a>
                </Link>
              </li>
              <li>
                <Link href="/health-maintenance">
                  <a>Health/Maintenance</a>
                </Link>
              </li>
              <li>
                <Link href="/insects">
                  <a>Insects</a>
                </Link>
              </li>
              <li>
                <Link href="/disease">
                  <a>Disease/Fertilization</a>
                </Link>
              </li>
              <li>
                <Link href="/pruning-tips">
                  <a>Pruning Tips</a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/contact">
            <a className="btn btn-ghost leading-4">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/estimate">
            <a className="btn btn-primary leading-4">Free Estimate</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
