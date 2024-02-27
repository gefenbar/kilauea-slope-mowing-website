import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth <= 768;

  // Combine image and video data efficiently
  const media = [
    { src: "mower_1.webp", mobileSrc: "mower_1_mobile.webp", isVideo: false },
    { src: "mower_1.mp4", isVideo: true },
    { src: "mower_2.webp", mobileSrc: "mower_2_mobile.webp", isVideo: false },
    { src: "mower_2.mp4", isVideo: true },
  ];

  // Preload next and previous images/videos based on media type and mobile state
  const [preloaded, setPreloaded] = useState([]);

  useEffect(() => {
    const nextIndex = (current + 1) % media.length;
    const prevIndex = (current - 1 + media.length) % media.length;

    const nextMedia = isMobile ? media[nextIndex].mobileSrc : media[nextIndex].src;
    const prevMedia = isMobile ? media[prevIndex].mobileSrc : media[prevIndex].src;

    setPreloaded([
      { src: nextMedia, isVideo: media[nextIndex].isVideo },
      { src: prevMedia, isVideo: media[prevIndex].isVideo },
    ]);
  }, [current, isMobile]);

  const handleNext = () => {
    setCurrent((prevCurrent) => (prevCurrent === media.length - 1 ? 0 : prevCurrent + 1));
  };

  const handlePrev = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? media.length - 1 : prevCurrent - 1));
  };

  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div id="gallery-wrapper">
        <button onClick={handleNext} className="nav-button next-button">
          {" >"}
        </button>
        <div>
          {media[current].isVideo ? (
            <video
              src={media[current].src}
              alt="slope mowing, mowing video"
              muted
              autoPlay
              loop
              className="gallery-image"
            />
          ) : (
            <img
              src={isMobile ? media[current].mobileSrc : media[current].src}
              alt="slope mowing, mower image"
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
