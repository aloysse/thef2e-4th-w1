import React, { useEffect } from "react";
import joinUsImg from "../assets/img/join_us.svg";
import { gsap } from "gsap";

const HeroMarquee = () => {
  useEffect(() => {
    gsap.to("#joinUs", 5, {
      backgroundPosition: "300px 0",
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <div>
      <div
        id="joinUs"
        className="lg:bg-[length:300px_46px] bg-[length:150px_23px] bg-repeat-x lg:h-[46px] h-[23px] w-full text-[48px] font-Monument hero-marquee text-transparent"
        style={{ backgroundImage: `url(${joinUsImg})` }}
      ></div>
    </div>
  );
};

export default HeroMarquee;
