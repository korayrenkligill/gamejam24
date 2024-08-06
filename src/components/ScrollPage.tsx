import React, { useEffect, useRef, useState } from "react";
import "../styles/Chapters/scrollPage.scss"; // CSS dosyanızın yolu

const ScrollComponent: React.FC = () => {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const calculateHeight = () => {
      const innerHeight = window.innerHeight;
      const nearestMultiple = Math.floor(innerHeight / 600) * 600;
      setHeight(nearestMultiple);
    };

    // Hesaplamayı başlat
    calculateHeight();

    // Pencere boyutu değiştiğinde hesaplamayı tekrar yap
    window.addEventListener("resize", calculateHeight);

    // Component unmount olduğunda event listener'ı kaldır
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <div className="scroll-container">
      <div
        className="scroll-content"
        ref={divRef}
        style={{ height: `${height}px` }}
      >
        <div
          className="img"
          style={{
            backgroundImage: "url(https://placehold.co/300x300)",
          }}
        ></div>
        <div
          className="img"
          style={{
            backgroundImage: "url(https://placehold.co/300x500)",
          }}
        ></div>
        <div
          className="img"
          style={{
            backgroundImage: "url(https://placehold.co/200x200)",
          }}
        ></div>
        <div
          className="img"
          style={{
            backgroundImage: "url(https://placehold.co/100x100)",
          }}
        ></div>
        {/* Aynı resimleri tekrar ekleyin */}
        <div
          className="img"
          style={{
            backgroundImage: "url(https://placehold.co/300x300/orange/white)",
          }}
        ></div>
        <div
          className="img"
          style={{
            backgroundImage: "url(https://placehold.co/300x500/orange/white)",
          }}
        ></div>
        <div
          className="img"
          style={{
            backgroundImage: "url(https://placehold.co/200x200/orange/white)",
          }}
        ></div>
        <div
          className="img"
          style={{
            backgroundImage: "url(https://placehold.co/100x100/orange/white)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollComponent;
