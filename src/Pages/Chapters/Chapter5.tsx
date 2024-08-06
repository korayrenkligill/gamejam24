import Page from "../Page";
import { motion } from "framer-motion";

import { useSetAtom } from "jotai";
import { pageAtom } from "../../state/pageState";

import "../../styles/Chapters/Chapter5.scss";
import { useState } from "react";

const images2023: string[] = [
  "/images/2023Images/DF4B9EEC-1936-42E5-8C42-6F3EE8732903.JPG",
  "/images/2023Images/DSC01081.JPG",
  "/images/2023Images/DSC01083.JPG",
  "/images/2023Images/IMG_5839.jpg",
  "/images/2023Images/IMG_7230.JPEG",
];
const images2022: string[] = [];

type Props = {};

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

const Chapter5 = ({}: Props) => {
  const setChapter = useSetAtom(pageAtom);

  const [year, setYear] = useState(true);

  const nextChapter = () => {
    setChapter((oldChapter) => oldChapter + 1);
  };
  return (
    <Page>
      <button className="nextChapterButton" onClick={nextChapter}>
        Sonraki Bölüm..
      </button>
      <div className="bookmarks">
        <div
          className="bookmark"
          style={{
            backgroundImage: `url(/bookmark.png)`,
          }}
          onClick={() => setYear(true)}
        >
          <p className={year ? "active" : ""}>2023</p>
        </div>
        <div
          className="bookmark"
          style={{
            backgroundImage: `url(/bookmark.png)`,
          }}
          onClick={() => setYear(false)}
        >
          <p className={!year ? "active" : ""}>2022</p>
        </div>
      </div>
      <motion.div
        className="images"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {year
          ? images2023.map((image) => {
              let radiusOne = Math.floor(Math.random() * (255 - 200 + 1)) + 200;
              let radiusTwo = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
              let radiusThree =
                Math.floor(Math.random() * (255 - 200 + 1)) + 200;
              let radiusFour = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

              let radiusSide = Math.floor(Math.random() * 2);

              let borderRadius =
                radiusSide === 0
                  ? `${radiusTwo}px ${radiusOne}px ${radiusFour}px ${radiusThree}px / ${radiusThree}px ${radiusFour}px ${radiusOne}px ${radiusTwo}px`
                  : `${radiusOne}px ${radiusTwo}px ${radiusThree}px ${radiusFour}px / ${radiusFour}px ${radiusThree}px ${radiusTwo}px ${radiusOne}px`;

              return (
                <motion.div
                  className="image"
                  variants={item}
                  style={{
                    borderRadius: borderRadius,
                  }}
                >
                  <img
                    src={image}
                    alt="2023"
                    style={{
                      borderRadius: borderRadius,
                    }}
                  />
                  <p>Gamejam 2023</p>
                </motion.div>
              );
            })
          : images2022.map((image) => {
              let radiusOne = Math.floor(Math.random() * (255 - 200 + 1)) + 200;
              let radiusTwo = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
              let radiusThree =
                Math.floor(Math.random() * (255 - 200 + 1)) + 200;
              let radiusFour = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

              let radiusSide = Math.floor(Math.random() * 2);

              let borderRadius =
                radiusSide === 0
                  ? `${radiusTwo}px ${radiusOne}px ${radiusFour}px ${radiusThree}px / ${radiusThree}px ${radiusFour}px ${radiusOne}px ${radiusTwo}px`
                  : `${radiusOne}px ${radiusTwo}px ${radiusThree}px ${radiusFour}px / ${radiusFour}px ${radiusThree}px ${radiusTwo}px ${radiusOne}px`;

              return (
                <motion.div
                  className="image"
                  variants={item}
                  style={{
                    borderRadius: borderRadius,
                  }}
                >
                  <img
                    src={image}
                    alt="2023"
                    style={{
                      borderRadius: borderRadius,
                    }}
                  />
                  <p>Gamejam 2023</p>
                </motion.div>
              );
            })}
      </motion.div>
    </Page>
  );
};

export default Chapter5;
