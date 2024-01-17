import { useState } from 'react';
import { useAsync } from 'react-use';

import './App.css';
import Board from './components/createBoard';

const App = () => {
  // const [deck, setDeck] = useState([]);
  const [turns, setTurns] = useState(0);

  const genOne = 151;
  const usedNumbers = new Set();

  const getRandomNumber = (generation) => {
    let number = Math.floor(Math.random() * 151) + 1;

    while (usedNumbers.has(number)) {
      number = Math.floor(Math.random() * 151) + 1;
    }

    usedNumbers.add(number);
    return number;
  };

  const {
    value: deck,
    loading,
    error,
  } = useAsync(async () => {
    // loop
    const deck = [];
    for (let i = 0; i < 5; i++) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${getRandomNumber(genOne)}/`
      );
      const pokemon = await response.json();

      const pokemonID = pokemon.id;
      const pokemonName = pokemon.name;
      const pokemonURL = pokemon.sprites.front_default;

      deck.push({ id: pokemonID, name: pokemonName, url: pokemonURL });
    }
    return deck;
  });

  // const shuffleCards = () => {
  //   const shuffledDeck = [...testingDeck, ...testingDeck].sort(
  //     () => Math.random() - 0.5
  //   );
  //   console.log(shuffledDeck);

  //   setTurns(0);
  // };

  // console.log(deck);

  return (
    <>
      <h1>Memory Card Game</h1>
      <button>New Game</button>
      <main className="gameBoard">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <Board deck={deck} />
        )}
      </main>
    </>
  );
};

export default App;
