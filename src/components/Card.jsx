import "../css/card.css";
import { useCardContext } from "../context/CardContext";

function Card({reason}) {
  const {isFlipped, setIsFlipped} = useCardContext();

  const toggleFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? "flip" : ""}`}
      onClick={toggleFlipped}
    >
      <div className="front">
        <h1>I Love Jess Because...</h1>
        <p>(Click To Reveal)</p>
      </div>
      <div className="back">
        <p>{reason}</p>
      </div>
    </div>
  );
}

export default Card;
