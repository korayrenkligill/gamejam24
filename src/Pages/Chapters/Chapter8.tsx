import "../../styles/Chapters/Chapter8.scss";
import Page from "../Page";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Parallax from "../../components/Parallax";

type Props = {};

const Chapter8 = ({}: Props) => {
  return (
    <Page>
      <div className="contacts">
        <Parallax strength={0.01}>
          <a href="tel:+90 546 801 67 13" className="contact">
            <FaPhone /> <span>+90 546 801 67 13</span>
          </a>
        </Parallax>
        <Parallax strength={0.015}>
          <a href="mailto:dpubilgisayarvebilisim@gmail.com" className="contact">
            <IoMdMail /> <span>dpubilgisayarvebilisim@gmail.com</span>
          </a>
        </Parallax>
        <Parallax strength={0.02}>
          <a href="https://www.instagram.com/dpubbt/" className="contact">
            <AiFillInstagram /> <span>@dpubbt</span>
          </a>
        </Parallax>
      </div>
    </Page>
  );
};

export default Chapter8;
