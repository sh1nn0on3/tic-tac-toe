import React, { useState } from 'react';
import "./App.scss"
import Header from './components/header/Header';
import Board from './components/board/Board';

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("x")

  const switchPlayer = () => {
    if (currentPlayer === 'x') {
      setCurrentPlayer('o')
    } else {
      setCurrentPlayer('x')
    }
  }

  return (
    <div className='app-container'>
      <Header currentPlayer={currentPlayer} />
      <Board currentPlayer = {currentPlayer}  switchPlayer={switchPlayer} />
    </div>
  );
};

export default App;