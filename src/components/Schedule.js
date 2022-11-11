import React, { useLayoutEffect } from "react";
import titlePac1 from "../assets/img/title_pac-1.svg";
import titlePac2 from "../assets/img/title_pac-2.svg";
import vericleLine from "../assets/img/icon/rectangle70.svg";
import editImg from "../assets/img/I3D/EDIT.png";
import clockImg from "../assets/img/I3D/CLOCK.png";
import folder from "../assets/img/I3D/FOLDER.png";
import play from "../assets/img/I3D/PLAY.png";
import carotDown from "../assets/img/carot-down.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const scheduleTl = gsap.timeline();

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: "#scheduleCards",
      markers: false,
      onEnter: function () {
        scheduleAnimation();
      },
    });
  }, []);

  // 動畫時間軸
  function scheduleAnimation() {
    scheduleTl
      .from("#scheduleCards", 1, {
        y: 200,
        opacity: 0,
        ease: "power2.inOut",
      })
      .from(
        "#scheduleTitle",
        1,
        {
          y: 100,
          opacity: 0,
          ease: "power2.inOut",
        },
        "<"
      );
  }

  // 卡片元件
  const ScheduleCard = ({ children, title, imgUrl, dir }) => (
    <div
      className={`flex ${dir} schedule-card md:flex-row flex-col md:text-left text-center justify-between items-center md:w-[520px] md:h-[300px] text-N1 border border-[3px] rounded-card border-N1 py-[54px] px-[40px]`}
    >
      <img src={imgUrl} alt="" />
      <div className="w-[260px]">
        <h3 className="text-h3 font-bold  mb-[16px]">{title}</h3>
        <div className="text-h5 space-y-[8px]">{children}</div>
      </div>
    </div>
  );

  return (
    <section className="bg-N4 py-[80px]">
      <div
        id="scheduleTitle"
        className="flex justify-center py-[16px] mb-[80px] items-center"
      >
        <img src={titlePac1} alt="" />
        <h2 className="md:mx-[36px] mx-[16px] md:text-h1 text-h3 text-N1 font-bold">
          活動說明
        </h2>
        <img src={titlePac2} alt="" />
      </div>
      <div id="scheduleCards" className="flex flex-col items-center">
        <div className="flex  items-center xl:flex-row flex-col">
          <ScheduleCard title={"開放報名"} imgUrl={editImg}>
            <p>
              <span className="text-G1">10/13</span> (四) 早上 11:00
            </p>
            <div className="flex justify-center">
              <img src={vericleLine} alt="" />
            </div>
            <p>
              <span className="text-G1">110/30</span> (日) 晚上 23:59
            </p>
            <p>截止前可修改報名組別</p>
          </ScheduleCard>

          <div className="xl:rotate-[270deg] md:m-[30px] m-0">
            <img src={carotDown} alt="" />
          </div>

          <ScheduleCard
            title={"各組別開賽"}
            imgUrl={clockImg}
            dir={"flex-row-reverse"}
          >
            <p>
              <span className="text-G1">10/13</span> UI組、團體組開賽
            </p>
            <p>
              <span className="text-G1">11/07</span> 前端組開賽
            </p>
            <p>前端工程師可採用 UI 設計師的設計稿產出完整作品</p>
          </ScheduleCard>
        </div>

        <div className="flex">
          <div className="md:m-[30px] m-0 xl:translate-x-[330px]">
            <img src={carotDown} alt="" />
          </div>
        </div>

        <div className="flex items-center xl:flex-row-reverse flex-col">
          <ScheduleCard title={"登陸作品"} imgUrl={folder}>
            <p>
              <span className="text-G1">10/31</span> (一) 中午 12:00
            </p>
            <div className="flex justify-center">
              <img src={vericleLine} alt="" />
            </div>
            <p>
              <span className="text-G1">11/28</span> (一) 中午 12:00
            </p>
            <p>依賽程登錄作品</p>
          </ScheduleCard>

          <div className="xl:rotate-90 md:m-[30px] m-0">
            <img src={carotDown} alt="" />
          </div>

          <ScheduleCard
            title={"線上直播"}
            imgUrl={play}
            dir={"flex-row-reverse"}
          >
            <p>
              <span className="text-G1">11/03 - 11/24</span> 每週四
            </p>
          </ScheduleCard>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
