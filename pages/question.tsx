import React from "react";
import { MobileLayout } from "@components/layout/mobile-layout";

import computerLogo from "../src/assets/computer.png";
import LogoMainImg from "../src/assets/logo-main.png";
import LogoImg from "../src/assets/logo.png";
import IconEsc from "../src/assets/icon-esc.svg";
import IconAudio from "../src/assets/icon-audio.svg";
import AudioImg from "../src/assets/audio.png";
import Cat1Img from "../src/assets/cat1.png";

const questions = [
  <>
    <p>聽聽以下幾種聲音，</p>
    <p>請選出哪個是由AI生成的?</p>
  </>,
  <>
    <p>請選出含有真的貓咪的照片</p>
    <p>(=^‥^=)</p>
  </>,
  <p>請觀看以下問題及回覆，選出哪個是AI回答的。</p>,
  <p>外表生心理條件都一樣並符合你的需求下，你會選擇誰當伴侶?</p>,
  <p>你覺得哪個迷因更好笑？</p>,
  <p>你願意接受誰的告白？</p>,
  <p>你覺得人類會愛上AI嗎？</p>,
  <p>你覺得出這些題目的是誰？</p>,
];

const QuestionPage: React.FC = () => {
  return (
    <MobileLayout>
      <div className="page page-question">
        <header className="header">
          <button className="btn-esc">
            <IconEsc className="icon-esc"></IconEsc>
            <span>ESC</span>
          </button>

          <div className="logo">
            <img src={LogoImg.src} alt="" />
          </div>
        </header>
        {/* <div className="content">
          <div className="intro">
            <div className="desc">
              <p>AI強勢來臨</p>
              <p>在這轉變世代你會成為什麼角色呢？</p>
              <p>是不幸被取代的淘太品，</p>
              <p>還是成功存活的人類！</p>
              <p>來測驗看看吧 </p>
              <p>;”P </p>
            </div>
            <div className="logo-main">
              <img src={LogoMainImg.src} alt="" />
            </div>
            <div className="slogan">
              <p>「Niconite尼可柰」體驗創作團隊，</p>
              <p>致力於創造讓人上癮的娛樂活動。</p>
            </div>
          </div>
        </div> */}

        <div className="content">
          <div className="page-number">
            <p>01/08</p>
          </div>
          <div className="ques-text">
            <p>{questions[0]}</p>
          </div>
          <div className="ques-form">
            <div className="options">
              <div className="ques-item ques-audio active">
                <div className="point">
                  <IconAudio></IconAudio>
                </div>
                <div className="box">
                  <img src={AudioImg.src} alt="" />
                </div>
              </div>
              <div className="ques-group">
                <div className="ques-item ques-block-s active">
                  <img src={Cat1Img.src} alt="" />
                </div>
                <div className="ques-item ques-block-s">
                  <img src={Cat1Img.src} alt="" />
                </div>
                <div className="ques-item ques-block-s">
                  <img src={Cat1Img.src} alt="" />
                </div>
              </div>
              <div className="ques-group">
                <div className="ques-item ques-block-s">
                  <img src={Cat1Img.src} alt="" />
                </div>
                <div className="ques-item ques-block-s">
                  <img src={Cat1Img.src} alt="" />
                </div>
                <div className="ques-item ques-block-s">
                  <img src={Cat1Img.src} alt="" />
                </div>
              </div>
              <div className="ques-item ques-ans active">
                <div className="point">#</div>
                <div className="text">
                  <p>fewfwef</p>
                </div>
              </div>
              <div className="ques-item ques-ans">
                <div className="point">#</div>
                <div className="text">
                  <p>fewfwef</p>
                </div>
              </div>
              <div className="ques-item ques-photo">
                <div className="photo">
                  <img src={Cat1Img.src} alt="" />
                </div>
              </div>
              <div className="ques-group">
                <div className="ques-item ques-block-m"></div>
                <div className="ques-item ques-block-m"></div>
                <div className="ques-item ques-block-m"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ctrl-box">
          <button className="btn-niconite">我不是機器人 :)</button>
        </div>
        <div className="ctrl-fixed-box">
          <button className="btn-back">BACK</button>
          <button className="btn-next">NEXT</button>
        </div>
      </div>
    </MobileLayout>
  );
};
export default QuestionPage;
