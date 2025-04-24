import "./Home.css";
import Button from "../../components/Button/Button.tsx";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="home-flex-container">
        <h1>Arabic Dialect Translations</h1>
        <p>
          {t("app_description")}
        </p>

        <div className="home-row-container">
          <div className="home-image-card">
            <img
              className="home-image-container"
              src="/demo.gif"
              alt="GIF Showing translations"
            />
          </div>
        </div>

        <div className="home-btn-container">
          <Button route="/translation">
            {t("home_page_button")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
