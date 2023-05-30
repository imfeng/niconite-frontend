import React, { useMemo, useState } from "react";

import computerLogo from "../src/assets/computer.png";
import IconEsc from "../src/assets/icon-esc.svg";
import { useRouter } from "next/router";
import Progress from "../src/components/progress";
import PopupWindow from "../src/components/PopupWindow";
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";

const bgImageWidth = 830;
const bgImageHeight = 1800;
const bgImageRatio = bgImageWidth / bgImageHeight;
const HomeMain: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const doLoading = () => {
    setIsLoading(true);
    // await router.push("./question");
  };
  const goQuestionPage = () => {
    setIsLoaded(true);
    setTimeout(async () => {
      await router.push("./question");
    }, 1000500);
  };

  const { width: _width, height: _height } = useWindowSize();
  const itemPos = useMemo(() => {
    const __height = Math.min(
      window.screen.availHeight || _height || 0,
      window.innerHeight || 0
    );

    const width = _width >= 768 ? 440 : _width;
    const height = _width >= 768 ? 990 - 30 : __height - 30;

    const windowRatio = width / height;
    const itemWidth = width * 0.8; // equal to 80% window width
    const itemHeight = (itemWidth / 359) * 367;
    // const itemRatio = itemWidth / itemHeight;
    const realBgImageHeight = (width * bgImageHeight) / bgImageWidth - 10;
    return {
      top: realBgImageHeight * 0.13,
      left: 0,
    };
  }, [_width, _height]);
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
      <div
        style={{
          top: `${itemPos.top}px`,
        }}
        onClick={doLoading}
        className={`computer-box ${isLoaded ? "computer-box-loaded" : ""}`}
      >
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
          <button onClick={doLoading} className="btn-start blink">
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

export default dynamic(() => Promise.resolve(HomeMain), {
  ssr: false,
});
