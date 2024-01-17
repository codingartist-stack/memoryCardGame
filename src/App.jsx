import { useEffect, useState } from 'react';
import './App.css';
import CreateBoard from './components/createBoard';

const testingDeck = [
  { id: 1, name: 'blue' },
  { id: 2, name: 'red' },
  { id: 3, name: 'yellow' },
];

const App = () => {
  const [deck, setDeck] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledDeck = [...testingDeck, ...testingDeck].sort(
      () => Math.random() - 0.5
    );
    console.log(shuffledDeck);

    setDeck(shuffledDeck);
    setTurns(0);
  };

  return (
    <>
      <h1>Memory Card Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <CreateBoard deck={deck} />
    </>
  );
};

export default App;
