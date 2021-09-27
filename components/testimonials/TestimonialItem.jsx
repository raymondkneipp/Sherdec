import React from "react";
import Image from "next/image";

const TestimonialItem = ({ image, name, quote }) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg mb-5 text-neutral-content text-opacity-80 flex-1">
        &quot;{quote}&quot;
      </p>

      <div className="flex items-center space-x-5">
        <div className="mask mask-squircle w-16 h-16">
          <Image
            src={`/images/${image}`}
            layout="intrinsic"
            objectFit="cover"
            width={80}
            height={80}
            alt="Customer image"
          />
        </div>

        <h6 className="text-lg font-bold">{name}</h6>
      </div>
    </div>
  );
};

export default TestimonialItem;
