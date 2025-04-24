import "./Header.css";
import Button from "../Button/Button.tsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { WiMoonWaningCrescent3 } from "react-icons/wi";

function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const displayLanguage = language === "en" ? "عربي" : "English";

  return (
    <header>
      <div className="logo-container">
        <a href="/">
          {/* <img src="/vite.svg" alt="LingoVerse Logo" /> */}
          <WiMoonWaningCrescent3 size={35} className="logo-styles" />
        </a>
        <a href="/">
          <h3 className="logo-text">Lingo Verse</h3>
        </a>
      </div>

      <nav className="nav-buttons">
        <Button
          route="translation"
          mode="text"
          extraCssClass="header-button underline"
        >
          {t("header_translate_button")}
        </Button>
        <Button
          route="learning"
          mode="text"
          extraCssClass="header-button underline"
        >
          {t("header_learning_button")}
        </Button>
        <Button
          onClick={handleChangeLanguage}
          mode="text"
          extraCssClass="header-button2"
        >
          {displayLanguage}
        </Button>
      </nav>
    </header>
  );
}

export default Header;
