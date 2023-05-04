import React, { useState } from "react";
import { MobileLayout } from "@components/layout/mobile-layout";

import computerLogo from "../src/assets/computer.png";
import LogoMainImg from "../src/assets/logo-main.png";
import LogoImg from "../src/assets/logo.png";
import IconEsc from "../src/assets/icon-esc.svg";
import IconAudio from "../src/assets/icon-audio.svg";
import AudioImg from "../src/assets/audio.png";
import Cat1Img from "../src/assets/cat1.png";
import Cat2Img from "../src/assets/cat2.png";
import Cat3Img from "../src/assets/cat3.png";
import Cat4Img from "../src/assets/cat4.png";
import Cat5Img from "../src/assets/cat5.png";
import Cat6Img from "../src/assets/cat6.png";
import Cat7Img from "../src/assets/cat7.png";
import Cat8Img from "../src/assets/cat8.png";
import Cat9Img from "../src/assets/cat9.png";

import Ans5q1Img from "../src/assets/ans5-q1.png";
import Ans5q2Img from "../src/assets/ans5-q2.png";
import Ans6q1Img from "../src/assets/ans6-q1.png";
import Ans6q2Img from "../src/assets/ans6-q2.png";
import Ans6q3Img from "../src/assets/ans6-q3.png";
import Ans6q4Img from "../src/assets/ans6-q4.png";
import Ans6q5Img from "../src/assets/ans6-q5.png";
import { useRouter } from "next/router";

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

const options = [
  [
    <div key="a1-1" className="ques-item ques-audio active">
      <div className="point">
        <IconAudio></IconAudio>
      </div>
      <div className="box">
        <img src={AudioImg.src} alt="" />
      </div>
    </div>,
    <div key="a1-2" className="ques-item ques-audio">
      <div className="point">
        <IconAudio></IconAudio>
      </div>
      <div className="box">
        <img src={AudioImg.src} alt="" />
      </div>
    </div>,
    <div key="a1-3" className="ques-item ques-audio">
      <div className="point">
        <IconAudio></IconAudio>
      </div>
      <div className="box">
        <img src={AudioImg.src} alt="" />
      </div>
    </div>,
  ],
  [
    <div key="a2-1" className="ques-item ques-block-s cat active">
      <img src={Cat1Img.src} alt="" />
    </div>,
    <div key="a2-2" className="ques-item ques-block-s cat">
      <img src={Cat2Img.src} alt="" />
    </div>,
    <div key="a2-3" className="ques-item ques-block-s cat">
      <img src={Cat3Img.src} alt="" />
    </div>,
    <div key="a2-4" className="ques-item ques-block-s cat">
      <img src={Cat4Img.src} alt="" />
    </div>,
    <div key="a2-5" className="ques-item ques-block-s cat">
      <img src={Cat5Img.src} alt="" />
    </div>,
    <div key="a2-6" className="ques-item ques-block-s cat">
      <img src={Cat6Img.src} alt="" />
    </div>,
    <div key="a2-7" className="ques-item ques-block-s cat">
      <img src={Cat7Img.src} alt="" />
    </div>,
    <div key="a2-8" className="ques-item ques-block-s cat">
      <img src={Cat8Img.src} alt="" />
    </div>,
    <div key="a2-9" className="ques-item ques-block-s cat">
      <img src={Cat9Img.src} alt="" />
    </div>,
  ],
  [
    <div key="a3-1" className="ques-item ques-ans active">
      <div className="point">01</div>
      <div className="text">
        <p>寶，我覺得你塗哪個都很好看，但這兩個差在哪啊....？</p>
      </div>
    </div>,
    <div key="a3-2" className="ques-item ques-ans">
      <div className="point">02</div>
      <div className="text">
        <p>
          寶，你無論塗哪種口红都很漂亮啊！反正我是覺得你自己本來就是最美的啦，哪有口紅能比得過你的嘴唇！愛你啦～
        </p>
      </div>
    </div>,
    <div key="a3-3" className="ques-item ques-ans">
      <div className="point">03</div>
      <div className="text">
        <p>不在乎。</p>
      </div>
    </div>,
  ],
  [
    <div key="a4-1" className="ques-item ques-ans active">
      <div className="point">A:</div>
      <div className="text">
        <p>沒有錢但愛你的人類</p>
      </div>
    </div>,
    <div key="a4-2" className="ques-item ques-ans">
      <div className="point">B:</div>
      <div className="text">
        <p>要多少錢有多少的仿真機器人</p>
      </div>
    </div>,
    <div key="a4-3" className="ques-item ques-ans">
      <div className="point">C:</div>
      <div className="text">
        <p>會噴射紅色雷射光的仿真機器人</p>
      </div>
    </div>,
  ],
  [
    <div key="a5-1" className="ques-item ques-photo active">
      <div className="photo">
        <img src={Ans5q1Img.src} alt="" />
      </div>
    </div>,
    <div key="a5-2" className="ques-item ques-photo">
      <div className="photo">
        <img src={Ans5q2Img.src} alt="" />
      </div>
    </div>,
  ],
  [
    <div key="a6-1" className="ques-item ques-block-s active">
      <img src={Ans6q1Img.src} alt="" />
    </div>,
    <div key="a6-2" className="ques-item ques-block-s">
      <img src={Ans6q2Img.src} alt="" />
    </div>,
    <div key="a6-3" className="ques-item ques-block-s active">
      <img src={Ans6q3Img.src} alt="" />
    </div>,
    <div key="a6-4" className="ques-item ques-block-s">
      <img src={Ans6q4Img.src} alt="" />
    </div>,
    <div key="a6-5" className="ques-item ques-block-s full">
      <img src={Ans6q5Img.src} alt="" />
    </div>,
  ],
  [
    <div key="a7-1" className="ques-item ques-ans active">
      <div className="point">A:</div>
      <div className="text">
        <p>會</p>
      </div>
    </div>,
    <div key="a7-2" className="ques-item ques-ans">
      <div className="point">B:</div>
      <div className="text">
        <p>不會</p>
      </div>
    </div>,
  ],
  [
    <div key="a8-1" className="ques-item ques-ans active">
      <div className="point">A:</div>
      <div className="text">
        <p>人類</p>
      </div>
    </div>,
    <div key="a8-2" className="ques-item ques-ans">
      <div className="point">B:</div>
      <div className="text">
        <p>人工智慧AI</p>
      </div>
    </div>,
  ],
];

const QuestionPage: React.FC = () => {
  const router = useRouter();

  const [currentQuestion, setQuestion] = useState(0);
  const [activeQues, setActiveQues] = useState<number | null>(null);
  const goQuestion = async (offset: number) => {
    const newIndex = currentQuestion + offset;
    if (newIndex > 7) {
      await router.push("/answer");
      return;
    }
    if (newIndex < 0) {
      return;
    }
    setQuestion(newIndex);
  };

  function getOptions() {
    const opts = options[currentQuestion];
    if (currentQuestion === 1) {
      return (
        <>
          <div className="ques-group">
            {opts[0]}
            {opts[1]}
            {opts[2]}
          </div>
          <div className="ques-group">
            {opts[3]}
            {opts[4]}
            {opts[5]}
          </div>
          <div className="ques-group">
            {opts[6]}
            {opts[7]}
            {opts[8]}
          </div>
        </>
      );
    } else if (currentQuestion === 5) {
      return (
        <>
          <div className="ques-group">
            {opts[0]}
            {opts[1]}
          </div>
          <div className="ques-group">
            {opts[2]}
            {opts[3]}
          </div>
          <div className="ques-group">{opts[4]}</div>
        </>
      );
    } else {
      for (let index = 0; index < opts.length; index++) {
        const item = opts[index];
        // item.onClick = () => {
        //   setActiveQues(index);
        // };
      }
      return opts.map((item, index) => item);
    }
  }
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

        <div className="content">
          <div className="page-number">
            <p>{(currentQuestion + 1).toString().padStart(2, "0")}/08</p>
          </div>
          <div className="ques-text">
            <p>{questions[currentQuestion]}</p>
          </div>
          <div className="ques-form">
            <div className="options">{getOptions()}</div>
          </div>
        </div>

        {/* <div className="ctrl-box">
          <button className="btn-niconite">我不是機器人 :)</button>
        </div> */}
        <div className="ctrl-fixed-box">
          <button onClick={() => goQuestion(-1)} className="btn-back">
            BACK
          </button>
          <button onClick={() => goQuestion(1)} className="btn-next">
            NEXT
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};
export default QuestionPage;
