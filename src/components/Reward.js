import React, { useLayoutEffect, useRef } from "react";
import flag from "../assets/img/finish_flag.svg";
import car from "../assets/img/car.svg";
import line from "../assets/img/line.svg";
import paperBoardImg from "../assets/img/paper_board.png";
import coinImg from "../assets/img/coin.png";
import { gsap } from "gsap";

const Reward = () => {
  let raceRef = useRef(null);
  const rewardTl = gsap.timeline();
  useLayoutEffect(() => {
    let raceLength = raceRef.current.offsetWidth;
    rewardTl
      .from("#title1", 1, { opacity: 0, yPercent: 100, ease: "power1.inOut" })
      .from("#race", 1, { opacity: 0, ease: "power1.inOut" }, "<")
      .from(
        "#cardsContainer",
        1,
        { opacity: 0, yPercent: 50, ease: "power1.inOut" },
        "<"
      )
      .to("#title2", 1, { opacity: 1, delay: 0.5 })
      .to("#car", 0.6, { x: -raceLength + 140, ease: "none" })
      .to("#flag", 0.5, { rotate: -45, xPercent: -30, yPercent: -20 });
  }, []);
  const RewardCard = ({ children, imgUrl, title }) => (
    <div className="reward-card p-[2px] rounded-card hover:translate-y-[-30px] ease-linear duration-200">
      <div className="bg-N3 rounded-card p-[40px] w-[485px] h-[552px] text-center">
        <img className="inline-block mb-[8px]" src={imgUrl} alt="" />
        <h3 className="text-P1 text-h2 font-bold mb-[46px]">{title}</h3>
        <div className="text-left text-h5">{children}</div>
      </div>
    </div>
  );

  return (
    <section className="text-N1 py-[100px]">
      <h2
        id="title1"
        className=" text-h2 font-bold text-center drop-shadow-white"
      >
        <span>區區修煉已經無法滿足了嗎？</span>
        <span id="title2" className="opacity-0 xl:inline-block block">
          還有比賽等著你！
        </span>
      </h2>
      <div
        id="race"
        className="xl:w-[856px] w-[485px] m-auto my-[60px]"
        ref={raceRef}
      >
        <div className="flex justify-between items-baseline">
          <img id="flag" src={flag} alt="" />
          <img id="car" src={car} alt="" />
        </div>
        <img className="mt-[-10px]" src={line} alt="" />
      </div>
      <div
        id="cardsContainer"
        className="flex xl:flex-row justify-center items-center flex-col xl:space-x-[60px] xl:space-y-[0px] space-y-[60px] m-auto"
      >
        <RewardCard imgUrl={paperBoardImg} title={"評審機制"}>
          <h4 className="text-h4 font-bold mb-[8px]">初選：</h4>
          <p className="mb-[32px]">將由六角學院前端、UI 評審進行第一波篩選。</p>
          <h4 className="text-h4 font-bold mb-[8px]">決選：</h4>
          <p className="mb-[32px]">
            由六角學院與贊助廠商討論，進行最後篩選， 並於 12/30(五)
            由評審進行直播公布名單！
          </p>
        </RewardCard>
        <RewardCard imgUrl={coinImg} title={"獎金"}>
          <h4 className="font-bold mb-[8px]">
            初選佳作：
            <span className=" font-normal">
              共六十位 <span className="text-G1">數位獎狀</span>
            </span>
          </h4>
          <p className="mb-[24px] text-p3 text-N2">
            每週主題個人組十位、團體組十組
          </p>
          <h4 className="font-bold mb-[8px]">
            個人企業獎：
            <span className=" font-normal">
              共六位 <span className="text-G1">NTD 3,000/位</span>
            </span>
          </h4>
          <p className="mb-[24px] text-p3 text-N2">
            每週主題各兩名，設計一位、前端 一位
          </p>
          <h4 className="font-bold mb-[8px]">
            團體企業獎：
            <span className=" font-normal">
              共三組 <span className="text-G1">NTD 10,000/組</span>
            </span>
          </h4>
          <p className="mb-[24px] text-p3 text-N2">每週主題各 1 組</p>
          <h4 className="font-bold">以上皆提供完賽數位獎狀</h4>
        </RewardCard>
      </div>
    </section>
  );
};

export default Reward;
