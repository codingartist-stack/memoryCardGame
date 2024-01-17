import { useEffect, useState } from 'react';
import './App.css';
import CreateBoard from './components/createBoard';

const App = () => {
  const [deck, setDeck] = useState(['blue', 'red', 'yellow']);
  const [turns, setTurns] = useState(0);

  return (
    <>
      <h1>Memory Card Game</h1>
      <button>New Game</button>
      <CreateBoard deck={deck} />
    </>
  );
};

export default App;
