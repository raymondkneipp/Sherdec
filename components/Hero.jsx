import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="container py-20 sm:py-32 md:py-40 lg:py-56 xl:py-64 flex items-center justify-start"
      style={{
        backgroundImage: "url('/images/tree-with-climber.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        minHeight: "80vh",
      }}
    >
      <div className="max-w-3xl">
        <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold">
          Tree work can be hazardous! Hire an arborist.
        </h1>
        <p className="mb-5 text-xl md:text-2xl opacity-80">
          Sherdec Tree Service leads the way with the Tri-state&apos;s most
          comprehensive tree care service.
        </p>
        <div className="flex flex-wrap">
          <Link href="/schedule">
            <a className="btn btn-lg btn-primary m-2">Schedule</a>
          </Link>
          <Link href="/contact">
            <a className="btn btn-lg m-2">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
