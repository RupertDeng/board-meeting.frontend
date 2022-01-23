import {useRef} from 'react';

export const Board = (socket, boardWidth, boardHeight, lineColor, lineWidth, lineStyle) => {

  const canvasRef = useRef(null);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );

};