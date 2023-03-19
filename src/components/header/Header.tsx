import React from "react";
import "./header.scss"

interface IProps {
  currentPlayer: string;
}

const Header: React.FC<IProps> = (props) => {
//   console.log("🚀 ~ file: header.tsx:8 ~ props:", props);
  return (
    <div className="score-container">
      <div className="score">
        <span>Next Player : </span> {props.currentPlayer}
      </div>
      <button onClick={() => window.location.reload()}>RESTART</button>
    </div>
  );
};

export default Header;
