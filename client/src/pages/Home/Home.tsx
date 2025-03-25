import "./Home.css"
import Button from "../../components/Button/Button.tsx";

function Home() {
  return (
    <div className="home-container">
      <div className="home-flex-container">
        <h1>Lingo Verse</h1>
        <p>Lingo Verse is a translation and language learning app dedicated to various Arabic dialects. The beta app will offer translation services between Lebanese Arabic and English.</p>

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