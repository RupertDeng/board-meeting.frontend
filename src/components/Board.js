import {useRef} from 'react';

export const Board = (drawThickness, drawColor, drawStyle, eraserOn) => {

  const canvasRef = useRef(null);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );

};