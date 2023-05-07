import { useState, useEffect } from "react";

export const useAudio = (url: any): [boolean, () => void] => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio(url) : null
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  const stop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setPlaying(false);
  };

  useEffect(() => {
    if (!audio) {
      setAudio(new Audio(url));
    }
    // only run once on the first render on the client
  }, []);

  useEffect(() => {
    if (!audio) {
      setAudio(new Audio(url));
    }
    playing ? audio?.play() : stop();
  }, [playing]);

  useEffect(() => {
    audio?.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio?.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};
