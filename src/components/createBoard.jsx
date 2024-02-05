import SingleCard from './singleCard';

export default function Board({
  deck,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
}) {
  if (deck.length === 0) {
    return <h2>...Loading Deck...</h2>;
  } else {
    return (
      <>
        {deck.map((card) => {
          return (
            <SingleCard
              card={card}
              key={crypto.randomUUID()}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          );
        })}
      </>
    );
  }
}
