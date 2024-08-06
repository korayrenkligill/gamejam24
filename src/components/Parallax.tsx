import React, { useState, useEffect, CSSProperties } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  strength?: number;
  strengthX?: number;
  strengthY?: number;
  style?: CSSProperties;
  className?: string;
}

const Parallax: React.FC<ParallaxProps> = ({
  children,
  strength = 0.1,
  strengthX,
  strengthY,
  style,
  className,
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setOffset({
        x: (clientX - window.innerWidth / 2) * (strengthX ?? strength),
        y: (clientY - window.innerHeight / 2) * (strengthY ?? strength),
      });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        const { clientX, clientY } = touch;
        setOffset({
          x: (clientX - window.innerWidth / 2) * (strengthX ?? strength),
          y: (clientY - window.innerHeight / 2) * (strengthY ?? strength),
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [strength, strengthX, strengthY]);

  const combinedStyle: CSSProperties = {
    ...style,
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: "transform 0.1s",
  };

  return (
    <div style={combinedStyle} className={className}>
      {children}
    </div>
  );
};

export default Parallax;
