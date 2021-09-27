import React from "react";
import { Address, Email, Facebook, Fax, Instagram, Phone } from "../icons";
import MethodItem from "./MethodItem";

const Methods = () => {
  return (
    <div className="bg-base-100 py-32">
      <div className="container grid grid-flow-row xl:grid-flow-col gap-10">
        <div className="flex flex-col justify-start items-start">
          <h1 class="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold">
            Get in touch
          </h1>

          <p className="text-base-content opacity-70 xl:max-w-md mb-5 text-lg md:text-2xl">
            Contact one of our friendly representatives, for a free estimate
            today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start gap-10">
          <MethodItem
            icon={<Address />}
            method="Address"
            value={
              <a
                href="https://www.google.com/maps/dir//3898+McMann+Rd,+Cincinnati,+OH+45245,+USA"
                className="link select-all"
              >
                3898 McMann Rd Cincinnati, OH 45245
              </a>
            }
          />

          <MethodItem
            icon={<Phone />}
            method="Office"
            value={
              <a href="tel:+1 (513) 943-1797" className="link select-all">
                +1 (513) 943-1797
              </a>
            }
          />

          <MethodItem
            icon={<Fax />}
            method="Fax"
            value={
              <a href="tel:+1 (513) 943-0293" className="link select-all">
                +1 (513) 943-0293
              </a>
            }
          />

          <MethodItem
            icon={<Email />}
            method="Email"
            value={
              <a
                href="mailto:info@sherdectreeservice.com"
                className="link select-all break-all"
              >
                info@sherdectreeservice.com
              </a>
            }
          />

          <MethodItem
            icon={<Facebook />}
            method="Facebook"
            value={
              <a
                href="https://www.facebook.com/Sherdec-Tree-Service-123190798017856/"
                className="link"
              >
                Message us on Facebook
              </a>
            }
          />

          <MethodItem
            icon={<Instagram />}
            method="Instagram"
            value={
              <a
                href="https://www.instagram.com/sherdectreeservice/"
                className="link"
              >
                Follow us in Instagram
              </a>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Methods;
