import { useSetAtom } from "jotai";
import Parallax from "../components/Parallax";
import { musicStatusAtom, pageAtom } from "../state/pageState";

import "../styles/mainpage.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const Mainpage = (props: Props) => {
  const setChapter = useSetAtom(pageAtom);
  const setMusicStatus = useSetAtom(musicStatusAtom);

  const [menu, setMenu] = useState("main");

  return (
    <div className="mainpage">
      <AnimatePresence mode="wait">
        {menu === "main" && (
          <motion.div
            key={"main"}
            className="main-navigation"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
          >
            <Parallax className="start-button" strength={0.04}>
              <div
                className="nav-button"
                onClick={() => {
                  setChapter(1);
                  setMusicStatus(true);
                }}
              >
                Start
              </div>
            </Parallax>
            <Parallax strength={0.045}>
              <div className="nav-button" onClick={() => setMenu("extra")}>
                Fast Travel <span>{">"}</span>
              </div>
            </Parallax>
            {/* <Parallax strength={0.045}>
              <div className="nav-button">Mode</div>
            </Parallax> */}
            <Parallax className="exit-button" strength={0.055}>
              <div onClick={() => window.close()} className="nav-button">
                Exit
              </div>
            </Parallax>
          </motion.div>
        )}
        {menu === "extra" && (
          <motion.div
            key={"extra"}
            className="extra-navigation"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
          >
            <Parallax strength={0.05}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setChapter(1);
                  setMusicStatus(true);
                }}
              >
                <p>GameJam Nedir?</p>
                <span>( Bölüm 1 )</span>
              </div>
            </Parallax>
            <Parallax strength={0.05}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setChapter(2);
                  setMusicStatus(true);
                }}
              >
                <p>BBT Kimdir?</p>
                <span>( Bölüm 2 )</span>
              </div>
            </Parallax>
            <Parallax strength={0.055}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setChapter(3);
                  setMusicStatus(true);
                }}
                style={{
                  opacity: ".5",
                  pointerEvents: "none",
                }}
              >
                <p>Ödüller - Jüriler</p>
                <span>( Bölüm 3 )</span>
              </div>
            </Parallax>
            <Parallax strength={0.055}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setChapter(4);
                  setMusicStatus(true);
                }}
              >
                <p>Konum ve Zaman</p>
                <span>( Bölüm 4 )</span>
              </div>
            </Parallax>
            <Parallax strength={0.06}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setChapter(5);
                  setMusicStatus(true);
                }}
              >
                <p>Önceki GameJamlerden Fotoğraflar</p>
                <span>( Bölüm 5 )</span>
              </div>
            </Parallax>
            <Parallax strength={0.06}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setChapter(6);
                  setMusicStatus(true);
                }}
                style={{
                  opacity: ".5",
                  pointerEvents: "none",
                }}
              >
                <p>Etkinlik Programı - Yan Etkinlikler</p>
                <span>( Bölüm 6 )</span>
              </div>
            </Parallax>
            <Parallax strength={0.055}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setChapter(7);
                  setMusicStatus(true);
                }}
                style={{
                  opacity: ".5",
                  pointerEvents: "none",
                }}
              >
                <p>Sponsorlar</p>
                <span>( Bölüm 7 )</span>
              </div>
            </Parallax>
            <Parallax strength={0.06}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setChapter(8);
                  setMusicStatus(true);
                }}
              >
                <p>İletişim</p>
                <span>( Bölüm 8 )</span>
              </div>
            </Parallax>
            <Parallax strength={0.07}>
              <div
                className="extra-button nav-button"
                onClick={() => {
                  setMenu("main");
                }}
                style={{
                  transform: "translateX(50%)",
                }}
              >
                <p>Menu</p>
              </div>
            </Parallax>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mainpage;
