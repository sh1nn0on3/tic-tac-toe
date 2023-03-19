import React, { useState } from 'react';
import "./App.scss"
import Header from './components/header/Header';
import Board from './components/board/Board';

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("X")
  return (
    <div className='app-container'>
      <Header currentPlayer={currentPlayer} />
      <Board currentPlayer = {currentPlayer} />
    </div>
  );
};

export default App;