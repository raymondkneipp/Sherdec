import React from "react";
import Link from "next/link";
import { Fertilizer, Insect, Leaf, Pruning, Rope, Stump } from "../icons";
import ServiceItem from "./ServiceItem";

const Services = ({ simplified }) => {
  return (
    <div className={`${simplified ? "bg-base-200" : "bg-base-100"} py-32`}>
      <div className="container grid grid-flow-row xl:grid-flow-col gap-10">
        <div className="flex flex-col justify-start items-start">
          {simplified ? (
            <h2 className="text-4xl font-bold mb-5">Tree Care Services</h2>
          ) : (
            <h1 class="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold xl:max-w-md">
              Tree Care Services
            </h1>
          )}

          <p className="text-base-content opacity-70 xl:max-w-md mb-5">
            Sherdec Tree Service offers a wide variety of services and free
            estimates to help you maintain and care for your trees.{" "}
            {!simplified &&
              "With the following menu of tree care services, Sherdec strives to be a leader in our industry in the Tri State."}
          </p>
          {simplified && (
            <Link href="/services">
              <a class="btn">All Services</a>
            </Link>
          )}
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          <ServiceItem
            icon={<Pruning />}
            title="Pruning"
            description="Nature has no reason to grow trees that fit our expectations for safety, appearance, and longevity. Prune to provide clearance from power lines."
          />

          <ServiceItem
            icon={<Fertilizer />}
            title="Fertilizing"
            description="When the ground thaws, Sherdec can begin rootcare fertilization of trees with Sherdec’s slow release fertilizer."
          />

          <ServiceItem
            icon={<Stump />}
            title="Tree Removal"
            description="We take on jobs of all sizes from removing one small tree to large scale projects and even emergency and crane removal."
          />

          <ServiceItem
            icon={<Leaf />}
            title="Seasonal Care"
            description="To keep a tree healthy and beautiful, they require year round care."
          />

          {!simplified && (
            <>
              <ServiceItem
                icon={<Insect />}
                title="Insect & Disease Treatment"
                description="We will diagnose and treat any tree damaged by insects or diseases."
              />

              <ServiceItem
                icon={<Rope />}
                title="Bracing / Guying"
                description="Tree cabling involves the installation of hardware that will reduce the risk of catastrophic failure. We also provide a structural analysis / risk assessment."
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
