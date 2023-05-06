/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import LeavePopup from "../src/components/LeavePopup";
import QuestionProgress from "../src/components/QuestionProgress";
// import Audio1Mp3 from "../src/assets/audio1.mp3";
// import Audio2Mp3 from "../src/assets/audio2.mp3";

const useAudio = (url: any): [boolean, () => void] => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio(url) : null
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  const stop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setPlaying(false);
  };

  useEffect(() => {
    if (!audio) {
      setAudio(new Audio(url));
    }
    // only run once on the first render on the client
  }, []);

  useEffect(() => {
    playing ? audio?.play() : stop();
  }, [playing]);

  useEffect(() => {
    audio?.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio?.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const questions = [
  <>
    <p>聽聽以下幾種聲音，</p>
    <p>請選出哪個是由AI生成的?</p>
  </>,
  <>
    <p>請選出含有真的貓咪的照片</p>
    <p>(=^‥^=)</p>
  </>,
  <>
    <p>請觀看以下問題及回覆，選出哪個是AI回答的。</p>
    <br />
    <p
      style={{
        fontSize: "1.3rem",
        textAlign: "left",
        padding: "0 1rem",
      }}
    >
      女友：寶貝寶貝，你覺得哪個色號的口紅更適合我？乾燥玫瑰粉還是這隻鮭魚粉呀～
    </p>
  </>,
  <p>外表生心理條件都一樣並符合你的需求下，你會選擇誰當伴侶?</p>,
  <p>你覺得哪個迷因更好笑？</p>,
  <p>你願意接受誰的告白？</p>,
  <p>你覺得人類會愛上AI嗎？</p>,
  <p>你覺得出這些題目的是誰？</p>,
];

type QuesItemProps = {
  isActive: boolean;
  idx: number;
  children?: React.ReactNode;
  onClick?: (idx: number) => void;
};

const defaultAns: (string | null)[] = new Array(8).fill("");

const options: Array<Array<React.FC<QuesItemProps>>> = [
  [
    ({ ...props }) => {
      return (
        <div
          onClick={() => props.onClick && props.onClick(props.idx)}
          key="a1-1"
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
          key="a1-2"
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
          key="a2-1"
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
          key="a2-2"
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
          key="a2-3"
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
          key="a2-4"
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
          key="a2-5"
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
          key="a2-6"
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
          key="a2-7"
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
          key="a2-8"
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
          key="a2-9"
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
          key="a3-1"
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
          key="a3-2"
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
          key="a3-3"
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
          key="a4-1"
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
          key="a4-2"
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
          key="a4-3"
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
          key="a5-1"
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
          key="a5-2"
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
          key="a6-1"
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
          key="a6-2"
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
          key="a6-3"
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
          key="a6-4"
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
          key="a6-5"
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
          key="a7-1"
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
          key="a7-2"
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
          key="a8-1"
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
          key="a8-2"
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
const CorrectAnswerList = ["0", "2,3,4,5,7,8", "1", "0", "1", "0,3", "1", "0"];
const CatAnswerList = ["", "", "2", "2", "", "4", "", "", ""];
const QuestionPage: React.FC = () => {
  const router = useRouter();
  const [isDoing, setIsDoing] = useState(false);
  const [currentQuestion, setQuestion] = useState(0);
  const [ansList, setAnsList] = useState<(string | null)[]>(defaultAns);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const currentAnswer = useMemo<string>(() => {
    return ansList[currentQuestion] || "";
  }, [ansList, currentQuestion]);

  const isNextDisabled = useMemo<boolean>(() => {
    return !currentAnswer;
  }, [ansList, currentQuestion]);

  const goQuestion = useCallback(
    async (offset: number) => {
      const newIndex = currentQuestion + offset;
      if (newIndex > 7) {
        const score = calcCorrectAns(ansList);
        let result = 0;
        if (score <= 2) {
          result = 0;
        } else if (score > 2 && score <= 4) {
          result = 1;
        } else if (score > 4 && score <= 6) {
          result = 2;
        } else if (score > 6 && score <= 8) {
          result = 3;
        } else {
          result = 4;
        }
        console.log({
          score,
          result,
        });
        await router.push({
          pathname: "/answer",
          query: {
            r: result,
          },
        });
        return;
      }
      if (newIndex < 0) {
        return;
      }
      setQuestion(newIndex);
    },
    [ansList, router, setQuestion]
  );

  const submit = () => {
    setIsSubmiting(true);
  };

  const playAudio = (idx: number) => {
    if (audio1Playing && idx === 1) {
      // stop audio1
      console.log("stop audio1");
      audio1Toggle();
    }
    if (audio2Playing && idx === 0) {
      // stop audio2
      console.log("stop audio2");
      audio2Toggle();
    }
    if (idx === 0) {
      console.log("start audio1");
      audio1Toggle();
    }
    if (idx === 1) {
      console.log("start audio2");
      audio2Toggle();
    }
  };
  const onClickAns = useCallback(
    (idx: number) => {
      const currentList = [...ansList];
      if (currentQuestion === 0) {
        playAudio(idx);
      }

      if (currentQuestion === 1) {
        const ans = (currentList[currentQuestion] || "").split(",");
        console.log({
          ans,
          o: ansList[currentQuestion],
          idx,
          currentQuestion,
          currentList,
        });
        if (ans.includes(idx.toString())) {
          ans.splice(ans.indexOf(idx.toString()), 1);
        } else {
          ans.push(idx.toString());
        }
        console.log({ ans });
        currentList[currentQuestion] = ans.filter((v) => !!v).join(",");
        console.log(currentList);
      } else {
        currentList[currentQuestion] = idx.toString();
      }
      setAnsList(currentList);
    },
    [currentQuestion, ansList, , setAnsList]
  );

  function getOptions() {
    const opts = options[currentQuestion];

    if (currentQuestion === 1) {
      const result: any[] = [];
      for (let index = 0; index < opts.length; index += 3) {
        const idx = index;
        const Item1 = opts[idx];
        const Item2 = opts[idx + 1];
        const Item3 = opts[idx + 2];
        result.push(
          <div className="ques-group">
            <Item1
              key={`a2p-${idx}`}
              idx={idx}
              isActive={currentAnswer?.indexOf(idx.toString()) >= 0}
              onClick={onClickAns}
            ></Item1>
            <Item2
              key={`a2p-${idx + 1}`}
              idx={idx + 1}
              isActive={currentAnswer?.indexOf((idx + 1).toString()) >= 0}
              onClick={onClickAns}
            ></Item2>
            <Item3
              key={`a2p-${idx + 2}`}
              idx={idx + 2}
              isActive={currentAnswer?.indexOf((idx + 2).toString()) >= 0}
              onClick={onClickAns}
            ></Item3>
          </div>
        );
      }
      return <>{result}</>;
    } else if (currentQuestion === 5) {
      const result: any[] = [];
      for (let index = 0; index < opts.length - 1; index += 2) {
        const idx = index;
        const Item1 = opts[idx];
        const Item2 = opts[idx + 1];
        result.push(
          <div className="ques-group">
            <Item1
              key={`a6p-${idx}`}
              idx={idx}
              isActive={idx.toString() === currentAnswer}
              onClick={onClickAns}
            ></Item1>
            <Item2
              key={`a6p-${idx + 1}`}
              idx={idx + 1}
              isActive={(idx + 1).toString() === currentAnswer}
              onClick={onClickAns}
            ></Item2>
          </div>
        );
      }
      const LastItem = options[5][4];
      result.push(
        <div className="ques-group">
          <LastItem
            key={`a6p-5`}
            idx={5}
            isActive={"5" === currentAnswer}
            onClick={onClickAns}
          ></LastItem>
        </div>
      );
      return result;
    } else {
      const result: any[] = [];
      for (let index = 0; index < opts.length; index++) {
        const Item = opts[index];
        result.push(
          <Item
            key={`a${currentQuestion}p-${index}`}
            idx={index}
            isActive={index.toString() === currentAnswer}
            onClick={onClickAns}
          ></Item>
        );
      }
      return <>{result}</>;
    }
  }

  const [audio1Playing, audio1Toggle] = useAudio("/audio1.mp3");
  const [audio2Playing, audio2Toggle] = useAudio("/audio2.mp3");

  return (
    <MobileLayout>
      <div className="page page-question">
        <header className="header">
          <button
            style={{
              visibility: isSubmiting ? "hidden" : "visible",
            }}
            onClick={() => setIsLeaving(true)}
            className="btn-esc"
          >
            <IconEsc className="icon-esc"></IconEsc>
            <span>ESC</span>
          </button>

          <div onClick={() => router.push("/")} className="logo">
            <img src={LogoImg.src} alt="" />
          </div>
        </header>
        {isDoing && !isSubmiting ? (
          <>
            <div className="content">
              <div className="page-number">
                <p>{(currentQuestion + 1).toString().padStart(2, "0")}/08</p>
              </div>
              <div className="ques-text">
                <p>{questions[currentQuestion]}</p>
              </div>
              <div className="ques-form">
                <div className="options">{getOptions()}</div>
                {currentQuestion === 0 && (
                  <p className="tips text-light">*請開啟音量*</p>
                )}
                {currentQuestion === 1 && (
                  <p className="tips text-light">*複選題*</p>
                )}
              </div>
            </div>
            <div className="ctrl-fixed-box">
              <button
                style={{
                  visibility: currentQuestion === 0 ? "hidden" : "initial",
                }}
                onClick={() => goQuestion(-1)}
                className="btn-back"
              >
                BACK
              </button>
              {currentQuestion === 7 ? (
                <button
                  onClick={() => submit()}
                  className={`btn-next ${isNextDisabled ? "disabled" : ""}`}
                >
                  SUBMIT
                </button>
              ) : (
                <button
                  onClick={() => goQuestion(1)}
                  className={`btn-next ${isNextDisabled ? "disabled" : ""}`}
                >
                  NEXT
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                justifyContent: "center",
                marginTop: "2rem",
                display: "initial",
              }}
              className="content"
            >
              <div className="intro">
                {isSubmiting ? (
                  <></>
                ) : (
                  <div className="desc">
                    <p>AI強勢來臨</p>
                    <p>在這轉變世代你會成為什麼角色呢？</p>
                    <p>是不幸被取代的淘太品，</p>
                    <p>還是成功存活的人類！</p>
                    <p>來測驗看看吧 </p>
                    <p>;”P </p>
                  </div>
                )}
                <div className="logo-main">
                  <img src={LogoMainImg.src} alt="" />
                </div>
                <div className="slogan">
                  <p>「Niconite尼可柰」體驗創作團隊，</p>
                  <p>致力於創造讓人上癮的娛樂活動。</p>
                </div>
              </div>
              {isSubmiting ? (
                <QuestionProgress
                  isShow={isSubmiting}
                  onCompleted={() => goQuestion(1)}
                ></QuestionProgress>
              ) : (
                <div className="ctrl-box">
                  <button
                    onClick={() => setIsDoing(true)}
                    className="btn-niconite"
                  >
                    我不是機器人 :)
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* <div className="ctrl-box">
          <button className="btn-niconite">我不是機器人 :)</button>
        </div> */}
      </div>
      {isLeaving ? (
        <LeavePopup
          onConfirm={() => setIsLeaving(false)}
          isShow={isLeaving}
        ></LeavePopup>
      ) : (
        <></>
      )}
    </MobileLayout>
  );
};
export default QuestionPage;

function getRandomFromArray<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function calcCorrectAns(answerList: (string | null)[]) {
  let score = 0;
  for (let index = 0; index < answerList.length; index++) {
    const ans = answerList[index]?.split(",") || [];
    const correct = CorrectAnswerList[index].split(",");
    // ans have any item in corrects
    if (ans.some((item) => correct.includes(item))) {
      score++;
    }

    const catCorrect = CatAnswerList[index].split(",");
    if (ans.some((item) => catCorrect.includes(item))) {
      score = 99;
      break;
    }
  }

  return score;
}
console.log({ calcCorrectAns });
