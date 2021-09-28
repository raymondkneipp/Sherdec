import React from "react";
import Image from "next/image";
import { Heart, Help, Shake, Target, Tree } from "../icons";
import InfoItem from "./InfoItem";

const Info = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-20 pb-32">
      <InfoItem
        className="order-1 md:order-1 xl:order-1"
        icon={<Tree />}
        title="About our company"
        description="We take on jobs of all sizes from pruning, fertilizing, or
                removing one small tree to large-scale management or removal
                projects. Sherdec Tree Service gives each and every job the
                attention to detail and safety you would expect."
      />

      <div className="mask mask-squircle order-2 md:order-2 xl:order-2">
        <Image
          src="/images/work5.jpg"
          layout="responsive"
          objectFit="cover"
          width="300"
          height="300"
        />
      </div>

      <InfoItem
        className="order-3 md:order-4 xl:order-3"
        icon={<Shake />}
        title="Trusted experts"
        description="We have
                extensive training and experience in extremely difficult and
                highly sensitive removals. We strive to always utilize the
                safest, cleanest, and most effective methods of removal by our
                staff of drug-tested employees who know what it takes to do the
                job right."
      />

      <div className="mask mask-squircle order-4 md:order-3 xl:order-3">
        <Image
          src="/images/work2.jpg"
          layout="responsive"
          objectFit="cover"
          width="300"
          height="300"
        />
      </div>

      <InfoItem
        className="order-5 md:order-5 xl:order-5"
        icon={<Help />}
        title="How we can help"
        description="Quality pruning improves the health and appearance of trees,
				prolonging their useful life by removing undesirable branches,
				whether they are dead, weakened, diseased, or insect-infested. We will diagnose tree diseases and help you work towards curing
				or preventing whatever problems might arise."
      />

      <div className="mask mask-squircle order-6 md:order-6 xl:order-6">
        <Image
          src="/images/work3.jpg"
          layout="responsive"
          objectFit="cover"
          width="300"
          height="300"
        />
      </div>

      <InfoItem
        className="order-7 md:order-8 xl:order-7"
        icon={<Target />}
        title="Our mission"
        description="Our mission is tree care, plain and simple. Yes, we know
				preventative maintenance is always better than corrective
				measures and we strive to help our valued customers be smart
				about their trees."
      />

      <div className="mask mask-squircle order-8 md:order-7 xl:order-8">
        <Image
          src="/images/work1.jpg"
          layout="responsive"
          objectFit="cover"
          width="300"
          height="300"
        />
      </div>

      <InfoItem
        className="order-9 md:order-9 md:col-span-2 xl:col-span-1 xl:order-9"
        icon={<Heart />}
        title="What we value"
        description="We are committed to the values of safety, quality, family,
				growth, ethical practices, environmental stewardship,
				trust/accountability, and communication. It is how we do our
				work and run our business. We firmly believe that how you do anything is how you do
				everything. We are a team of people who have a particular
				passion not only for tree care but also for people who want to
				care for their trees."
      />
    </div>
  );
};

export default Info;
