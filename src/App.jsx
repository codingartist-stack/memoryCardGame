import { useState, useEffect, setValue } from 'react';
import { useEffectOnce } from 'react-use';

import './App.css';
import Board from './components/createBoard';

const App = () => {
  const [deck, setDeck] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const genOne = 151;
  const usedNumbers = new Set();

  const getRandomNumber = (generation) => {
    let number = Math.floor(Math.random() * generation) + 1;

    while (usedNumbers.has(number)) {
      number = Math.floor(Math.random() * generation) + 1;
    }

    usedNumbers.add(number);
    return number;
  };

  //get pokemon
  useEffectOnce(() => {
    const getPokemonCards = async () => {
      // loop
      let deck = [];
      for (let i = 0; i < 6; i++) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${getRandomNumber(genOne)}/`
        );
        const pokemon = await response.json();

        const pokemonID = pokemon.id;
        const pokemonName = pokemon.name;
        const pokemonURL = pokemon.sprites.front_default;

        deck.push(
          { id: pokemonID, name: pokemonName, url: pokemonURL },
          { id: pokemonID, name: pokemonName, url: pokemonURL }
        );
      }
      deck = [...deck.sort(() => Math.random() - 0.5)];
      setDeck(deck);
    };
    getPokemonCards();
  });

  //shuffleCards
  const shuffleCards = () => {
    setTurns(0);
    setDeck((currentDeck) => {
      currentDeck = [...currentDeck.sort(() => Math.random() - 0.5)];
      return currentDeck;
    });
  };

  //handle choice

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <>
      <h1>Memory Card Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <main className="gameBoard">
        <Board deck={deck} handleChoice={handleChoice} />
      </main>
    </>
  );
};

export default App;
