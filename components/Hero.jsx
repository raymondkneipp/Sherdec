import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="container py-20 sm:py-32 md:py-40 lg:py-56 xl:py-64 flex items-center justify-start"
      style={{
        backgroundImage: "url('/images/tree.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      <div class="max-w-3xl">
        <h1 class="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold">
          Tree work can be hazardous! Hire an arborist.
        </h1>
        <p class="mb-5 text-xl md:text-2xl opacity-80">
          Sherdec Tree Service leads the way with the Tri-states' most
          comprehensive tree care service.
        </p>
        <div className="space-x-0 space-y-2 flex flex-col sm:space-y-0 sm:space-x-5 sm:flex-row items-start">
          <Link href="/schedule">
            <a className="btn md:btn-lg btn-primary">Schedule</a>
          </Link>
          <Link href="/contact">
            <a className="btn md:btn-lg">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
