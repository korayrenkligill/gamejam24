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
  const [dialogue, setDialogue] = useState(false);

  return (
    <Page>
      <div className="chapter-container" onClick={() => setDialogue(true)}>
        <img src="./images/okan.png" alt="okan" className="okan" />
        <p
          className="show-message"
          style={{
            color: "white",
            zIndex: 888,
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          Merhaba ziyaretçi
          <span>( Mesaj için Tıkla )</span>
        </p>
      </div>
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
      <AnimatePresence mode="wait">
        {dialogue && (
          <Dialog character="character1" changeState={setDialogue} />
        )}
      </AnimatePresence>
    </Page>
  );
};

export default Chapter1;
