import React, { useCallback, useEffect, useState } from "react";
import Dialogue from "../json/dialogue.json"; // JSON dosyasını içe aktar
import { motion } from "framer-motion";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import "../styles/Dialogue.scss";

type CharacterConversations = {
  [key: string]: string[];
};

interface DialogProps {
  character: string;
  changeState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dialog: React.FC<DialogProps> = ({ character, changeState }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // JSON verilerini karaktere göre al
  const conversations: string[] =
    (Dialogue as CharacterConversations)[character] || [];

  /*
  baştan sona atlanabilir fonksiyonlar

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % conversations.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + conversations.length) % conversations.length
    );
  };
   */

  const handleNext = () => {
    console.log(currentIndex == conversations.length - 1);
    if (currentIndex === conversations.length - 1) {
      changeState(false);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex < conversations.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }
      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNext, handlePrevious]);

  return (
    <motion.section
      className="dialogue"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="buttons">
        {currentIndex !== 0 ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="dialogue-prev"
            onClick={() => handlePrevious()}
          >
            <FaAngleLeft />
            Geri
          </motion.button>
        ) : (
          <span></span>
        )}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="dialogue-next"
          onClick={() => handleNext()}
        >
          İleri
          <FaAngleRight />
        </motion.button>
      </div>
      {conversations.length > 0 ? (
        <p>
          {conversations[currentIndex].split(" ").map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={el + i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
      ) : (
        <p>Karakter bulunamadı.</p>
      )}
    </motion.section>
  );
};

export default Dialog;
