import "../css/Photos.css";
import { PhotoData } from "../data/PhotoData";
import ImageCard from "../components/ImageCard";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import { useCardContext } from "../context/CardContext";

function Photos() {
  const { setIsFlipped } = useCardContext();
  const startingIndex = Math.floor(Math.random() * PhotoData.length);
  const [cardIndex, setCardIndex] = useState(startingIndex);
  const [prevIndex, setPrevIndex] = useState(startingIndex);

  function onLeftClicked() {
    setIsFlipped(false);
    setCardIndex(prevIndex);
  }

  function onRightClicked() {
    setIsFlipped(false);
    setCardIndex(Math.floor(Math.random() * PhotoData.length));
    setPrevIndex(cardIndex);
  }

  return PhotoData.length > 0 ? (
    <div className="photos">
      <FaArrowAltCircleLeft className="arrow left" onClick={onLeftClicked} />
      <div className="photo">
        <ImageCard photo={PhotoData[cardIndex]} />
      </div>
      <FaArrowAltCircleRight className="arrow" onClick={onRightClicked} />
    </div>
  ) : (
    <div className="photos-empty">
      <h2>No Pictures Uploaded Yet</h2>
      <p>Soon this will contain all of the pictures of Jess and I together.</p>
    </div>
  );
}

export default Photos;
