import React, { useState } from "react";
import logoPng from "../assets/img/logo/the_f2e_1.png";
import { ReactComponent as menuIcon } from "../assets/img/icon/menu.svg";
import menu from "../assets/img/icon/menu.svg";
import close from "../assets/img/icon/close.svg";

const MenuCotent = ({ content }) => (
  <li className="py-[16px] ease-linear duration-75 mr-[32px] hover:drop-shadow-green hover:text-N1">
    {content}
  </li>
);

const NavMobile = ({ navOpend, handleOpenNav }) => (
  <div
    className={
      !navOpend
        ? "hidden"
        : "md:hidden absolute top-[72px] w-full text-center p-[16px] bg-N5"
    }
  >
    <div
      className="flex justify-end p-[22px] cursor-pointer"
      onClick={handleOpenNav}
    >
      <img src={close} alt="" />
    </div>
    <ul className="text-N2 flex flex-col items-center effect-left">
      <MenuCotent content="關卡資訊" />
      <MenuCotent content="攻略資源" />
      <MenuCotent content="求職專區" />
      <div className="py-[16px] w-full">
        <button className="w-full border py-[10px] border-N1 text-N1 rounded-full hover:border-G1 hover:text-G1 hover:drop-shadow-green ease-linear duration-75">
          登入
        </button>
      </div>
    </ul>
  </div>
);

const Navbar = () => {
  const [navOpend, setNavOpend] = useState(false);
  const handleOpenNav = () => setNavOpend(!navOpend);
  return (
    <>
      <div className=" fixed md:absolute px-[32px] h-[72px] md:h-[90px] w-full flex items-center ">
        <div
          className="md:hidden mr-[25px] cursor-pointer"
          onClick={handleOpenNav}
        >
          <img src={menu} alt="123" />
        </div>
        <div className="mr-auto">
          <img src={logoPng} alt="The F2E" />
        </div>
        <div className="hidden md:flex items-center">
          <ul className="text-N2 flex effect-bottom">
            <MenuCotent content="關卡資訊" />
            <MenuCotent content="攻略資源" />
            <MenuCotent content="求職專區" />
          </ul>
          <button className="border py-[10px] px-[24px] border-N1 text-N1 rounded-full hover:border-G1 hover:text-G1 hover:drop-shadow-green ease-linear duration-75">
            登入
          </button>
        </div>
        <button className="md:hidden border py-[10px] px-[24px] border-N1 text-N1 rounded-full hover:border-G1 hover:text-G1 hover:drop-shadow-green ease-linear duration-75">
          立即報名
        </button>
      </div>
      <NavMobile navOpend={navOpend} handleOpenNav={handleOpenNav} />
    </>
  );
};

export default Navbar;
