import Page from "../Page";

import "../../styles/Chapters/Chapter4.scss";
import { useSetAtom } from "jotai";
import { pageAtom } from "../../state/pageState";
import Countdown from "../../components/CountDown";

type Props = {};

const Chapter4 = ({}: Props) => {
  const setChapter = useSetAtom(pageAtom);
  const nextChapter = () => {
    setChapter((oldChapter) => oldChapter + 1);
  };
  return (
    <Page>
      <button className="nextChapterButton" onClick={nextChapter}>
        Sonraki Bölüm..
      </button>

      <Countdown />

      <div className="map">
        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6159.377555561073!2d29.9010135!3d39.4763591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c946c3b418c2d5%3A0xe7144293d6751ce6!2zRFDDnCBTYcSfbMSxayBLw7xsdMO8ciB2ZSBTcG9yIERhaXJlIEJhxZ9rYW5sxLHEn8Sx!5e0!3m2!1str!2str!4v1722684764127!5m2!1str!2str"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Page>
  );
};

export default Chapter4;
