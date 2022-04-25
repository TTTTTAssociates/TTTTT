import { MouseEvent, useState } from "react";
import "./UnlickableButton.css"

type UnclickableButtonProps = {
  text: string;
};

const getNumberInBound = (
  original: number,
  bound: number,
  lowLimit: number,
  highLimit: number
): number => {
  const number =
    (Math.floor(Math.random() * bound) + 50) * (Math.random() < 0.5 ? -1 : 1);
  const newNumber = original + number;
  if (newNumber < lowLimit || newNumber > highLimit) {
    return original - number;
  }
  return newNumber;
};

export const UnlickableButton = (props: UnclickableButtonProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const runAway = () => {
    setButtonPosition({
      x: getNumberInBound(mousePosition.x, 50, 0, window.outerHeight),
      y: getNumberInBound(mousePosition.y, 50, 0, window.outerHeight),
    });
  };

  return (
    <div onMouseMove={handleMouseMove} className="UnclickableButton" style={{
      left: `${buttonPosition.x}px`,
      top: `${buttonPosition.y}px`,
    }}>
      <button
        onClick={runAway}
        onMouseOver={runAway}
      >
        {props.text}
      </button>
    </div>
  );
};
