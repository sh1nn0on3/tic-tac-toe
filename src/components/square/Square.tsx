import React from "react";
import "./square.scss";

interface IProps {
  handleOnClick: () => void;
  selected: string;
}

const Square: React.FC<IProps> = (props) => {
  const imageSrc = `./images/${props.selected ? props.selected : "square"}.png`;
  return (
    <div className="square">
      <button onClick={props.handleOnClick}>
        <img src={imageSrc} alt="square_image" />
      </button>
    </div>
  );
};

export default Square;
