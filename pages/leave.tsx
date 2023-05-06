import React from "react";

import { Cards, Footer, Header, Main } from "@components/scss";
import { MobileLayout } from "@components/layout/mobile-layout";
import IconArrow from "../src/assets/icon-arrow.svg";
import { useRouter } from "next/router";
const Home: React.FC = () => {
  const router = useRouter();

  return (
    <MobileLayout>
      <div className="page page-leave">
        {/* <div className="sub-title">
          <p>這是在滑這則心力廁驗的你</p>
        </div> */}
        <div className="title">
          <h1>
            你以為你的生活, <br></br>真的能離開AI嗎？
          </h1>
        </div>
        <div onClick={() => router.push("/")} className="control">
          <IconArrow></IconArrow>
          <p>Now you may leave</p>
        </div>
      </div>
      {/* <QuestionPage></QuestionPage> */}
      {/* <AnswerPage></AnswerPage> */}
    </MobileLayout>
  );
};

export default Home;
