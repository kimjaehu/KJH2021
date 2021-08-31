import { useState, useEffect } from "react";

import "../styles/mouse.css";

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({});
  const [pointerDivSize, setPointerDivSize] = useState();

  useEffect(() => {
    const pointerDiv = document.getElementsByClassName("mouse-pointer")[0];
    setPointerDivSize(pointerDiv.offsetWidth * 0.5);
    window.addEventListener("pointermove", handleOnMove);
    return () => window.removeEventListener("pointermove", handleOnMove);
  }, []);

  const handleOnMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const style = {
    transform: `translate(${mousePosition.x - pointerDivSize}px, ${
      mousePosition.y - pointerDivSize
    }px)`,
  };

  return (
    <div className="mouse-pointer" style={style}>
      {}
    </div>
  );
};

export default Mouse;
