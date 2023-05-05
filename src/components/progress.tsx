import React, { useEffect, useRef, useState } from "react";
import computerLogo from "../assets/com-empty.png";

type ProgressProps = {
  isShow: boolean;
  children?: React.ReactNode;
  onCompleted?: () => void;
};
export const Progress: React.FC<ProgressProps> = ({ children, ...props }) => {
  const oldValue = useRef(0);
  const interval = useRef(0);
  const [displayValue, setDisplayValue] = useState(oldValue.current);

  const disableLoading = () => {
    interval.current && clearInterval(interval.current);
    oldValue.current = 0;
    setDisplayValue(0);
  };

  const showLoading = () => {
    disableLoading();
    let times99 = 0;
    interval.current = setInterval(() => {
      setDisplayValue((val) => {
        if (val === 99 && times99 < 40) {
          times99++;
          return val;
        }
        if (val >= 100) {
          oldValue.current = 100;
          clearInterval(interval.current);
          props.onCompleted && props.onCompleted();
          return val;
        }
        return val + 1;
      });
    }, 30) as unknown as number;
  };

  useEffect(() => {
    if (props.isShow) {
      showLoading();
    } else {
      disableLoading();
    }
  }, [props.isShow]);

  return (
    <div
      style={{
        opacity: props.isShow ? 1 : 0,
      }}
      className="computer computer-progress"
    >
      <img src={computerLogo.src} alt="" />
      <div className="progress-box">
        <div className="text">
          <p>Uploading... {displayValue}%</p>
        </div>
        <div className="wrap">
          <div
            style={{
              width: `${displayValue}%`,
            }}
            className="progress-bar"
          >
            <div className="progress neon" data-width="50%">
              {/* <div className="progress-text">50%</div> */}
              <div className="progress-bar">
                {/* <div className="progress-text">50%</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
