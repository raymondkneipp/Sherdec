import React from "react";
import Link from "next/link";
import { Logo } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container">
        <footer class="footer py-10">
          <div>
            <span className="text-primary mb-2">
              <Logo />
            </span>
            <p>Sherdec Tree Service LLC</p>
            <p>Triple Certified Tree Care & Removal Company</p>
            <p>
              Website by{" "}
              <a href="https://www.raymondkneipp.com/" className="link">
                Raymond Kneipp
              </a>
            </p>
          </div>
          <div>
            <span class="footer-title">Tree Care</span>
            <a class="link link-hover">Seasonal Care</a>
            <a class="link link-hover">Health / Maintenance</a>
            <a class="link link-hover">Insects</a>
            <a class="link link-hover">Disease / Fertilization</a>
            <a class="link link-hover">Pruning Tips</a>
          </div>
          <div>
            <span class="footer-title">Pages</span>
            <Link href="/">
              <a class="link link-hover">Home</a>
            </Link>
            <Link href="/about">
              <a class="link link-hover">About</a>
            </Link>
            <Link href="/contact">
              <a class="link link-hover">Contact</a>
            </Link>
            <Link href="/services">
              <a class="link link-hover">Services</a>
            </Link>
            <Link href="/schedule">
              <a class="link link-hover">Schedule</a>
            </Link>
          </div>
          <div>
            <span class="footer-title">Social</span>
            <a
              class="link link-hover"
              href="https://www.facebook.com/Sherdec-Tree-Service-123190798017856/"
            >
              Facebook
            </a>
            <a
              class="link link-hover"
              href="https://www.instagram.com/sherdectreeservice/"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
