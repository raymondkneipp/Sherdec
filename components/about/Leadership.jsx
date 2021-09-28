import React from "react";
import LeadershipItem from "./LeadershipItem";

const Leadership = () => {
  return (
    <div className="container grid grid-flow-row xl:grid-flow-col gap-10 py-32">
      <div className="flex flex-col justify-start items-start">
        <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold">
          Meet Our Leadership
        </h1>

        <p className="text-base-content opacity-70 xl:max-w-md mb-5 text-lg md:text-2xl">
          Get to know the tree care experts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start gap-10">
        <LeadershipItem
          name="Tod Miller"
          title="Founder / CEO"
          image="tod.jpg"
        />
        <LeadershipItem
          name="Jerry Jones"
          title="Marketing Manager"
          image="placeholder.png"
        />
        <LeadershipItem
          name="Mark Williams"
          title="Finance Manager"
          image="placeholder.png"
        />
        <LeadershipItem
          name="John Doe"
          title="Arborist"
          image="placeholder.png"
        />
        <LeadershipItem
          name="Cameron Barger"
          title="Arborist"
          image="placeholder.png"
        />
        <LeadershipItem
          name="George Washington"
          title="Arborist"
          image="placeholder.png"
        />
      </div>
    </div>
  );
};

export default Leadership;
