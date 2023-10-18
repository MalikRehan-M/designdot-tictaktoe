import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const TicTacToe = ({
  squares,
  onClick,
  winner,
  currentPlayer,
  isGameOver,
  onReset,
  theme,
  player1,
  player2,
}) => {
  const isBoardFull = squares.every((square) => square !== null);
  const renderSquare = (i) => (
    <Button
      size="lg"
      fontSize="2xl"
      onClick={() => onClick(i)}
      border={"1px solid "}
      isDisabled={isGameOver || squares[i]}
      bgColor={theme === "light" ? "teal.200" : "teal.600"}
      color={theme === "light" ? "teal.600" : "teal.200"}
      _hover={{ bgColor: "teal.300" }}
    >
      {squares[i]}
    </Button>
  );

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      m={"auto"}
      alignItems="center"
      w={"30%"}
      border={"2px solid teal"}
      borderRadius={"12px"}
      padding={10}
    >
      <Box width="100%" textAlign="center" mt={4}>
        {winner === "draw" ? (
          <>
            <Text fontSize="lg" fontWeight="bold">
              It's a draw!
            </Text>
            <Button onClick={onReset} mt={2} colorScheme="teal">
              New Game
            </Button>
          </>
        ) : winner ? (
          <>
            <Text fontSize="lg" fontWeight="bold">
              {winner === "X" ? player1 : player2} wins!
            </Text>
            <Button onClick={onReset} mt={2} colorScheme="teal">
              New Game
            </Button>
          </>
        ) : (
          <Text fontSize="lg">Current player: {currentPlayer}</Text>
        )}
      </Box>
      {squares.map((square, i) => (
        <Box key={i} width="33.33%" p={2}>
          {renderSquare(i)}
        </Box>
      ))}
    </Box>
  );
};

export default TicTacToe;
