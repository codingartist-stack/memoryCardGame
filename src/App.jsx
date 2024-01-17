import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const GenOne = 151;
  const randomNumber = (generation) => {
    return Math.floor(Math.random() * generation);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber(GenOne)}`
      );

      result.json().then((json) => {
        console.log(json);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Memory Card Game</h1>

      <button>New Game</button>
    </>
  );
}

export default App;
