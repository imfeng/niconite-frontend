import React, { useEffect, useRef, useState } from "react";
import computerLogo from "../assets/com-empty.png";
import LogoImg from "../assets/logo.png";
import { useRouter } from "next/router";

type LeavePopupProps = {
  isShow: boolean;
  children?: React.ReactNode;
  onConfirm?: (isConfirm: boolean) => any;
};
export const LeavePopup: React.FC<LeavePopupProps> = ({
  children,
  ...props
}) => {
  const router = useRouter();
  return (
    <div
      style={{
        opacity: props.isShow ? 1 : 0,
      }}
      className="popup"
    >
      <div className="window">
        <div className="logo">
          <img src={LogoImg.src} alt="" />
        </div>
        <div className="hint">
          <p>你確定要離開廁驗嗎？</p>
        </div>
        <div className="btns">
          <button onClick={() => router.push("/leave")} className="btn-confirm">
            CONFIRM
          </button>
          <button
            onClick={() => props.onConfirm && props.onConfirm(false)}
            className="btn-cancel"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeavePopup;
