import React from "react";
import { Avatar } from "..";

const InfoItem = ({ icon, title, description, className }) => {
  return (
    <div className={`text-primary grid grid-flow-col gap-5 ${className}`}>
      <Avatar image={icon} />
      <div className="col-span-2">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base-content text-opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default InfoItem;
