import React from "react";
import { Avatar } from "..";

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="text-primary grid grid-flow-col gap-5">
      <Avatar image={icon} />
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base-content text-opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
