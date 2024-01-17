export default function CreateBoard(props) {
  if (props.deck.length === 0) {
    return;
  } else {
    <main className="gameBoard">
      {props.deck.map((card) => {
        return (
          <div className="card" key={props.deck.indexOf(card)}>
            Hello
          </div>
        );
      })}
    </main>;
  }
}
