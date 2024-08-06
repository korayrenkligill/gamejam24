import "../../styles/Chapters/Chapter8.scss";
import { useSetAtom } from "jotai";
import { pageAtom } from "../../state/pageState";
import Page from "../Page";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Parallax from "../../components/Parallax";

type Props = {};

const Chapter8 = ({}: Props) => {
  const setChapter = useSetAtom(pageAtom);
  const nextChapter = () => {
    setChapter((oldChapter) => 0);
  };
  return (
    <Page>
      <button className="nextChapterButton" onClick={nextChapter}>
        Back to Menu
      </button>
      <div className="contacts">
        <Parallax strength={0.01}>
          <div className="contact">
            <FaPhone /> <span>0212 123 45 67</span>
          </div>
        </Parallax>
        <Parallax strength={0.015}>
          <div className="contact">
            <IoMdMail /> <span>asdf@info.com</span>
          </div>
        </Parallax>
        <Parallax strength={0.02}>
          <div className="contact">
            <AiFillInstagram /> <span>@dpubbt</span>
          </div>
        </Parallax>
      </div>
    </Page>
  );
};

export default Chapter8;
