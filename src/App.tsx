import Mainpage from "./Pages/Mainpage";
import { useAtom, useAtomValue } from "jotai";
import { musicStatusAtom, pageAtom, isMutedAtom } from "./state/pageState";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
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
import { useLocation, useNavigate } from "react-router-dom";

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
      {Loadings[chapter - 1] && (
        <div className="loading-container">
          <h2>{Loadings[chapter - 1].title ?? ""}</h2>
          <p>{Loadings[chapter - 1].description ?? ""}</p>
        </div>
      )}
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const chapterParam = queryParams.get("chapter");
  const chapter = chapterParam ? parseInt(chapterParam, 10) : NaN; // chapter parametresini sayıya çevir
  const isValidChapter = !isNaN(chapter) && chapter >= 0 && chapter <= 8;
  const navigate = useNavigate();

  const audioRef = useRef<HTMLAudioElement>(null);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Örnek objeler

  const [chapterState, setChapterState] = useAtom<number>(pageAtom);
  const [isMuted, setIsMuted] = useAtom(isMutedAtom);
  const musicStatus = useAtomValue(musicStatusAtom);

  const [loading, setLoading] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
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

  const nextChapter = () => {
    setChapterState((oldChapter) => oldChapter + 1);
  };
  const mainChapter = () => {
    setChapterState((oldChapter) => 0);
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
    if (chapterState === 3) {
      setChapterState(4);
    }
    if (chapterState === 7 || chapterState > 8) {
      setChapterState(8);
    }
    navigate("/?chapter=" + chapterState, { replace: true });
    if (chapterState !== 0) {
      setLoading(true);
      setLoadingAnimation(true);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setLoadingAnimation(false);
        }, 500);
      }, 2000);
    }
  }, [chapterState]);

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

  useEffect(() => {
    if (isValidChapter) {
      setChapterState(chapter);
    }
  }, []);

  return (
    <div className="App">
      <audio ref={audioRef} loop autoPlay>
        <source src="/music.mp3" type="audio/mpeg" />
        Tarayıcınız audio elementini desteklemiyor.
      </audio>

      {/*next page*/}
      <div className="next-container" style={{ height: "10vh" }}>
        <AnimatePresence mode="wait">
          {!loadingAnimation && chapterState !== 0 && (
            <motion.button
              key={"button"}
              initial={{ y: "-10vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-10vh" }}
              className="nextChapterButton"
              onClick={chapterState === 8 ? mainChapter : nextChapter}
            >
              {chapterState === 8 ? "Menüye Dön.." : "Sonraki Bölüm.."}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      {/*mainpage,loading or page*/}
      <AnimatePresence mode="wait">
        {chapterState === 0 && (
          <StartPage key="mainpage">
            <Mainpage />
          </StartPage>
        )}
        {loading ? (
          <Loading key={"loading"} />
        ) : (
          chapterState >= 1 && chapterState <= 8 && getChapter(chapterState)
        )}
      </AnimatePresence>
      {/*prev page*/}
      <div className="buttons-container" style={{ height: "10vh" }}>
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
            {!isMuted && (
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
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          {!loadingAnimation && (
            <motion.button
              className="back-menu-container"
              key={"home-button"}
              initial={{ x: "calc(-2rem - 50px)" }}
              animate={{ x: 0 }}
              exit={{ x: "calc(-2rem - 50px)" }}
              onClick={mainChapter}
            >
              <FaHome />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
