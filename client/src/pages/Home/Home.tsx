import "./Home.css"
import Button from "../../components/Button/Button.tsx";
import { useTranslation } from 'react-i18next';
import { BsChatLeftDots } from 'react-icons/bs'
import { PiStudentFill } from 'react-icons/pi'
import { LuPaperclip } from 'react-icons/lu'

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="home-flex-container">
        <h1>Lingo Verse</h1>
        <p>{t('app_description')}</p>

        <div className="home-row-container">
          <div className="why-lingo-container">
            <h2 className="why-lingo-title">Why Lingo Verse?</h2>
            <div className="feature-subtitle">Lingo Verse is a translation and language learning app</div>
            <div className="why-lingo-features">
              <div className="feature-card">
              <div className="feature-icon"><BsChatLeftDots size={24} /></div>
                <div className="feature-title">Dialect-focused</div>
                <div className="feature-text">Built specifically for Lebanese Arabic.</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><PiStudentFill size={24} /></div>
                <div className="feature-title">Cultural nuance</div>
                <div className="feature-text">We explain context, not just words.</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><LuPaperclip size={24} /></div>
                <div className="feature-title">Modern tools</div>
                <div className="feature-text">Flashcards, pronunciation, and more.</div>
              </div>
            </div>
          </div>

          <img className="home-image-container" src="/demo.gif" alt="GIF Showing translations" />
        </div>
        
        <div className="home-btn-container">
          <Button route="/translation">Try the translator</Button>
          <Button route="/learning">Learn with FlashCards</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;