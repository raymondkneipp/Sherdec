import React from "react";

const Avatar = ({ image, large }) => {
  return (
    <div
      className={`text-primary-content text-opacity-80 bg-primary mask mask-squircle flex items-center justify-center ${
        large ? "h-20 w-20" : "w-16 h-16"
      }`}
    >
      {image}
    </div>
  );
};

export default Avatar;
