import "./Translation.css";
import LanguageTranslation from "../../components/LanguageTranslation/LanguageTranslation.tsx";
import CommonTranslations from "../../components/CommonTranslations/CommonTranslations.tsx";

function Translation() {
  return (
    <>
      <LanguageTranslation />
      <CommonTranslations />
    </>
  );
}

export default Translation;