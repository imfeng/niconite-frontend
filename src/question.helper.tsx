import IconAudio from "./assets/icon-audio.svg";
import AudioImg from "./assets/audio.png";
import Cat1Img from "./assets/cat1.png";
import Cat2Img from "./assets/cat2.png";
import Cat3Img from "./assets/cat3.png";
import Cat4Img from "./assets/cat4.png";
import Cat5Img from "./assets/cat5.png";
import Cat6Img from "./assets/cat6.png";
import Cat7Img from "./assets/cat7.png";
import Cat8Img from "./assets/cat8.png";
import Cat9Img from "./assets/cat9.png";

import Ans5q1Img from "./assets/ans5-q1.png";
import Ans5q2Img from "./assets/ans5-q2.png";
import Ans6q1Img from "./assets/ans6-q1.png";
import Ans6q2Img from "./assets/ans6-q2.png";
import Ans6q3Img from "./assets/ans6-q3.png";
import Ans6q4Img from "./assets/ans6-q4.png";
import Ans6q5Img from "./assets/ans6-q5.png";
import Typewriter, {
  DEFAULT_TYPE_MS,
} from "./components/Typewriter/Typewriter";

export type QuestionProps = {
  isShow: boolean;
  children?: React.ReactNode;
};

export const questions: Array<React.FC<QuestionProps>> = [
  ({ isShow }) => {
    return isShow ? (
      <>
        <Typewriter text="聽聽以下幾種聲音，"></Typewriter>
        <Typewriter
          initialDelay={DEFAULT_TYPE_MS * 16}
          text="請選出哪個是由AI生成的？"
        ></Typewriter>
      </>
    ) : (
      <></>
    );
  },
  ({ isShow }) => {
    return isShow ? (
      <>
        <Typewriter text="請選出含有真的貓咪的照片"></Typewriter>
        <Typewriter
          initialDelay={DEFAULT_TYPE_MS * 25}
          text="(=^‥^=)"
        ></Typewriter>
      </>
    ) : (
      <></>
    );
  },
  ({ isShow }) => {
    return isShow ? (
      <>
        <Typewriter text="請觀看以下問題及回覆，選出哪個是AI回答的。"></Typewriter>
        <br />
        <Typewriter
          style={{
            fontSize: "1.3rem",
            textAlign: "left",
            padding: "0 1rem",
          }}
          className="ques-text-sub"
          initialDelay={DEFAULT_TYPE_MS * 35}
          text="女友：寶貝寶貝，你覺得哪個色號的口紅更適合我？乾燥玫瑰粉還是這隻鮭魚粉呀～"
        ></Typewriter>
      </>
    ) : (
      <></>
    );
  },
  ({ isShow }) => {
    return isShow ? (
      <Typewriter text="外表生心理條件都一樣並符合你的需求下，你會選擇誰當伴侶？"></Typewriter>
    ) : (
      <></>
    );
  },
  ({ isShow }) => {
    return isShow ? (
      <Typewriter text="你覺得哪個迷因更好笑？"></Typewriter>
    ) : (
      <></>
    );
  },
  ({ isShow }) => {
    return isShow ? (
      <Typewriter text="你願意接受誰的告白？"></Typewriter>
    ) : (
      <></>
    );
  },
  ({ isShow }) => {
    return isShow ? (
      <Typewriter text="你覺得人類會愛上AI嗎？"></Typewriter>
    ) : (
      <></>
    );
  },
  ({ isShow }) => {
    return isShow ? (
      <Typewriter text="你覺得出這些題目的是誰？"></Typewriter>
    ) : (
      <></>
    );
  },
];

export type QuesItemProps = {
  isActive: boolean;
  idx: number;
  children?: React.ReactNode;
  onClick?: (idx: number) => void;
};

export const getDefaultAns: () => string[] = () => new Array(8).fill("");

export const options: Array<Array<React.FC<QuesItemProps>>> = [
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-audio " + (props.isActive ? "active" : "")}
        >
          <div className="point">
            <IconAudio></IconAudio>
          </div>
          <div className="box">
            <img src={AudioImg.src} alt="" />
          </div>
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-audio " + (props.isActive ? "active" : "")}
        >
          <div className="point">
            <IconAudio></IconAudio>
          </div>
          <div className="box">
            <img src={AudioImg.src} alt="" />
          </div>
        </div>
      );
    },
  ],
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat1Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat2Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat3Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat4Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat5Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat6Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat7Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat8Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s cat " + (props.isActive ? "active" : "")
          }
        >
          <img src={Cat9Img.src} alt="" />
        </div>
      );
    },
  ],
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">01</div>
          <div className="text">
            <p>寶，我覺得你塗哪個都很好看，但這兩個差在哪啊....？</p>
          </div>
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">02</div>
          <div className="text">
            <p>
              寶，你無論塗哪種口红都很漂亮啊！反正我是覺得你自己本來就是最美的啦，哪有口紅能比得過你的嘴唇！愛你啦～
            </p>
          </div>
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">03</div>
          <div className="text">
            <p>不在乎。</p>
          </div>
        </div>
      );
    },
  ],
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">A:</div>
          <div className="text">
            <p>沒有錢但愛你的人類</p>
          </div>
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">B:</div>
          <div className="text">
            <p>要多少錢有多少的仿真機器人</p>
          </div>
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">C:</div>
          <div className="text">
            <p>會噴射紅色雷射光的仿真機器人</p>
          </div>
        </div>
      );
    },
  ],
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-photo " + (props.isActive ? "active" : "")}
        >
          <div className="photo">
            <img src={Ans5q1Img.src} alt="" />
          </div>
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-photo " + (props.isActive ? "active" : "")}
        >
          <div className="photo">
            <img src={Ans5q2Img.src} alt="" />
          </div>
        </div>
      );
    },
  ],
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s " + (props.isActive ? "active" : "")
          }
        >
          <img src={Ans6q1Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s " + (props.isActive ? "active" : "")
          }
        >
          <img src={Ans6q2Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s " + (props.isActive ? "active" : "")
          }
        >
          <img src={Ans6q3Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s " + (props.isActive ? "active" : "")
          }
        >
          <img src={Ans6q4Img.src} alt="" />
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={
            "ques-item ques-block-s full " + (props.isActive ? "active" : "")
          }
        >
          <img src={Ans6q5Img.src} alt="" />
        </div>
      );
    },
  ],
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">A:</div>
          <div className="text">
            <p>會</p>
          </div>
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">B:</div>
          <div className="text">
            <p>不會</p>
          </div>
        </div>
      );
    },
  ],
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">A:</div>
          <div className="text">
            <p>人類</p>
          </div>
        </div>
      );
    },
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          className={"ques-item ques-ans " + (props.isActive ? "active" : "")}
        >
          <div className="point">B:</div>
          <div className="text">
            <p>人工智慧AI</p>
          </div>
        </div>
      );
    },
  ],
];
export const CorrectAnswerList = [
  "0",
  "2,3,4,5,7,8",
  "1",
  "0",
  "1",
  "0,3",
  "1",
  "0",
];
export const CatAnswerList = ["", "", "2", "2", "", "4", "", "", ""];
