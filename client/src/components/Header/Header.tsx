import "./Header.css";
import Button from "../Button/Button.tsx";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <a href="/"><img src="/vite.svg" alt="LingoVerse Logo" /></a>
        <a href="/"><h3 className="logo-text">Lingo Verse</h3></a>
      </div>

      <nav className="nav-buttons">
        <Button route="translation" mode="text">Translations</Button>
        <Button mode="text">Arabic</Button>
      </nav>
    </header>
  );
}

export default Header;
