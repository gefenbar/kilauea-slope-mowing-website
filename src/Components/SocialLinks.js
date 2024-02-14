import React from "react";
export default function SocialLinks({ isBackgroundGreen }) {
  return (
    <div className="social-links">
      <a
        href="mailto:Kilaueasolutions@gmail.com"
        className={`social-link ${isBackgroundGreen ? "white-outline" : ""}`}
      >
        <img src={"email.png"} alt="Email" />
      </a>
      <a
        href="tel:+19176932632"
        className={`social-link ${isBackgroundGreen ? "white-outline" : ""}`}
      >
        <img src={"phone.png"} alt="Phone" />
      </a>
      <a
        href="https://wa.me/19176932632"
        target="_blank"
        rel="noopener noreferrer"
        className={`social-link ${isBackgroundGreen ? "white-outline" : ""}`}
      >
        <img src={"whatsapp.png"} alt="WhatsApp" />
      </a>
    </div>
  );
}
