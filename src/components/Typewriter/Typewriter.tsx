import React, { useState, useEffect, useMemo, useRef } from "react";

import styles from "./Typewriter.module.scss";

export const DEFAULT_TYPE_MS = 70;

export interface ITypewriterProps {
  text: string | string[];
  speed?: number;
  loop?: boolean;
  // random?: number;
  nextTextDelay?: number;
  cursor?: boolean;
  onFinished?: () => any;
  onStart?: () => any;
  isEndShowCursor?: boolean;
  initialDelay?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function Typewriter({
  text,
  speed = DEFAULT_TYPE_MS,
  loop = false,
  // random = DEFAULT_TYPE_MS,
  nextTextDelay = DEFAULT_TYPE_MS,
  cursor = true,
  isEndShowCursor = false,
  initialDelay = 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onFinished = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onStart = () => {},
  className = "",
  style = {},
}: ITypewriterProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const isFirstRender = React.useRef(true);
  const isStarted = React.useRef(initialDelay === 0);
  const timeoutQueue = useRef<number[]>([]);

  if (!Array.isArray(text)) text = [text];

  useEffect(() => {
    const nextTime = isFirstRender.current ? initialDelay : 0 + speed;
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    const a = setTimeout(() => {
      isStarted.current = true;
      if (currentTextIndex === 0) onStart();
      if (currentTextIndex < text[currentStringIndex].length) {
        setCurrentTextIndex(currentTextIndex + 1);
      } else {
        if (currentStringIndex < text.length - 1) {
          timeoutQueue.current.push(
            setTimeout(() => {
              setCurrentTextIndex(0);
              setCurrentStringIndex(currentStringIndex + 1);
            }, nextTextDelay) as unknown as number
          );
        } else {
          if (loop) {
            timeoutQueue.current.push(
              setTimeout(() => {
                setCurrentTextIndex(0);
                setCurrentStringIndex(0);
              }, nextTextDelay) as unknown as number
            );
          } else {
            onFinished();
            timeoutQueue.current.push(
              setTimeout(() => {
                setCompleted(true);
              }, 500) as unknown as number
            );
          }
        }
      }
    }, nextTime);
    timeoutQueue.current.push(a as unknown as number);

    return () => {
      timeoutQueue.current.forEach((t) => clearTimeout(t));
    };
  });

  const currentSpanStyle = useMemo(() => {
    if (!completed || isEndShowCursor) {
      return {};
    } else {
      return {
        borderRight: "none",
      };
    }
  }, [completed, isEndShowCursor]);

  return (
    <p style={style} className={`${styles.typewriter} ${className}`}>
      {isStarted.current ? (
        <span style={currentSpanStyle}>
          {text[currentStringIndex].substring(0, currentTextIndex)}
          {/* {isStarted.current && (!completed || isEndShowCursor) && (
            <span className={styles.cursor}>{cursor && "▎"}</span>
          )} */}
        </span>
      ) : (
        <span style={{ visibility: "hidden" }}>|</span>
      )}
    </p>
  );
}
