import Card from "../components/Card";
import "../css/Home.css";
import { useState } from "react";
import { useCardContext } from "../context/CardContext";
// import { FaArrowRightArrowLeft, FaArrowRightArrowRight } from "react-icons/fa6";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Home() {
  const { setIsFlipped } = useCardContext();

  const reasons = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
    "test11",
    "test12",
    "test13",
    "test14",
  ];

  const startingIndex = Math.floor(Math.random() * reasons.length);
  const [cardIndex, setCardIndex] = useState(startingIndex);
  const [prevIndex, setPrevIndex] = useState(startingIndex);

  function onLeftClicked() {
    setIsFlipped(false);
    setCardIndex(prevIndex);
  }

  function onRightClicked() {
    setIsFlipped(false);
    setCardIndex(Math.floor(Math.random() * reasons.length));
    setPrevIndex(cardIndex);
  }

  return (
    <div className="home">
      <FaArrowAltCircleLeft className="arrow left" onClick={onLeftClicked} />
      <Card reason={reasons[cardIndex]} />
      <FaArrowAltCircleRight className="arrow" onClick={onRightClicked} />
    </div>
  );
}

export default Home;
