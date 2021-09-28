import React from "react";

const InfoItem = ({ icon, title, description, className }) => {
  return (
    <div className={`text-primary grid grid-flow-col gap-5 ${className}`}>
      <div className="text-primary-content text-opacity-80 bg-primary mask mask-squircle w-16 h-16 flex items-center justify-center mb-5">
        {icon}
      </div>
      <div className="col-span-2">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base-content text-opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default InfoItem;
