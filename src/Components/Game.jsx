import React, { useState } from 'react';
import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/react';
import Players from './Player';
import TicTacToe from './TicTacToe';

const Game = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = (i) => {
    if (isGameOver || squares[i]) return;

    const squaresCopy = [...squares];
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(squaresCopy);
    if (winner) {
      setIsGameOver(true);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setIsGameOver(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleStartGame = (player1, player2) => {
    setPlayer1(player1);
    setPlayer2(player2);
    setIsOpen(false);
  };

  const winner = calculateWinner(squares);
  const currentPlayer = xIsNext ? player1 : player2;

  return (
    <Box textAlign="center" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Tic-Tac-Toe
      </Heading>
      <Button onClick={toggleColorMode} mb={4}>
        Toggle Theme
      </Button>
      <Players isOpen={isOpen} onClose={handleCloseModal} onStartGame={handleStartGame} />
      <TicTacToe
        squares={squares}
        onClick={handleClick}
        winner={winner}
        currentPlayer={currentPlayer}
        isGameOver={isGameOver}
        onReset={handleReset}
        theme={colorMode}
        player1={player1} 
        player2={player2}
      />
    
    </Box>
  );
};
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    if (squares.every((square) => square)) {
      return 'draw';
    }
  
    return null;
  }
  

export default Game;
