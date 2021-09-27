import React from "react";
import Star from "../icons/Star";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div className="bg-neutral text-neutral-content py-32">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 justify-between mb-10">
          <h2 className="text-4xl font-bold">What Our Customers Say</h2>
          <div className="flex space-x-2 text-warning">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
          <TestimonialItem
            image="randy.jpg"
            name="Randy Fischer"
            quote="Probably the BEST service provider I've ever had the pleasure to deal with. Courteous, quality service at a fair price..."
          />

          <TestimonialItem
            image="rob.jpg"
            name="Rob Roberts"
            quote="Sherdec came out on short notice to take a tree out, fence grown into it out. Guys got it out when others could not."
          />
          <TestimonialItem
            image="michael.jpg"
            name="Michael Ward"
            quote="I can’t think Tod enough for his hard work and wicked equipment! I had 13 or 14 huge stumps most places couldn’t touch."
          />

          <TestimonialItem
            image="lisa.jpg"
            name="Lisa M Corlett"
            quote="These guys are patient, professional and efficient. Thank you guys so much for making this day go better for me."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
