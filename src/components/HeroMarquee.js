import React, { useLayoutEffect } from "react";
import joinUsImg from "../assets/img/join_us.svg";
import { gsap } from "gsap";

const HeroMarquee = () => {
  useLayoutEffect(() => {
    console.log("animate");
    gsap.to("#joinUs", 5, {
      backgroundPosition: "374px 0",
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <div>
      <div
        id="joinUs"
        className="bg-[length:374px_58px] bg-repeat-x h-[58px] w-full text-[48px] font-Monument hero-marquee text-transparent"
        style={{ backgroundImage: `url(${joinUsImg})` }}
      ></div>
    </div>
  );
};

export default HeroMarquee;
