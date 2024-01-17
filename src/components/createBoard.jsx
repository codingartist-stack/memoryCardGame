export default function CreateBoard(props) {
  if (props.deck.length === 0) {
    return <h2>Click New Game to start</h2>;
  } else {
    return (
      <main className="gameBoard">
        {props.deck.map((card) => {
          return (
            <div className="card" id={card.id} key={crypto.randomUUID()}>
              {card.name}
            </div>
          );
        })}
      </main>
    );
  }
}
