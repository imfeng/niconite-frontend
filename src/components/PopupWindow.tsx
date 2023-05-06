import React, { useEffect, useRef, useState } from "react";
import computerLogo from "../assets/com-empty.png";
import LogoImg from "../assets/logo.png";
import { useRouter } from "next/router";

type PopupWindowProps = {
  text: string;
  isShow: boolean;
  children?: React.ReactNode;
  onConfirm?: (isConfirm: boolean) => any;
};
export const PopupWindow: React.FC<PopupWindowProps> = ({
  children,
  ...props
}) => {
  const router = useRouter();
  return props.isShow ? (
    <div className="popup">
      <div className="window">
        <div className="logo">
          <img src={LogoImg.src} alt="" />
        </div>
        <div className="hint">
          <p>{props.text}</p>
        </div>
        <div className="btns">
          <button
            onClick={() => props.onConfirm && props.onConfirm(true)}
            className="btn-confirm"
          >
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
  ) : (
    <></>
  );
};

export default PopupWindow;
