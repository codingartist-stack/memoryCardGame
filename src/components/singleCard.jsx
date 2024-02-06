import { useState } from "react";
import useMousePosition from "../mouseTracking";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const [mouseToggle, setMouseToggle] = useState(false);
  const mousePosition = useMousePosition();

  const styleTrack = {
    transform: `rotate(${mousePosition.x}deg) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`
  }

  const restingStyle =  {
    transform: `rotate(0deg)`
  }

  const trackMouseEnterLeave = () => {
    setMouseToggle(!mouseToggle);
  }

  // const trackTouch = () => {
  //   console.log(mousePosition)
  // }

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
      onPointerEnter={trackMouseEnterLeave}
      onPointerLeave={trackMouseEnterLeave}
      style={mouseToggle ? styleTrack : restingStyle}
      // style={styleTrack}

    >
      <img src={card.url} alt={card.name} className="front" />
      <div className="back">
        <div className='pokeBtn'></div>
      </div>
      {/* <img src={pokeBall} alt="pokeBall" className="back" /> */}
    </div>
  );
}
