import React from "react";

import computerAns1Img from "../src/assets/ans1.png";
import ans1DescImg from "../src/assets/ans1-desc.png";
import IconEsc from "../src/assets/icon-esc.svg";
import IconDown from "../src/assets/icon-down.svg";

const AnswerPage: React.FC = () => {
  return (
    <>
      <div className="page page-answer">
        <header className="header">
          <button className="btn-esc">
            <img src={IconEsc.src} alt="" />
          </button>
          <p>你在Ai系統的分類代號是：</p>
        </header>
        <div className="title">
          <h1>((:奎爾特:))</h1>
        </div>
        <div className="computer">
          <img src={computerAns1Img.src} alt="" />
        </div>

        <div className="desc">
          <p>你的Ai世代生存人群佔比是:</p>
          <div className="desc-img-box">
            <img src={ans1DescImg.src} alt="" />

            <div className="icon-down-item left">
              <img src={IconDown.src} alt="" />
            </div>
            <div className="icon-down-item right">
              <img src={IconDown.src} alt="" />
            </div>
          </div>
          <div className="detail">
            <h3>((: 創造者 :))</h3>
            <p>
              你是精英中的精英，與生俱來的觀察力洞悉所有操作，AI就是你智慧下的產物。你擁有開放性思考特質，擅長縱觀全局並俯瞰問題的存在，真正的智慧使你敏銳判別什麼是真什麼是假，人類的生存密碼也許就掌握在你手裡！
            </p>
          </div>
          <div className="detail-end">
            <p>你生命中最大的敵人：</p>
            <p>垃圾貓貓 (=^‥^=)</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="ctrl-box">
          <button>Get Your Resault</button>
          <button>R</button>
        </div>
      </footer>
    </>
  );
};
export default AnswerPage;
