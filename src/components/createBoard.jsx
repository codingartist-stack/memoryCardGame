export default function Board({ deck }) {
  if (deck.length === 0) {
    return <h2>Click New Game to start</h2>;
  } else {
    return (
      <>
        {deck.map((card) => {
          return (
            <div className="card" id={card.id} key={crypto.randomUUID()}>
              <img src={card.url} alt={card.name} />
            </div>
          );
        })}
      </>
    );
  }
}
