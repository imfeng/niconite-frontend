import React, { useState } from "react";

import computerLogo from "../src/assets/computer.png";
import IconEsc from "../src/assets/icon-esc.svg";
import { useRouter } from "next/router";
import Progress from "../src/components/progress";
const HomeMain: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const doLoading = async () => {
    setIsLoading(true);
    // await router.push("./question");
  };
  const goQuestionPage = async () => {
    await router.push("./question");
  };
  return (
    <div className="page page-home">
      <header className="header">
        <button className="btn-esc">
          <IconEsc className="icon-esc"></IconEsc>
          <span>ESC</span>
        </button>
      </header>
      <div className="computer-box">
        <Progress onCompleted={goQuestionPage} isShow={isLoading}></Progress>
        <div
          style={{
            opacity: isLoading ? 0 : 1,
          }}
          className="computer"
        >
          <img src={computerLogo.src} alt="" />
        </div>
      </div>
      {isLoading ? (
        <></>
      ) : (
        <div className="bottom-ctrl">
          <button onClick={doLoading} className="btn-start">
            PRESS TO START
          </button>
        </div>
      )}
    </div>
  );
};
export default HomeMain;
