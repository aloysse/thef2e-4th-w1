import React, { useState, useEffect } from "react";
import { qaData } from "./qaData.js";
import SignUpButton from "./SignUpButton";

const QandA = () => {
  const [QaSort, setQaSort] = useState("common");

  const QaContent = ({ number, question, answer }) => (
    <div className="flex  mb-[80px]">
      <h3 className=" font-Monument text-h3 text-P3 mr-[24px]">{number}</h3>
      <div>
        <h3 className="font-bold text-h4 mb-[16px]">{question}</h3>
        <p className="text-h5">{answer}</p>
      </div>
    </div>
  );

  const QacontentContainer = ({ sort }) => (
    <div className="p-[80px] bg-N1 max-w-[880px] m-auto rounded-card text-N5">
      {sort.map((item, index) => (
        <QaContent
          key={index}
          number={item.number}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );

  const QaList = ({ content, qaSort }) => (
    <li
      onClick={() => {
        setQaSort(qaSort);
      }}
      className="cursor-pointer py-[16px] ease-out duration-75 hover:drop-shadow-green hover:text-N1 whitespace-nowrap snap-none"
    >
      {content}
    </li>
  );

  return (
    <section className="py-[100px] px-[16px]">
      <h2 className="text-h1 text-center text-N1 font-Monument mb-[60px]">
        Q&A
      </h2>
      <ul className="text-N2 flex effect-bottom space-x-[32px] text-h5 justify-center overflow-x-scroll mb-[40px]">
        <QaList content={"常見問題"} qaSort={"common"} />
        <QaList content={"UI 設計師常見問題"} qaSort={"ui"} />
        <QaList content={"前端工程師常見問題"} qaSort={"frontEnd"} />
        <QaList content={"團體組常見問題"} qaSort={"team"} />
      </ul>
      <QacontentContainer sort={qaData[QaSort]} />
      <div className="text-center mt-[60px]">
        <SignUpButton />
      </div>
    </section>
  );
};

export default QandA;
