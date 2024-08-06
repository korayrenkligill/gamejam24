import Page from "../Page";

import "../../styles/Chapters/Chapter1.scss";
import Parallax from "../../components/Parallax";
import { AnimatePresence, motion } from "framer-motion";
import Dialog from "../../components/Dialogue";
import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { pageAtom } from "../../state/pageState";

type Props = {};

const Chapter1 = ({}: Props) => {
  const setChapter = useSetAtom(pageAtom);

  const [nextChapterButton, setNextChapterButton] = useState(false);
  const [dialogue, setDialogue] = useState(false);
  const prevMyState = useRef(dialogue);

  const nextChapter = () => {
    setChapter((oldChapter) => oldChapter + 1);
  };

  useEffect(() => {
    if (prevMyState.current === true && dialogue === false) {
      setNextChapterButton(true);
    }
    prevMyState.current = dialogue;
  }, [dialogue]);
  return (
    <Page>
      <div className="chapter-container" onClick={() => setDialogue(true)}>
        {nextChapterButton && (
          <button className="nextChapterButton" onClick={nextChapter}>
            Sonraki Bölüm..
          </button>
        )}

        <p
          style={{
            color: "white",
            zIndex: 888,
            textAlign: "center",
            fontSize: ".875rem",
          }}
        >
          Mesaj için Tıkla
        </p>
        <Parallax className="mainTree bg" strengthX={0.3} strengthY={0.15}>
          <div></div>
        </Parallax>
        <Parallax className="stone bg" strengthX={0.2} strengthY={0.075}>
          <div></div>
        </Parallax>
        <Parallax className="backTree1 bg" strengthX={0.05} strengthY={0.025}>
          <div></div>
        </Parallax>
        <Parallax className="backTree2 bg" strengthX={0.05} strengthY={0.025}>
          <div></div>
        </Parallax>
        <div onClick={(event) => event.stopPropagation()}>
          <AnimatePresence mode="wait">
            {dialogue && (
              <Dialog character="character1" changeState={setDialogue} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </Page>
  );
};

export default Chapter1;
