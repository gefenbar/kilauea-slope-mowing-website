import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const isMobile = window.innerWidth <= 768;

  const media = [
    { src: "mower_1.webp", mobileSrc: "mower_1_mobile.webp", isVideo: false },
    { src: "mower_1.mp4", isVideo: true },
    { src: "mower_2.webp", mobileSrc: "mower_2_mobile.webp", isVideo: false },
    { src: "mower_2.mp4", isVideo: true },
  ];

  useEffect(() => {
    const preloadedImages = media.map((item) => {
      const preloadMedia = (url) => {
        return new Promise((resolve) => {
          const mediaElement = item.isVideo ? document.createElement("video") : new Image();
          mediaElement.onload = () => {
            resolve();
          };
          mediaElement.src = url;
        });
      };
      return preloadMedia(isMobile ? item.mobileSrc : item.src);
    });

    Promise.all(preloadedImages).then(() => {
      setIsLoading(false); // Set loading to false once all media is preloaded
    });
  }, [isMobile, media]);

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
          {">"}
        </button>
        <div className="image-wrapper">
          {isLoading && <div className="loading-text">Loading...</div>}
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
