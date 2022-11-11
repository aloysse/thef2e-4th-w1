import React, { useEffect } from "react";
import lock from "../assets/img/lock-locked.png";
import thunderImg from "../assets/img/thunder.svg";
import webPage from "../assets/img/web_page.png";
import rightIcon from "../assets/img/icon/rignt-icon.svg";
import signBoard from "../assets/img/sign_board.png";
import exchange from "../assets/img/exchange_perspective_matte.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Subjects = () => {
  const subjectsTl = gsap.timeline();

  const cardContents = [
    {
      id: "week1",
      week: "WEEK 1",
      title: "# 板塊設計",
      h4: "THE F2E 活動網站設計",
      h5: "視覺滾動",
      imgUrl: webPage,
    },
    {
      id: "week2",
      week: "WEEK 2",
      title: "# 凱鈿行動科技",
      h4: "今晚，我想來點點簽",
      h5: "CANVAS",
      imgUrl: signBoard,
    },
    {
      id: "week3",
      week: "WEEK 3",
      title: "# 鈦坦科技",
      h4: "Scrum 新手村",
      h5: "JS Draggable",
      imgUrl: exchange,
    },
  ];

  // 動畫時間軸
  function subjectsAnimation() {
    subjectsTl
      .from("#subjectsTitle", 1, { yPercent: -50, opacity: 0 })
      .from("#subjectsText", 1, { yPercent: 100, opacity: 0 }, "<")
      .from("#week3", 1, { yPercent: 20, opacity: 0 }, "<")
      .from("#week2", 1, { yPercent: 40, opacity: 0 }, "<")
      .from("#week1", 1, { yPercent: 60, opacity: 0 }, "<")
      .to("#week1", 0.5, { scaleX: 0, ease: "power2.in" })
      .to("#week1Back", 0.5, { scaleX: 1, ease: "power2.out" })
      .to("#week2", 0.5, { scaleX: 0, ease: "power2.in" })
      .to("#week2Back", 0.5, { scaleX: 1, ease: "power2.out" })
      .to("#week3", 0.5, { scaleX: 0, ease: "power2.in" })
      .to("#week3Back", 0.5, { scaleX: 1, ease: "power2.out" });
  }

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#subjectsText",
      markers: false,
      onEnter: function () {
        subjectsAnimation();
      },
    });
  }, []);

  // 主題卡片元件
  const SubjectCard = ({ id, week, title, h4, h5, imgUrl }) => {
    return (
      <div className="relative lg:mb-0 mb-[40px]">
        <div
          id={id}
          className="lg:block hidden text-center lg:mb-0 mb-[40px] w-[300px] h-[360px] py-[50px] rounded-card"
          style={{
            background: "linear-gradient(180deg, #9DA4FF 0%, #6E77E9 100%)",
          }}
        >
          <h3 className=" mb-[16px] font-Monument text-N1 text-[32px]">
            {week}
          </h3>
          <img className="inline-block" src={lock} alt="" />
        </div>
        <div
          id={id + "Back"}
          className="relative lg:absolute top-0 lg:scale-x-0 scale-x-100 bg-N1  rounded-card w-[300px] h-[360px] text-center px-[24px]"
        >
          <p className="my-[16px] font-bold text-[16px] inline-block py-[4px] px-[8px] rounded-lg bg-[#83FAC1]">
            {title}
          </p>
          <h4 className="font-bold text-h4 text-P3">{h4}</h4>
          <h5 className="text-h5 text-P3 mt-[8px]">{h5}</h5>
          <img className="h-[165px] inline-block" src={imgUrl} alt="" />
          <div className="flex justify-between text-[14px] mt-[16px]">
            <p className="text-P2 font-Monument">{week}</p>
            <div className=" ">
              <p className="cursor-pointer text-P3 hover:border-b-2 hover:border-P3 inline-block">
                查看關卡細節
              </p>
              <img className="inline-block " src={rightIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-[159px] pb-[100px] px-[35px]">
      <div className="max-w-[980px] m-auto text-center">
        <div id="subjectsTitle" className="relative inline-block">
          <h2 className=" border-G1 drop-shadow-green border-4 py-[16px] px-[36px] rounded-full inline-block text-G1 font-bold text-[32px]">
            年度最強合作 三大主題來襲
          </h2>
          <img
            className="absolute top-[-70%] right-[-10%]"
            src={thunderImg}
            alt=""
          />
        </div>
        <p id="subjectsText" className="text-N1 my-[60px] text-[24px]">
          各路廠商強強聯手
          <br />
          共同設計出接地氣的網頁互動跳戰關卡
        </p>
        <div className="flex justify-between lg:flex-row flex-col items-center">
          {cardContents.map((item, index) => (
            <SubjectCard
              key={index}
              id={item.id}
              week={item.week}
              title={item.title}
              h4={item.h4}
              h5={item.h5}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
