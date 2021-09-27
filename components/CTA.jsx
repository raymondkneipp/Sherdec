import React from "react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="bg-base-100 text-base-content py-32">
      <div className="container max-w-screen-sm flex flex-col items-center space-y-5 text-center">
        <h2 className="font-bold text-4xl sm:text-5xl">
          Schedule Your Free Estimate Today
        </h2>

        <p className="sm:text-lg">
          We take on jobs of all sizes from pruning, fertilizing or removing one
          small tree to large scale management or removal projects.
        </p>

        <Link href="/schedule">
          <a className="btn btn-lg btn-primary">Schedule</a>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
