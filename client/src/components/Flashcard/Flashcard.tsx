import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Flashcard.css";

function Flashcard({ front = "Hello", back = "مرحبًا", flipped=false }) {
  const [isFlipped, setIsFlipped] = useState(flipped);

  function handleClick() {
    setIsFlipped((prev) => !prev);
  }

  return (
    <div className="flash-card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card" onClick={handleClick}>
          {front}
        </div>

        <div className="card" onClick={handleClick}>
          {back}
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Flashcard;
