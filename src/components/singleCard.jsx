export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div
      className={flipped ? 'flipped card' : 'card'}
      id={card.id}
      onClick={handleClick}
    >
      <img src={card.url} alt={card.name} className="front" />
      <img
        src="./src/assets/img/coverPokeball.png"
        alt="pokeBall"
        className="back"
      />
    </div>
  );
}
