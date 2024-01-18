export default function SingleCard({ card }) {
  return (
    <div className="card" id={card.id} key={crypto.randomUUID()}>
      <img src={card.url} alt={card.name} className="front" />
      <img
        src="./src/assets/img/coverPokeball.png"
        alt="pokeBall"
        className="back"
      />
    </div>
  );
}