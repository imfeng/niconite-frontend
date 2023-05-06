import React, { useState } from "react";

import computerLogo from "../src/assets/computer.png";
import IconEsc from "../src/assets/icon-esc.svg";
import { useRouter } from "next/router";
import Progress from "../src/components/progress";
import PopupWindow from "../src/components/PopupWindow";

const HomeMain: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
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
        <button
          style={{
            visibility: isLoading ? "hidden" : "visible",
          }}
          onClick={() => setIsLeaving(true)}
          className="btn-esc"
        >
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
      <PopupWindow
        text="你確定要離開廁驗嗎？"
        onConfirm={(isConfirm) =>
          isConfirm ? router.push("/leave") : setIsLeaving(false)
        }
        isShow={isLeaving}
      ></PopupWindow>
    </div>
  );
};
export default HomeMain;
