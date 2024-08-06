import Mainpage from "./Pages/Mainpage";
import { useAtom, useAtomValue } from "jotai";
import { musicStatusAtom, pageAtom, isMutedAtom } from "./state/pageState";
import { AnimatePresence, motion } from "framer-motion";

import StartPage from "./Pages/StartPage";
import Chapter1 from "./Pages/Chapters/Chapter1";
import Chapter2 from "./Pages/Chapters/Chapter2";
import Chapter3 from "./Pages/Chapters/Chapter3";
import { useEffect, useRef, useState } from "react";

import Loadings from "../src/json/loadingTexts.json";
import {
  IoVolumeOff,
  IoVolumeLow,
  IoVolumeMedium,
  IoVolumeHigh,
} from "react-icons/io5";

import "./styles/app.scss";
import Chapter4 from "./Pages/Chapters/Chapter4";
import Chapter5 from "./Pages/Chapters/Chapter5";
import Chapter6 from "./Pages/Chapters/Chapter6";
import Chapter7 from "./Pages/Chapters/Chapter7";
import Chapter8 from "./Pages/Chapters/Chapter8";
import Snowfall from "./components/Snowfall";

const Loading = () => {
  const chapter = useAtomValue(pageAtom);

  return (
    <motion.div
      className="loading"
      initial={{ opacity: 0, y: "-50px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>{Loadings[chapter - 1].title}</h2>
        <p>{Loadings[chapter - 1].description}</p>
      </div>
    </motion.div>
  );
};

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Örnek objeler

  const [chapter, setChapter] = useAtom<number>(pageAtom);
  const [isMuted, setIsMuted] = useAtom(isMutedAtom);
  const musicStatus = useAtomValue(musicStatusAtom);

  const [loading, setLoading] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [soundVolume, setSoundVolume] = useState<number>(1);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = true;
      } else {
        audioRef.current.muted = false;
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getChapter = (_chapter: number) => {
    switch (_chapter) {
      case 1:
        return <Chapter1 key="c1" />;
      case 2:
        return <Chapter2 key="c2" />;
      case 3:
        return <Chapter3 key="c3" />;
      case 4:
        return <Chapter4 key="c4" />;
      case 5:
        return <Chapter5 key="c5" />;
      case 6:
        return <Chapter6 key="c6" />;
      case 7:
        return <Chapter7 key="c7" />;
      case 8:
        return <Chapter8 key="c8" />;
      default:
        return <Mainpage key="mainpage" />;
    }
  };

  useEffect(() => {
    if (chapter === 3) {
      setChapter(4);
    }
    if (chapter === 6 || chapter === 7) {
      setChapter(8);
    }

    if (chapter !== 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [chapter]);

  useEffect(() => {
    setTimeout(toggleMute, 500);
  }, [isMuted]);

  useEffect(() => {
    if (musicStatus && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
  }, [musicStatus]);

  useEffect(() => {
    if (musicStatus && audioRef.current) {
      audioRef.current!.volume = soundVolume;
    }
  }, [soundVolume]);

  return (
    <div className="App">
      <Snowfall />
      <audio ref={audioRef} loop autoPlay>
        <source src="/music.mp3" type="audio/mpeg" />
        Tarayıcınız audio elementini desteklemiyor.
      </audio>
      <AnimatePresence mode="wait">
        {chapter === 0 && (
          <StartPage key="mainpage">
            <Mainpage />
          </StartPage>
        )}
        {loading ? (
          <Loading key={"loading"} />
        ) : (
          chapter >= 1 && chapter <= 8 && getChapter(chapter)
        )}
      </AnimatePresence>
      <div
        className="soundContainer"
        onClick={() => {
          if (isMuted) setIsMuted(false);
          else setIsMuted(true);
        }}
      >
        <AnimatePresence mode="wait">
          {!isMuted ? (
            soundVolume === 1 ? (
              <motion.div
                key={"notMute"}
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.15 }}
              >
                <IoVolumeHigh />
              </motion.div>
            ) : soundVolume >= 0.5 ? (
              <motion.div
                key={"notMute"}
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.15 }}
              >
                <IoVolumeMedium />
              </motion.div>
            ) : (
              <motion.div
                key={"notMute"}
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.15 }}
              >
                <IoVolumeLow />
              </motion.div>
            )
          ) : (
            <motion.div
              key={"mute"}
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.15 }}
            >
              <IoVolumeOff />
            </motion.div>
          )}
          <div
            className="value-container"
            onClick={(event: any) => event.stopPropagation()}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`value ${
                  hoveredIndex && index <= hoveredIndex ? "hovered" : ""
                } ${index / 10 < soundVolume ? "active" : ""}`}
                onClick={() => setSoundVolume((index + 1) / 10)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              ></div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
