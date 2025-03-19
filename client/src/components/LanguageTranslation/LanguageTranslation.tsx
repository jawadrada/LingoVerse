import { useState } from "react";
import "./LanguageTranslation.css";
import Button from "../Button/Button.tsx";
import { GoArrowSwitch } from "react-icons/go";

function LanguageTranslation() {
  const [fromLanguage, setFromLanguage] = useState("Arabic");
  const [toLanguage, setToLanguage] = useState("English");

  function swapLanguages() {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  }

  return (
    <div className="LanguageTranslation-container">
      <div className="LanguageTranslation-title">
        Lingo Verse
      </div>

      <div className="LanguageTranslation-switcher">
        <p className="color">{fromLanguage}</p>
        <Button mode="text" onClick={() => swapLanguages()}> <GoArrowSwitch size={20} /> </Button>
        <p className="color">{toLanguage}</p>
      </div>

    <div className="LanguageTranslation-textarea-container">
      <textarea 
          className="LanguageTranslation-textarea" 
          placeholder={`Type in ${fromLanguage}`} 
        />

      <textarea 
          className="LanguageTranslation-textarea" 
          placeholder={`${toLanguage}...`} 
        />
    </div>

    </div>
  );
}

export default LanguageTranslation;
