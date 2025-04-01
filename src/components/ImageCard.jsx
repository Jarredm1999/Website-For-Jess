import "../css/image-card.css";
import { useCardContext } from "../context/CardContext";

function ImageCard({ photo }) {
  const { isFlipped, setIsFlipped } = useCardContext();

  const toggleFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`photo-card ${isFlipped ? "flip" : ""}`} onClick={toggleFlipped}>
      <div className="front">
        <img src={photo.source}/>
      </div>
      <div className="back">
        <p className="desc-text">{photo.desc}</p>
      </div>
    </div>
  );
}

export default ImageCard;
