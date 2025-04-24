import { useState, useEffect } from "react";
import Button from "../Button/Button.tsx";
import { GoArrowSwitch } from "react-icons/go";
import { useTranslation } from "react-i18next";
import "./LanguageTranslation.css";

function LanguageTranslation() {
  const { t } = useTranslation();
  const [fromLanguage, setFromLanguage] = useState('english');
  const [toLanguage, setToLanguage] = useState('arabic');

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [lastSavedText, setLastSavedText] = useState("");

  function swapLanguages() {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);

    const input = inputText;
    setInputText(outputText);
    setOutputText(input);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputText(e.target.value);
  }

  //Translates text
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      async function translateText() {
        const url = "http://127.0.0.1:8000/api/translate/";

        if (inputText.trim() === "") {
          setOutputText("");
          return;
        }

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: inputText,
              input_language: fromLanguage,
              target_language: toLanguage,
            }),
          });

          if (!response.ok) {
            throw new Error("Translation request failed");
          }

          const data = await response.json();
          console.log("Json Response: ", data);
          setOutputText(data.response);
        } catch (error) {
          console.log("Error: ", (error as Error).message);
        }
      }

      translateText();
    }, 600);

    const cleanup = () => {
      clearTimeout(timeoutId);
    };
    return cleanup;
  }, [inputText, fromLanguage, toLanguage]);



  //Saves translation to database
  useEffect(() => {
    if (
      fromLanguage.toLowerCase() === "english" &&
      inputText.trim() &&
      outputText.trim() &&
      inputText.trim().toLowerCase() !== lastSavedText
    ) {
      async function saveTranslation() {
        try {
          const url = "http://127.0.0.1:8000/api/translations/update/";

          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: inputText.trim().toLowerCase(),
              translated_text: outputText.trim(),
            }),
          });

          setLastSavedText(inputText.trim().toLowerCase());
        } catch (error) {
          console.error(
            "Failed to save last translation",
            (error as Error).message
          );
        }
      }

      saveTranslation();
    }
  }, [outputText]);

  return (
    <div className="LanguageTranslation-container">
      <div className="LanguageTranslation-title">Lingo Verse</div>

      <div className="LanguageTranslation-switcher">
        <p className="color">{t(fromLanguage)}</p>
        <Button mode="text" onClick={() => swapLanguages()}>
          {" "}
          <GoArrowSwitch size={20} className="switcher" />{" "}
        </Button>
        <p className="color">{t(toLanguage)}</p>
      </div>

      <div className="LanguageTranslation-textarea-container">
        <textarea
          className="LanguageTranslation-textarea"
          placeholder={`${t('type_in')} ${t(fromLanguage)}`}
          onChange={handleInputChange}
          value={inputText}
        />

        <textarea
          className="LanguageTranslation-textarea"
          placeholder={`${t(toLanguage)}...`}
          value={outputText}
          readOnly
        />
      </div>
    </div>
  );
}

export default LanguageTranslation;
