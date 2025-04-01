import Card from "../components/Card";
import "../css/Home.css";
import { useState } from "react";
import { useCardContext } from "../context/CardContext";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Reasons } from "../data/Reasons";

function Home() {
  const { setIsFlipped } = useCardContext();

  const startingIndex = Math.floor(Math.random() * Reasons.length);
  const [cardIndex, setCardIndex] = useState(startingIndex);
  const [prevIndex, setPrevIndex] = useState(startingIndex);

  function onLeftClicked() {
    setIsFlipped(false);
    setCardIndex(prevIndex);
  }

  function onRightClicked() {
    setIsFlipped(false);
    setCardIndex(Math.floor(Math.random() * Reasons.length));
    setPrevIndex(cardIndex);
  }

  return (
    <div className="home">
      <FaArrowAltCircleLeft className="arrow left" onClick={onLeftClicked} />
      <Card reason={Reasons[cardIndex]} />
      <FaArrowAltCircleRight className="arrow" onClick={onRightClicked} />
    </div>
  );
}

export default Home;
