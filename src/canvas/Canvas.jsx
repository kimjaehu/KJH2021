import useCanvas from "./useCanvas";

const Canvas = (props) => {
  const canvasRef = useCanvas(null);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
