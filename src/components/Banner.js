import React, { useLayoutEffect } from "react";
import gridBg from "../assets/img/grid_bg.svg";
import bannerTitle from "../assets/img/banner-title.svg";
import closeBlackIcon from "../assets/img/icon/close-black.svg";
import handLeft from "../assets/img/hand_l.png";
import handRight from "../assets/img/hand_r.png";
import typeF2e from "../assets/img/type-front-end_developer.svg";
import typeUI from "../assets/img/type-ui.svg";
import BannerMarqueeImg from "../assets/img/property=tape-desktop.svg";
import { gsap } from "gsap";

const Banner = ({ mdScreen }) => {
  const bannerTl = gsap.timeline();
  const bannerTime = 2;
  const easeElastic2 = "elastic.out(1, 0.5)";
  const easeElastic = "elastic.out(1, 0.4)";
  useLayoutEffect(() => {
    const screenWidth = window.innerWidth;
    bannerTl
      .from("#bannerTitle", {
        scale: 0.1,
        opacity: 0,
        duration: bannerTime,
        ease: easeElastic,
      })
      .from(
        "#bannerText",
        {
          scale: 0.1,
          opacity: 0,
          duration: bannerTime,
          ease: easeElastic,
        },
        "<"
      )
      .from(
        "#rightHand",
        {
          xPercent: screenWidth > mdScreen ? 150 : 0,
          yPercent: screenWidth > mdScreen ? 0 : 150,
          opacity: 0,
          rotate: screenWidth > mdScreen ? 50 : 315,
          duration: bannerTime,
          ease: easeElastic,
        },
        "<"
      )
      .from(
        "#leftHand",
        {
          xPercent: screenWidth > mdScreen ? -150 : 0,
          yPercent: screenWidth > mdScreen ? 0 : -150,
          opacity: 0,
          rotate: screenWidth > mdScreen ? -50 : 45,
          duration: bannerTime,
          ease: easeElastic,
        },
        "<"
      )
      .from(
        "#typeF2e",
        {
          xPercent: 100,
          yPercent: -160,
          rotate: 180,
          duration: bannerTime,
          ease: easeElastic2,
        },
        "<"
      )
      .from(
        "#typeUI",
        {
          xPercent: -10,
          yPercent: 100,
          rotate: -120,
          duration: bannerTime,
          ease: easeElastic2,
        },
        "<"
      )
      .to(
        "#BannerMarqueeToRihgt",
        {
          backgroundPosition: "99%",
          duration: bannerTime,
        },
        "<"
      )
      .from(
        "#BannerMarqueeToLeft",
        {
          backgroundPosition: "99%",
          duration: bannerTime,
        },
        "<"
      );
  }, []);
  const BannerMarquee = ({ id }) => (
    <div
      id={id}
      className="w-full flex md:h-[4.7vw] h-[10vw] bg-cover"
      style={{ backgroundImage: `url(${BannerMarqueeImg})` }}
    ></div>
  );
  return (
    <section className="w-full" style={{ backgroundImage: `url(${gridBg})` }}>
      <BannerMarquee id="BannerMarqueeToRihgt" />
      <div className="relative m-auto md:w-[80%] w-full md:pt-[5%] md:pb-[5%] flex flex-col items-center">
        <div className="w-full flex md:flex-nowrap md:flex-row flex-col items-center">
          <img
            id="rightHand"
            className="md:w-[25%] md:translate-x-[15%] md:rotate-0 md:scale-x-[1] scale-x-[-1] rotate-[315deg]"
            src={handRight}
            alt="right hand"
          />
          <img
            id="bannerTitle"
            className="md:w-[50%] w-[85%]"
            src={bannerTitle}
            alt=""
          />
          <div
            id="bannerText"
            className="md:hidden text-[24px] flex whitespace-nowrap mt-[3%]"
          >
            <p>前端工程師</p>
            <img className="w-[1em] mx-[1.6em]" src={closeBlackIcon} alt="" />
            <p>UI設計師</p>
          </div>
          <img
            id="leftHand"
            className="md:w-[25%] translate-x-[-15%] md:rotate-0 md:scale-y-[1] scale-y-[-1] rotate-[45deg]"
            src={handLeft}
            alt="left hand"
          />
        </div>
        <div
          id="bannerText"
          className="md:flex hidden lg:text-[32px] text-[18px] whitespace-nowrap mt-[3%]"
        >
          <p>前端工程師</p>
          <img className="w-[1em] mx-[1.6em]" src={closeBlackIcon} alt="" />
          <p>UI設計師</p>
        </div>
        <div className="absolute h-full md:w-[90%] md:pt-0 pt-[10%] w-full top-0 flex flex-col justify-between items-center overflow-y-hidden overflow-x-visible">
          <img
            id="typeF2e"
            className="md:w-[14%] w-[25%] md:translate-y-[20%] md:translate-x-[-110%] translate-x-[-25%]  self-end"
            src={typeF2e}
            alt=""
          />
          <img
            id="typeUI"
            className="md:w-[34%] w-[55%] self-start md:mt-[20%] mt-[65%]  md:translate-x-[-10%] translate-x-[-20%]"
            src={typeUI}
            alt=""
          />
        </div>
      </div>
      <BannerMarquee id="BannerMarqueeToLeft" />
    </section>
  );
};

export default Banner;
