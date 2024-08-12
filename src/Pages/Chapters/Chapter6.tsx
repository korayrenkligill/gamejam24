import Page from "../Page";

import "../../styles/Chapters/Chapter6.scss";
import { Carousel } from "@trendyol-js/react-carousel";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

type Props = {};

const Chapter6 = ({}: Props) => {
  return (
    <Page>
      <div className="events-content">
        <div className="event-schedule">
          Etkinlik programı yakında açıklanacak..
        </div>
        <div className="side-events">
          <Carousel
            show={1}
            slide={1}
            transition={0.5}
            rightArrow={
              <div className="arrow-right">
                <FaAngleRight />
              </div>
            }
            leftArrow={
              <div className="arrow-left">
                <FaAngleLeft />
              </div>
            }
            swiping
          >
            <div className="side-event" style={{ width: "300px" }}>
              <img src="/images/cosplayer.png" alt="" />
              <h2>Cos Play Yarışması</h2>
              <p>00:00 - 00:00</p>
              <span>0/0/2024</span>
            </div>
            <div className="side-event" style={{ width: "300px" }}>
              <img src="/images/dice.png" alt="" />
              <h2>Masa Oyunu Yarışması</h2>
              <p>00:00 - 00:00</p>
              <span>0/0/2024</span>
            </div>
            <div className="side-event" style={{ width: "300px" }}>
              <img src="/images/joystick.png" alt="" />
              <h2>E-spor Yarışması</h2>
              <p>00:00 - 00:00</p>
              <span>0/0/2024</span>
            </div>
          </Carousel>
        </div>
      </div>
    </Page>
  );
};

export default Chapter6;
