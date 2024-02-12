import React, { useState } from "react";

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth <= 768; // Assuming mobile breakpoint is 768px
  const images = ["mower_1.webp", "mower_1.mp4", "mower_2.webp", "mower_2.mp4"];

  // Conditional check to replace mower_1.webp with mower_1_mobile.webp on mobile devices
  const currentImage = isMobile && images[current] === "mower_1.webp"
    ? "mower_1_mobile.webp"
    : images[current];

  const handleNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div id="gallery-wrapper">
        <button onClick={handleNext} className="nav-button next-button">
          {">"}
        </button>
        <div>
          {current % 2 === 0 ? (
            <img
              src={currentImage}
              alt="slope mowing"
              className="gallery-image"
            />
          ) : (
            <video
              src={currentImage}
              alt="slope mowing"
              muted
              autoPlay
              loop
              className="gallery-image"
            />
          )}
        </div>
        <button onClick={handlePrev} className="nav-button prev-button">
          {"<"}
        </button>
      </div>
    </section>
  );
}
