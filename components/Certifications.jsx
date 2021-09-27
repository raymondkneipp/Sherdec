import React from "react";
import Image from "next/image";

const Certifications = () => {
  const size = 100;

  return (
    <div className="container grid grid-flow-row lg:grid-flow-col gap-10 items-center py-32">
      <div className="lg:max-w-md">
        <h2 className="text-4xl font-bold mb-5 text-primary">
          {/* Trusted Tree Care Experts */}
          Triple Certified Tree Care & Removal Company
        </h2>
        <p className="text-base-content">
          Sherdec Tree Service gives each and every job the attention to detail
          and safety you would expect. We have extensive training and experience
          in extremely difficult and highly sensitive removals.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-10 opacity-30">
        <Image
          src="/images/acrt.png"
          layout="intrinsic"
          objectFit="contain"
          width={size / 2}
          height={size}
          alt="acrt certification"
        />
        <Image
          src="/images/ash-bore.png"
          layout="intrinsic"
          objectFit="contain"
          width={size / 2}
          height={size}
          alt="no ash bore"
        />
        <Image
          src="/images/isa.png"
          layout="intrinsic"
          objectFit="contain"
          width={size / 2}
          height={size}
          alt="isa certification"
        />
        <Image
          src="/images/tcta.png"
          layout="intrinsic"
          objectFit="contain"
          width={size / 2}
          height={size}
          alt="tcta certification"
        />
      </div>
    </div>
  );
};

export default Certifications;
