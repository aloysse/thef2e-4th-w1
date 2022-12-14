import React, { useEffect } from "react";
import codeImg from "../assets/img/code.png";
import webPageImg from "../assets/img/web_page.png";
import pacman1 from "../assets/img/pacman-1.svg";
import pacman2 from "../assets/img/pacman-2.svg";
import SignUpButton from "./SignUpButton";
import { gsap } from "gsap";

const Hero = () => {
  const heroTl = gsap.timeline();
  useEffect(() => {
    //動畫設定
    heroTl
      .from("#codeImg", 1, { y: 50, opacity: 0 })
      .from("#webPageImg", 1, { y: 50, opacity: 0 }, "<")
      .from("#title", 1, { y: 50, opacity: 0 }, "<")
      .to("#codeImg", 1.5, {
        y: 30,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      })
      .to(
        "#webPageImg",
        1.5,
        {
          y: -30,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);

  return (
    <section className="pt-[172px] md:mb-[208px] mb-[60px] relative w-full">
      <div className="w-[83%] m-auto relative max-w-[1244px] flex flex-col items-center">
        <div
          id="codeImg"
          className="md:absolute self-start left-0 top-[28%] -rotate-12 "
        >
          <img src={codeImg} alt="code" className="lg:w-[100%] w-[60%]" />
        </div>
        <div className="text-N1 flex flex-col items-center z-30">
          <div
            id="title"
            className="font-Monument lg:mb-[35px] mb-[17px] flex flex-col md:items-end items-center"
          >
            <h1 className="lg:text-[52px] md:text-[34] text-[27px] forth-h1 font-Pilot tracking-[0.2em] lg:right-[-70px] md:right-[-20px]">
              4TH
            </h1>
            <h1 className="lg:mt-[-30px] md:mt-[-20px] lg:text-[80px] md:text-[52px] text-[42px] f2e-h1 tracking-[0.2em] md:right-[70px]">
              THE F2E
            </h1>
          </div>
          <h1 className="lg:text-[28px] text-[20px] tracking-[0.8em] lg:mb-[110px] md:mb-[67px] mb-[45px] font-bold">
            互動式網頁設計
          </h1>
          <SignUpButton />
        </div>
        <div className="hidden md:block absolute left-[15%] top-[50%]">
          <img src={pacman2} alt="pacman" className="lg:w-[100%] w-[60%]" />
        </div>
        <div
          id="webPageImg"
          className="md:absolute self-end xl:right-[10%] md:right-[4%] bottom-[-30%] text-right"
        >
          <img
            src={webPageImg}
            alt="web page"
            className="xl:w-[100%] lg:w-[80%] w-[60%] inline-block"
          />
        </div>
        <div className="hidden md:block absolute right-0 top-[20px]">
          <img src={pacman1} alt="pacman" className="lg:w-[100%] w-[60%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
