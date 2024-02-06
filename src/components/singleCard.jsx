// import pokeBall from './../assets/img/coverPokeball.png';
import { useState } from "react";
import useMousePosition from "../mouseTracking";


export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const mousePosition = useMousePosition();
  const [hover, setHover] = useState(false)
  // const [cardStyle, setCardStyle] = useState(`transform: rotate(${mousePosition.x}deg) rotateY(${mousePosition.x}deg) rotateX(${-1 * mousePosition.y}deg) perspective(23rem)`);

  const toggleHover = () => {
    setHover(!hover);
  }



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
      style={{transform: `rotate(${mousePosition.x}deg) rotateY(${mousePosition.x}deg) rotateX(${-1 * mousePosition.y}deg) perspective(23rem)`}}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      // style={{cardStyle}}
    >
      <img src={card.url} alt={card.name} className="front" />
      <div className="back">
        <div className='pokeBtn'></div>
      </div>
      {/* <img src={pokeBall} alt="pokeBall" className="back" /> */}
    </div>
  );
}
