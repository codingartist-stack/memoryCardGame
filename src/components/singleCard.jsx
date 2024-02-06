
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
      <div className="back">
        <div className='pokeBtn'></div>
      </div>
      {/* <img src={pokeBall} alt="pokeBall" className="back" /> */}
    </div>
  );
}
