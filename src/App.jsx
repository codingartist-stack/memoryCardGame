import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const GenOne = 151;
  const usedNumbers = new Set();

  const getRandomNumber = (generation) => {
    let randomNumber = Math.floor(Math.random() * generation) + 1;

    while (usedNumbers.has(randomNumber)) {
      randomNumber = Math.floor(Math.random() * generation) + 1;
    }
    usedNumbers.add(randomNumber);

    return randomNumber;
  };

  useEffect(() => {
    const fetchData = async () => {
      for (let i = 0; i < 5; i++) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${getRandomNumber(GenOne)}`,
          { mode: 'cors' }
        );

        const poke = await response.json();

        const pokemonID = poke.id;
        const pokemonName = poke.name;
        const pokemonURL = poke.sprites.front_default;

        setCards((currentCards) => {
          return [
            ...currentCards,
            { id: pokemonID, name: pokemonName, url: pokemonURL },
            { id: pokemonID, name: pokemonName, url: pokemonURL },
          ];
        });
      }
    };

    fetchData();
    console.log(cards);
  }, []);

  return (
    <>
      <h1>Memory Card Game</h1>

      <button>New Game</button>
    </>
  );
}

export default App;
