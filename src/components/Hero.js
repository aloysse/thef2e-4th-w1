import React from "react";
import codeImg from "../assets/img/code.png";
import webPageImg from "../assets/img/web_page.png";
import pacman1 from "../assets/img/pacman-1.svg";
import pacman2 from "../assets/img/pacman-2.svg";

const Hero = () => {
  return (
    <section className="pt-[172px] pb-[208px] relative w-full">
      <div className="w-[83%] border m-auto relative max-w-[1244px]">
        <div className="text-N1 flex flex-col items-center">
          <div className="md:absolute self-start left-0 top-[28%] -rotate-12 ">
            <img src={codeImg} alt="code" className="md:w-[100%] w-[70%]" />
          </div>
          <div className="font-Monument md:mb-[35px] mb-[17px] flex flex-col md:items-end items-center">
            <h1 className="md:text-[52px] text-[27px] forth-h1 font-Pilot tracking-[0.2em] md:right-[-70px]">
              4TH
            </h1>
            <h1 className="md:mt-[-30px] text-[42px] md:text-[80px] f2e-h1 tracking-[0.2em] md:right-[70px]">
              THE F2E
            </h1>
          </div>
          <h1 className="md:text-[28px] text-[20px] tracking-[0.8em] md:mb-[110px] mb-[45px] font-bold">
            互動式網頁設計
          </h1>
          <button className="text-N6 md:text-[24px] text-[20px] md:py-[20px] md:px-[72px] py-[8px] px-[39px] bg-Y1 rounded-full font-bold">
            立即報名
          </button>
          <div className="hidden md:block absolute left-[15%] top-[50%]">
            <img src={pacman2} alt="pacman" />
          </div>
          <div className="md:absolute self-end right-[10%] bottom-[-40px]">
            <img
              src={webPageImg}
              alt="web page"
              className="md:w-[100%] w-[70%]"
            />
          </div>
          <div className="hidden md:block absolute right-0 top-[20px]">
            <img src={pacman1} alt="pacman" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
