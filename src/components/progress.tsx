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

  const animateLoading = (
    startTime: number,
    duration: number,
    from: number,
    to: number
  ) => {
    const step = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const value = from + (to - from) * easedProgress;

      setDisplayValue(Math.ceil(value));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const showLoadingV2 = () => {
    disableLoading();

    const duration = 2000; // 3 seconds for the ease-in-out animation
    const pauseDuration = 2800; // 2 seconds pause at 99%

    animateLoading(performance.now(), duration, 0, 99);

    setTimeout(() => {
      animateLoading(performance.now(), duration, 99, 100);
      props.onCompleted && props.onCompleted();
    }, duration + pauseDuration);
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
      showLoadingV2();
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

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

function customEasing(t: number) {
  if (t <= 0.45) {
    return (1 - (1 - t / 0.45) * (1 - t / 0.45)) * 0.5;
  } else if (t <= 0.9) {
    return 0.5 + ((t - 0.45) / 0.45) * 0.45;
  } else {
    return 0.95 + (1 - (1 - (t - 0.9) / 0.1) * (1 - (t - 0.9) / 0.1)) * 0.05;
  }
}

function customEasingV2(t: number) {
  if (t <= 0.9) {
    return 2 * t * t;
  } else {
    return 1 - (1 - t) * (1 - t);
  }
}

function cubicBezier(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  epsilon: number
) {
  const curveX = function (t: number) {
    const v = 1 - t;
    return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
  };

  const curveY = function (t: number) {
    const v = 1 - t;
    return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
  };

  const derivativeCurveX = function (t: number) {
    const v = 1 - t;
    return (
      3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2
    );
  };

  return function (t: any) {
    // eslint-disable-next-line prefer-const
    let x = t,
      t0,
      t1,
      t2,
      x2,
      d2,
      i;

    // First try a few iterations of Newton's method -- normally very fast.
    for (t2 = x, i = 0; i < 8; i++) {
      x2 = curveX(t2) - x;
      if (Math.abs(x2) < epsilon) return curveY(t2);
      d2 = derivativeCurveX(t2);
      if (Math.abs(d2) < 1e-6) break;
      t2 = t2 - x2 / d2;
    }

    (t0 = 0), (t1 = 1), (t2 = x);

    if (t2 < t0) return curveY(t0);
    if (t2 > t1) return curveY(t1);

    // Fallback to the bisection method for reliability.
    while (t0 < t1) {
      x2 = curveX(t2);
      if (Math.abs(x2 - x) < epsilon) return curveY(t2);
      if (x > x2) t0 = t2;
      else t1 = t2;
      t2 = (t1 - t0) * 0.5 + t0;
    }

    // Failure
    return curveY(t2);
  };
}
