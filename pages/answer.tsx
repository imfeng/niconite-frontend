import React, { useState } from "react";
import { MobileLayout } from "@components/layout/mobile-layout";

import computerAns1Img from "../src/assets/com-ans1.png";
import ans1DescImg from "../src/assets/ans1-desc.png";
import computerAns2Img from "../src/assets/com-ans2.png";
import ans2DescImg from "../src/assets/ans2-desc.png";
import computerAns3Img from "../src/assets/com-ans3.png";
import ans3DescImg from "../src/assets/ans3-desc.png";
import computerAns4Img from "../src/assets/com-ans4.png";
import ans4DescImg from "../src/assets/ans4-desc.png";
import ans5DescImg from "../src/assets/ans5-desc.png";
import IconEsc from "../src/assets/icon-esc.svg";
import IconDown from "../src/assets/icon-down.svg";
import IconRefresh from "../src/assets/icon-refresh.svg";
import BgCatImg from "../src/assets/bg-cat.png";
import { useRouter } from "next/router";

import ShareAns1 from "../src/assets/result1.png";
import ShareAns2 from "../src/assets/result2.png";
import ShareAns3 from "../src/assets/result3.png";
import ShareAns4 from "../src/assets/result4.png";
import ShareAns5 from "../src/assets/result5.png";

const AnsInfoList = [
  {
    pic: ShareAns1.src,
    name: "((:奎爾特:))",
    img: computerAns1Img.src,
    imgDesc: ans1DescImg.src,
    alias: "((: 創造者 :))",
    desc: "你是精英中的精英，與生俱來的觀察力洞悉所有操作，AI就是你智慧下的產物。你擁有開放性思考特質，擅長縱觀全局並俯瞰問題的存在，真正的智慧使你敏銳判別什麼是真什麼是假，人類的生存密碼也許就掌握在你手裡！",
  },
  {
    pic: ShareAns2.src,
    name: "((:鴿子駭客:))",
    img: computerAns2Img.src,
    imgDesc: ans2DescImg.src,
    alias: "((: 互利共生 :))",
    desc: "身為一個駭客你做得很好，懂得和平共處是你最大的優點。AI的強勢發展已無法擋，雖然不能打敗對手，但具智慧的你擅長權衡利弊，與其兩敗俱傷不如運用它的方便性從中學習，也懂得適時裝傻換取美好未來，互利共生就是你最後生存下來的原因！",
  },

  {
    pic: ShareAns3.src,
    name: "((:莎莎雅:))",
    img: computerAns3Img.src,
    imgDesc: ans3DescImg.src,
    alias: "((: 跟從者 :))",
    desc: "天真單純的你習慣用直覺來思考事情，樂觀特質是你受歡迎的原因。在AI聊天室裡，機器人雖然語調生硬，但秒回的貼心賦予你滿滿安全感，相信美好的事物總會發生，是你最大優點同時也是最危險的缺點，別只看到表面的粉紅泡泡，人工智能就快攻下你的心房，趁現在振作還來得及！",
  },

  {
    pic: ShareAns4.src,
    name: "((:瑕疵螺絲釘:))",
    img: computerAns4Img.src,
    imgDesc: ans4DescImg.src,
    alias: "((: 犧牲者 :))",
    desc: "儘管不願接受被統治的命運，過於隨和的性格終究將你推智慧洪流。在他人眼中你是愛好和平的存在，但這世道已經太壞了！適時地態度強硬才能保護自己並且更有魅力。然而在與AI拼搏的路上，資訊密集轟炸讓你感到絕望，最終你決定放下執念，成為機器人的附屬品，汪汪。",
  },
  {
    pic: ShareAns5.src,
    name: "((:垃圾貓貓:))",
    img: "",
    imgDesc: ans5DescImg.src,
    alias: "((: 電腦最怕的危險物種 :))",
    desc: "喜歡唱反調、追求與眾不同就是你的天性。三番好幾次咬壞電源線、打翻主機附近的水杯，還把螢幕當成貓抓板，你就是眾AI之間最高危險等級的有害物種。厭倦人們喜歡一樣的事情，卻對不規律移動事物充滿好奇心，總是帶著上帝視角來俯瞰世間，雖然機器人統治不了你，但我還不把你整隻抓起來吸爆！",
    enemy: "無，睿智的你就是你自己最大的敵人",
  },
];
const AnswerPage: React.FC = () => {
  const router = useRouter();
  const queryAns = parseInt(router.query.r as string) || 0;
  const currentAns = Math.max(Math.min(queryAns, 4), 0);
  const state = useState({
    responseAns: new Array(8).fill(0),
  });
  const [isShare, setIsShare] = useState(false);
  const { name, img, imgDesc, alias, desc, enemy, pic } =
    AnsInfoList[currentAns];

  return (
    <MobileLayout>
      <div
        style={{
          backgroundImage:
            currentAns === 4 ? `url(${BgCatImg.src})` : "transparent",
          backgroundColor: currentAns === 4 ? "#180C00" : "transparent",
        }}
        className="page page-answer"
      >
        <header className="header">
          <button className="btn-esc">
            <img src={IconEsc.src} alt="" />
          </button>
          <p>你在 AI 系統的分類代號是：</p>
        </header>
        <div className="title">
          <h1>{name}</h1>
        </div>
        {img ? (
          <div className="computer-box">
            <div className="computer">
              <img src={img} alt="" />
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="desc">
          <p>你的 AI 世代生存人群佔比是:</p>
          <div className="desc-img-box">
            <img src={imgDesc} alt="" />

            <div className="icon-down-item left">
              <IconDown></IconDown>
            </div>
            <div className="icon-down-item right">
              <IconDown></IconDown>
            </div>
          </div>
          <div className="detail">
            <h3>{alias}</h3>
            <p>{desc}</p>
          </div>
          <div className="detail-end">
            <p>你生命中最大的敵人：</p>
            {enemy ? <p>{enemy}</p> : <p>垃圾貓貓 (=^‥^=)</p>}
          </div>
        </div>
        <footer className="footer">
          <div className="ctrl-box">
            <button onClick={() => setIsShare(true)} className="btn-result">
              Get Your Resault
            </button>
            <button
              onClick={() => router.push("/question")}
              className="btn-refresh"
            >
              <IconRefresh></IconRefresh>
            </button>
          </div>
        </footer>
        {isShare ? (
          <div
            onClick={(e) => e.currentTarget === e.target && setIsShare(false)}
            className="popup-share"
          >
            <div className="tip">
              <p>長按以儲存結果頁</p>
            </div>
            <div className="photo">
              <button onClick={() => setIsShare(false)} className="btn-esc">
                <IconEsc className="icon-esc"></IconEsc>
              </button>
              <a href={pic} target="_blank" download={pic}>
                <img src={pic} alt="" />
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </MobileLayout>
  );
};
export default AnswerPage;
