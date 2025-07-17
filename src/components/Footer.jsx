import React from "react";
import "./styling/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://linkedin.com/in/ansh-gandhi04"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ansh-Gandhi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:anshgandhi@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Ansh Gandhi</p>
    </footer>
  );
}

export default Footer;
