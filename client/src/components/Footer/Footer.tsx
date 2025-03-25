import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <p className="footer-text">
            &copy; 2025 <a href="/"><strong>LingoVerse</strong></a>. All rights reserved.
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
