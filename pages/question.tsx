/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback, useMemo, useState } from "react";
import { MobileLayout } from "@components/layout/mobile-layout";

import LogoMainImg from "../src/assets/logo-main.png";
import LogoImg from "../src/assets/logo.png";
import IconEsc from "../src/assets/icon-esc.svg";
import { useRouter } from "next/router";
import PopupWindow from "../src/components/PopupWindow";
import QuestionProgress from "../src/components/QuestionProgress";
import {
  getDefaultAns,
  options,
  questions,
  CorrectAnswerList,
  CatAnswerList,
} from "src/question.helper";
import { useAudio } from "react-use";
// import { useAudio } from "../src/hooks/useAudio";

const QuestionPage: React.FC = () => {
  const router = useRouter();
  const [Audio1, state1, controls1, ref1] = useAudio({
    src: "/audio1.mp3",
    autoPlay: false,
  });
  const [Audio2, state2, controls2, ref2] = useAudio({
    src: "/audio2.mp3",
    autoPlay: false,
  });
  // const [audio1Playing, audio1Toggle] = useAudio("/audio1.mp3");
  // const [audio2Playing, audio2Toggle] = useAudio("/audio2.mp3");

  const [isDoing, setIsDoing] = useState(false);
  const [currentQuestion, setQuestion] = useState(0);
  const [ansList, setAnsList] = useState<string[]>(getDefaultAns());
  const [isLeaving, setIsLeaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          result = 3;
        } else if (score > 2 && score <= 4) {
          result = 2;
        } else if (score > 4 && score <= 6) {
          result = 1;
        } else if (score > 6 && score <= 8) {
          result = 0;
        } else {
          result = 4;
        }
        console.log({
          ansList,
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
    [currentQuestion, ansList, router, setQuestion]
  );

  const playAudio = useCallback(
    (idx: number) => {
      console.log({
        state1,
        state2,
        Audio1,
        Audio2,
      });
      controls1.pause();
      controls2.pause();
      if (idx === 0) {
        console.log("start audio1");
        controls1.seek(0);
        controls1.play();
      }
      if (idx === 1) {
        console.log("start audio2");
        controls2.seek(0);
        controls2.play();
      }
    },
    [ref1, ref2, state1, state2, controls1, controls2]
  );
  const onClickAns = useCallback(
    (idx: number) => {
      const currentList = [...ansList];
      if (currentQuestion === 0) {
        playAudio(idx);
      }

      if (currentQuestion === 1) {
        // multiple choice
        const ans = (currentList[currentQuestion] || "").split(",");
        if (ans.includes(idx.toString())) {
          ans.splice(ans.indexOf(idx.toString()), 1);
        } else {
          ans.push(idx.toString());
        }
        currentList[currentQuestion] = ans.filter((v) => !!v).join(",");
      } else {
        // single choice
        currentList[currentQuestion] = idx.toString();
      }
      setAnsList(currentList);
    },
    [currentQuestion, ansList, , setAnsList]
  );

  const getOptions = useCallback(() => {
    const opts = options[currentQuestion];

    if (currentQuestion === 1) {
      const result: any[] = [];
      for (let index = 0; index < opts.length; index += 3) {
        const idx = index;
        const Item1 = opts[idx];
        const Item2 = opts[idx + 1];
        const Item3 = opts[idx + 2];
        result.push(
          <div key={`a2pg-${idx}`} className="ques-group">
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
          <div key={`a6pg-${idx}`} className="ques-group">
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
        <div key={`a6pg-${3}`} className="ques-group">
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
  }, [currentQuestion, onClickAns]);

  return (
    <MobileLayout>
      <div className="hidden">
        {Audio1}
        {Audio2}
      </div>
      <div className="page page-question">
        <header className="header">
          <button
            style={{
              visibility: isSubmitting ? "hidden" : "visible",
            }}
            onClick={() => setIsLeaving(true)}
            className="btn-esc"
          >
            <IconEsc className="icon-esc"></IconEsc>
            <span>ESC</span>
          </button>

          <div className="logo">
            <img src={LogoImg.src} alt="" />
          </div>
        </header>
        {isDoing && !isSubmitting ? (
          <>
            <div className="content">
              <div className="page-number">
                <p className="font-silom">
                  {(currentQuestion + 1).toString().padStart(2, "0")}/08
                </p>
              </div>
              <div className="ques-text">
                {questions.map((Ques, qidx) => (
                  <Ques
                    key={`q${qidx}`}
                    isShow={qidx === currentQuestion}
                  ></Ques>
                ))}
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
                  onClick={() => setIsSubmitting(true)}
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
            <div className="content content-start">
              <div className="intro">
                {isSubmitting ? (
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
                  <p>「Niconite尼可奈」體驗創作團隊，</p>
                  <p>致力於創造讓人上癮的娛樂活動。</p>
                </div>
              </div>
              {isSubmitting ? (
                <QuestionProgress
                  isShow={isSubmitting}
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
      <PopupWindow
        text="你確定要離開廁驗嗎？"
        onConfirm={(isConfirm) =>
          isConfirm ? router.push("/leave") : setIsLeaving(false)
        }
        isShow={isLeaving}
      ></PopupWindow>
    </MobileLayout>
  );
};
export default QuestionPage;

function calcCorrectAns(answerList: (string | null)[]) {
  let score = 0;
  for (let index = 0; index < answerList.length; index++) {
    const ans = answerList[index]?.split(",").filter((v) => !!v) || [];
    const correct = CorrectAnswerList[index].split(",").filter((v) => !!v);
    // ans have any item in corrects
    if (ans.some((item) => correct.includes(item))) {
      score++;
    }

    const catCorrect = CatAnswerList[index].split(",").filter((v) => !!v);
    if (ans.some((item) => catCorrect.includes(item))) {
      score = 99;
      break;
    }
  }

  return score;
}
