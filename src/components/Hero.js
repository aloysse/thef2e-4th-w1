import React from "react";
import codeImg from "../assets/img/code.png";
import webPageImg from "../assets/img/web_page.png";
import pacman1 from "../assets/img/pacman-1.svg";
import pacman2 from "../assets/img/pacman-2.svg";
import { gsap } from "gsap";

const Hero = () => {
  gsap.from("#codeImg", 1, { y: 50, opacity: 0 });
  return (
    <section className="pt-[172px] md:mb-[208px] mb-[60px] relative w-full">
      <div className="w-[83%] m-auto relative max-w-[1244px] flex flex-col items-center">
        <div className="md:absolute self-start left-0 top-[28%] -rotate-12 ">
          <img
            id="codeImg"
            src={codeImg}
            alt="code"
            className="lg:w-[100%] w-[60%]"
          />
        </div>
        <div className="text-N1 flex flex-col items-center z-30">
          <div className="font-Monument lg:mb-[35px] mb-[17px] flex flex-col md:items-end items-center">
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
          <button className="text-N6 lg:text-[24px] text-[20px] lg:py-[20px] lg:px-[72px] py-[8px] px-[39px] bg-Y1 rounded-full font-bold">
            立即報名
          </button>
        </div>
        <div className="hidden md:block absolute left-[15%] top-[50%]">
          <img src={pacman2} alt="pacman" className="lg:w-[100%] w-[60%]" />
        </div>
        <div className="md:absolute self-end lg:right-[10%] md:right-[2%] bottom-[-40px]">
          <img
            src={webPageImg}
            alt="web page"
            className="lg:w-[100%] md:w-[60%] w-[80%]"
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
