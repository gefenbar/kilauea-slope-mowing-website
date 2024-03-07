import React from "react";
export default function SocialLinks({ isBackgroundGreen }) {
  return (
    <div className="social-links">
      <a
        href="mailto:Kilaueasolutions@gmail.com"
        className={`social-link ${isBackgroundGreen ? "bright-outline" : ""}`}
      >
        <img src={"email.webp"} alt="Email" />
      </a>
      {/* <a
        href="tel:xxx"
        className={`social-link ${isBackgroundGreen ? "bright-outline" : ""}`}
      >
        <img src={"phone.webp"} alt="Phone" />
      </a>
      <a
        href="https://wa.me/xxx"
        target="_blank"
        rel="noopener noreferrer"
        className={`social-link ${isBackgroundGreen ? "bright-outline" : ""}`}
      >
        <img src={"whatsapp.webp"} alt="WhatsApp" />
      </a> */}
    </div>
  );
}
