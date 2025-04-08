import "./Home.css"
import Button from "../../components/Button/Button.tsx";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="home-container">
      <div className="home-flex-container">
        <h1>Lingo Verse</h1>
        <p>{t('app_description')}</p>

        <div className="home-row-container">
          <img className="home-image-container" src="/GIF.png" alt="GIF Showing translations" />
          <img className="home-image-container" src="/GIF.png" alt="GIF Showing translations" />
        </div>
        
        <div className="home-btn-container">
          <Button route="/translation">Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;