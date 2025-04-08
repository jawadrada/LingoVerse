import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t, i18n } = useTranslation();

  return (
    <footer>
        <p className="footer-text">
            &copy; 2025 <a href="/"><strong>LingoVerse</strong></a>. {t("footer_text")}
        </p>
        <div className="footer-icons">
            <a href="/">
                <FaGithub />
            </a>
            <a href="/">
                <FaLinkedin />
            </a>
            <a href="/">
                <FaTwitter />
            </a>
        </div>
    </footer>
  );
}

export default Footer;
