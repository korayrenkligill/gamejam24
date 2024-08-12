import Page from "../Page";
import { motion } from "framer-motion";

import { useSetAtom } from "jotai";
import { pageAtom } from "../../state/pageState";

import "../../styles/Chapters/Chapter5.scss";
import { useState } from "react";

const images2023: string[] = [
  "/images/2023Images/DF4B9EEC-1936-42E5-8C42-6F3EE8732903.webp",
  "/images/2023Images/DSC01081.webp",
  "/images/2023Images/DSC01083.webp",
  "/images/2023Images/IMG_5839.webp",
  "/images/2023Images/IMG_7230.webp",
];
const images2022: string[] = [
  "/images/2022Images/IMG_4418.webp",
  "/images/2022Images/IMG_4686.webp",
  "/images/2022Images/IMG_4719.webp",
  "/images/2022Images/IMG_4902.webp",
  "/images/2022Images/IMG_5057.webp",
  "/images/2022Images/IMG_5482.webp",
  "/images/2022Images/IMG_5839.webp",
];

const text2022 = (
  <>
    2022 GameJam Kütahya etkinliğinde, Kütahya Dumlupınar Üniversitesi
    Bedesten'de 13-15 Mayıs tarihleri arasında 48 saatlik bir oyun yapma kampı
    düzenlendi. Etkinlik boyunca toplamda 16 dijital oyun ve 4 kağıt oyunu
    geliştirildi. <br />
    Etkinlik 13 Mayıs 2022 saat 17.00'de başlayıp 15 Mayıs saat 17.00'de sona
    erdi.
  </>
);

const text2023 = (
  <>
    2023 GameJam Kütahya etkinliğinde, 6-8 Ekim tarihleri arasında Bilgisayar ve
    Bilişim Topluluğu tarafından düzenlenen bir oyun geliştirme etkinliğiydi. Bu
    yıl ikinci kez gerçekleştirilen etkinlikte, 20 dijital oyun takımı, 4 masa
    oyunu takımı ve 10 kişilik cosplay yarışması ile toplamda 150'den fazla
    katılımcı yer aldı. <br />
    Etkinlik boyunca çeşitli çekilişler, turnuvalar ve eğlenceler düzenlendi.
  </>
);

type Props = {};

const container = {
  hidden: {},
  visible: {
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

const Chapter5 = ({}: Props) => {
  const [year, setYear] = useState(true);

  return (
    <Page>
      <div className="content">
        <div className="buttons">
          <button
            className={!year ? "active" : "deactive"}
            onClick={() => setYear(false)}
          >
            2022
          </button>
          <button
            className={year ? "active" : "deactive"}
            onClick={() => setYear(true)}
          >
            2023
          </button>
        </div>
        <motion.div className="texts">{year ? text2023 : text2022}</motion.div>
        <motion.div
          className="images"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {year
            ? images2023.map((image) => {
                let radiusOne =
                  Math.floor(Math.random() * (255 - 200 + 1)) + 200;
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
                      loading="lazy"
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
                let radiusOne =
                  Math.floor(Math.random() * (255 - 200 + 1)) + 200;
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
      </div>
      {/* </div> */}
    </Page>
  );
};

export default Chapter5;
