import React, { useState } from "react";
import logoPng from "../assets/img/logo/the_f2e_1.png";
import menu from "../assets/img/icon/menu.svg";
import close from "../assets/img/icon/close.svg";

const Navbar = () => {
  const [navOpend, setNavOpend] = useState(false);

  //選單item
  const MenuCotent = ({ content }) => (
    <li className="py-[16px] ease-out duration-75 mr-[32px] hover:drop-shadow-green hover:text-N1">
      {content}
    </li>
  );

  //手機版下拉選單
  const NavMobile = ({ navOpend, handleOpenNav }) => (
    <div
      className={`${
        navOpend ? "top-[72px]" : "top-[-310px]"
      } md:hidden absolute w-full text-center p-[16px] bg-N5 ease-out duration-150 z-30`}
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
          <button className="w-full border py-[10px] border-N1 text-N1 rounded-full hover:border-G1 hover:text-G1 hover:drop-shadow-green ease-in-out duration-75">
            登入
          </button>
        </div>
      </ul>
    </div>
  );

  //手機版下拉選單開啟與否
  const handleOpenNav = () => {
    setNavOpend(!navOpend);
  };

  return (
    <header className="top-0 md:relative fixed w-full z-50">
      <div className="bg-N5 absolute z-40 px-[32px] h-[72px] md:h-[90px] w-full flex items-center ">
        {/*手機版 Menu 按鈕*/}
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
          <button className="border py-[10px] px-[24px] border-N1 text-N1 rounded-full hover:border-G1 hover:text-G1 hover:drop-shadow-green ease-out duration-75">
            登入
          </button>
        </div>
        <button className="md:hidden border py-[10px] px-[24px] border-N1 text-N1 rounded-full hover:border-G1 hover:text-G1 hover:drop-shadow-green ease-out duration-75">
          立即報名
        </button>
      </div>
      {/*手機版下拉選單*/}
      <NavMobile navOpend={navOpend} handleOpenNav={handleOpenNav} />
    </header>
  );
};

export default Navbar;
