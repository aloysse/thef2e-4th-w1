import React from "react";
import pop1 from "../assets/img/pop1.svg";
import pop2 from "../assets/img/pop2.svg";
import pop3 from "../assets/img/pop3.svg";
import qustionMark from "../assets/img/Property=qm.svg";
import star3 from "../assets/img/Property=Star3.svg";
import triangle from "../assets/img/Property=triangle.svg";
import rectangle26 from "../assets/img/Property=Rectangle26.svg";
import rectangle28 from "../assets/img/Property=Rectangle28.svg";
import eyesMark from "../assets/img/Property=@@.svg";
import union from "../assets/img/Property=Union.svg";
import exMark from "../assets/img/Property=exMark.svg";

const Hero2 = () => {
  return (
    <section className="w-full lg:text-[10px] text-[5.2px] lg:py-[120px] py-[60px]">
      <div className="m-auto lg:w-[912px] md:w-[500px] w-[400px] flex flex-col">
        <div className="relative flex-1 w-full">
          <div className="flex lg:pl-[80px] pl-[54px]">
            <img className="lg:w-[279px] w-[153px]" src={rectangle26} alt="" />
            <img
              className="lg:w-[63px] w-[34px]  lg:ml-[48px] ml-[24px]"
              src={star3}
              alt=""
            />
          </div>
          <div className="flex lg:pl-[22px] pl-[11px]">
            <div className="relative">
              <img className="lg:w-[540px] w-[296px]" src={pop1} alt="" />
            </div>
            <img
              className="lg:w-[191px] w-[105px] lg:ml-[30px] md:ml-[15px] lg:translate-y-[-80px] md:translate-y-[-41px] translate-y-[-90px] ml-[-20px]"
              src={qustionMark}
              alt=""
            />
          </div>
        </div>
        <div className="flex">
          <img
            className="lg:w-[257px] w-[141px] md:pt-0 pt-[70px]"
            src={exMark}
            alt=""
          />
          <img
            className="lg:w-[45px] w-[24px] lg:ml-[32px] md:ml-[16px] ml-[-30px] lg:translate-y-[-60px] md:translate-y-[-31px] translate-y-[-60px]"
            src={union}
            alt=""
          />
          <img
            className="lg:w-[524px] w-[272px] lg:ml-[30px] md:ml-[15px] lg:translate-y-[-100px] md:translate-y-[-52px] translate-y-[-60px]"
            src={pop2}
            alt=""
          />
        </div>
        <div className="relative lg:mt-[-100px] md:mt-[-52px]">
          <div className="flex lg:pl-[300px] md:pl-[156px] pl-[126px] md:mt-0 mt-[-40px]">
            <img className="lg:w-[358px] w-[186px]" src={rectangle28} alt="" />
            <img
              className="lg:w-[166px] w-[86px] lg:ml-[41px] lg:translate-y-[-30px] md:ml-[20px] ml-[30px] md:translate-y-[-15px] translate-y-[-40px]"
              src={triangle}
              alt=""
            />
          </div>
          <div className="flex lg:pl-[94px] md:pl-[48px]">
            <img className="lg:w-[540px] w-[296px]" src={pop3} alt="" />
            <img
              className="lg:w-[197px] w-[102px] lg:ml-[36px] lg:translate-y-[-40px] md:ml-[18px] ml-[-18px] md:translate-y-[-20px] translate-y-[60px]"
              src={eyesMark}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
