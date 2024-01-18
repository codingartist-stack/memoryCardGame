export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className={flipped ? 'flipped card' : 'card'} id={card.id}>
      <img src={card.url} alt={card.name} className="front" />
      <img
        src="./src/assets/img/coverPokeball.png"
        alt="pokeBall"
        className="back"
        onClick={handleClick}
      />
    </div>
  );
}
