import SingleCard from './singleCard';

export default function Board({ deck, handleChoice }) {
  if (deck.length === 0) {
    return <h2>Click New Game to start</h2>;
  } else {
    return (
      <>
        {deck.map((card) => {
          return (
            <SingleCard
              card={card}
              key={crypto.randomUUID()}
              handleChoice={handleChoice}
            />
          );
        })}
      </>
    );
  }
}
