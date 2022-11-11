import React from "react";
import blockStudioLogo from "../assets/img/logo/sponsor_logo.png";
import kdanMobileLogo from "../assets/img/logo/sponsor_logo-1.png";
import titanSoftLogo from "../assets/img/logo/sponsor_logo-2.png";
import starBig from "../assets/img/Property=Star-big.svg";
import starSmall from "../assets/img/Property=Star-small.svg";

const Sponsors = () => {
  return (
    <section className="bg-N3 text-N1 py-[80px] text-center">
      <div className="relative inline-block">
        <h2 className="font-Monument text-h3 text-center mb-[8px]">sponsors</h2>
        <img
          className="absolute top-[30%] translate-x-[-100%]"
          src={starBig}
          alt=""
        />
        <img
          className="absolute top-[-20%] left-[100%]"
          src={starSmall}
          alt=""
        />
      </div>
      <h3 className="font-bold text-h3 text-center mb-[60px]">鑽石級贊助商</h3>
      <div className="flex space-y-[0px] justify-center md:flex-row flex-col items-center">
        <a href="https://blockstudio.tw/">
          <img
            className="sponsor-logo mx-[30px] my-[12px]"
            src={blockStudioLogo}
            alt="block Studio Logo"
          />
        </a>
        <a href="https://www.kdanmobile.com/zh-tw">
          <img
            className="sponsor-logo mx-[30px] my-[12px]"
            src={kdanMobileLogo}
            alt="kdan Mobile Logo"
          />
        </a>
        <a href="https://titansoft.com/tw">
          <img
            className="sponsor-logo mx-[30px] my-[12px]"
            src={titanSoftLogo}
            alt="titan Soft Logo"
          />
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
