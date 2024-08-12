import Page from "../Page";

import "../../styles/Chapters/Chapter2.scss";
import Parallax from "../../components/Parallax";
import { AnimatePresence, motion } from "framer-motion";
import Dialog from "../../components/Dialogue";
import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { pageAtom } from "../../state/pageState";

type Props = {};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Chapter2 = ({}: Props) => {
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
      {/* <button className="nextChapterButton" onClick={nextChapter}>
        Sonraki Bölüm..
      </button> */}
      <div className="about-jam">
        <motion.div
          className="about-jam-container"
          initial="hidden"
          animate="visible"
          variants={container}
          transition={{ duration: 0.1 }}
        >
          <motion.div variants={item}>
            <h1 className="title">GameJam Nedir?</h1>
            <p className="description">
              Game Jam, oyun geliştirme süreçlerini hızlandırarak katılımcıların
              48 saat içinde sıfırdan oyun geliştirmelerini amaçlayan
              etkinliklerdir. Katılımcılar, genellikle takımlar halinde çalışır
              ve kısıtlı zaman içinde yaratıcılıklarını kullanarak bir oyun
              tasarlar ve geliştirir.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <h1 className="title">Kimler katılabilir?</h1>
            <p className="description">
              Game Jam etkinliğimiz, oyun geliştirme dünyasına adım atmak
              isteyen herkes için harika bir fırsat! İster profesyonel bir oyun
              tasarımcısı olun, ister programlama ile yeni tanışmış bir amatör
              ya da sadece yaratıcı fikirlerinizle katkıda bulunmak isteyen biri
              olun, herkes bu heyecan verici etkinliklere katılabilir. Kendi
              ekibinizi kurabilir veya mevcut ekiplerle birleşebilirsiniz. Bu
              etkinlikler, yeni insanlarla tanışmak, harika projelere imza atmak
              ve eğlenceli bir şekilde yeteneklerinizi test etmek için mükemmel
              bir yerdir. Katılmak için kayıt olmayı unutmayın!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Page>
  );
};

export default Chapter2;
