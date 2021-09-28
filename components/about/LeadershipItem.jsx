import React from "react";
import Image from "next/image";
import { Avatar } from "..";

const LeadershipItem = ({ image, name, title }) => {
  return (
    <div className="grid grid-flow-col gap-5 items-center">
      <Avatar
        large
        image={
          <Image
            src={`/images/${image}`}
            layout="intrinsic"
            width="100"
            height="100"
          />
        }
      />

      <div className="flex flex-col justify-center">
        <h5 className="text-base-content text-lg mb-1">{name}</h5>
        <h6 className="text-primary text-base">{title}</h6>
      </div>
    </div>
  );
};

export default LeadershipItem;
