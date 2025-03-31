import { useState } from "react";
import "../css/card.css";

function Card({reason}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`card ${isFlipped ? "flip" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="front">
        <h1>Front</h1>
      </div>
      <div className="back">
        <h1>{reason}</h1>
      </div>
    </div>
  );
}

export default Card;
