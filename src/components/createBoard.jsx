export default function Board(props) {
  if (props.deck.length === 0) {
    return <h2>Click New Game to start</h2>;
  } else {
    return (
      <>
        {props.deck.map((card) => {
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
