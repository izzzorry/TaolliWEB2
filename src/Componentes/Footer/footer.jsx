import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Diseño y desarrollo Web: Isabel Cristina Zorrilla M</p>
          <p>Asistencia de IA: ChatGPT de OpenAI</p>
        </div>
        <div className="footer-image">
          <img
            src="https://res.cloudinary.com/dj9nrp8r8/image/upload/v1743082937/tm7oqun7zwvjgfcxkzsf.png"
            alt="Logo de la Alianza"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
