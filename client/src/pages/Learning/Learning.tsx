import "./Learning.css";
import CommonTranslations from "../../components/CommonTranslations/CommonTranslations.tsx";
import Flashcard from "../../components/Flashcard/Flashcard.tsx";
import Button from "../../components/Button/Button.tsx";
import { useEffect, useState } from "react";

function Translation() {
  type CommonTranslation = {
    id: number;
    text: string;
    translated_text: string;
    count: number;
  };

  const [commonTranslations, setCommontranslations] = useState<CommonTranslation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchCommonTranslations() {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/translations/");

        //If fetching did not return throw an excpetion
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setCommontranslations(data.response);
      } catch (err) {
        setError((err as Error).message);
        console.log(error);
        console.error(
          "Failed to fetch common translations:",
          (err as Error).message
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCommonTranslations();
  }, []);

  function handleNextCard() {
    setIndex((index + 1) % commonTranslations.length);
  }

  function handleLastCard() {
    if (index === 0) {
      return
    }
    setIndex((index - 1) % commonTranslations.length)
  }

  const currentCard = commonTranslations[index];

  if (currentCard === undefined) return null;
  if (loading) return <p>Loading flashcards...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!commonTranslations.length) return <p>No flashcards found.</p>;

  return (
    <>
      <CommonTranslations />

      <div className="flashcard-container">
        <h2>Flash Cards</h2>
        <Flashcard
          front={currentCard.text}
          back={currentCard.translated_text}
          flipped={false}
        />

        <div className="home-btn-container">
          <Button onClick={handleLastCard}>Go Back</Button>
          <Button onClick={handleNextCard}>Next card</Button>
        </div>
      </div>
    </>
  );
}

export default Translation;
