import Page from "../Page";

import "../../styles/Chapters/Chapter3.scss";

import { motion } from "framer-motion";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { pageAtom } from "../../state/pageState";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

type Props = {};

const Chapter3 = ({}: Props) => {
  const setChapter = useSetAtom(pageAtom);
  const [fillPercentage, setFillPercentage] = useState(50);
  const nextChapter = () => {
    setChapter((oldChapter) => oldChapter + 1);
  };

  return (
    <Page>
      <button className="nextChapterButton" onClick={nextChapter}>
        Sonraki Bölüm..
      </button>
      <div className="container">
        <motion.div
          className="awards"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="cup1 award" variants={item}>
            <img src="/images/cups/cup1.png" alt="" />
            <p>
              Ödül birinci <span>₺</span>
            </p>
          </motion.div>
          <motion.div className="cup2 award" variants={item}>
            <img src="/images/cups/cup2.png" alt="" />
            <p>
              Ödül ikinci <span>₺</span>
            </p>
          </motion.div>
          <motion.div className="cup3 award" variants={item}>
            <img src="/images/cups/cup3.png" alt="" />
            <p>
              Ödül üçüncü <span>₺</span>
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="juries"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="jury">
            <img
              src="https://randomuser.me/api/portraits/men/76.jpg"
              alt="juri 1"
            />
            <div className="information">
              <p>Selim Serez</p>
              <span>Game Designer</span>
            </div>
          </div>
          <div className="jury">
            <img
              src="https://randomuser.me/api/portraits/women/72.jpg"
              alt="juri 1"
            />
            <div className="information">
              <p>Ender Serez</p>
              <span>Game Designer</span>
            </div>
          </div>
          <div className="jury">
            <img
              src="https://randomuser.me/api/portraits/men/72.jpg"
              alt="juri 1"
            />
            <div className="information">
              <p>Mert Asım Serez</p>
              <span>Game Designer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Page>
  );
};

export default Chapter3;
