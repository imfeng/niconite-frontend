import React from "react";

import { Cards, Footer, Header, Main } from "@components/scss";
import { MobileLayout } from "@components/layout/mobile-layout";
import HomeMain from "./home";
const Home: React.FC = () => {
  return (
    <MobileLayout>
      <HomeMain></HomeMain>
      {/* <QuestionPage></QuestionPage> */}
      {/* <AnswerPage></AnswerPage> */}
    </MobileLayout>
  );
};

export default Home;
