// PlayerModal.js
import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input } from '@chakra-ui/react';

const Players = ({ isOpen, onClose, onStartGame }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleStartGame = () => {
    if (player1.trim() !== '' && player2.trim() !== '') {
      onStartGame(player1, player2);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Player Names</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Player 1" value={player1} onChange={(e) => setPlayer1(e.target.value)} />
          <Input placeholder="Player 2" value={player2} onChange={(e) => setPlayer2(e.target.value)} />
          <Button onClick={handleStartGame}>Start</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Players;
