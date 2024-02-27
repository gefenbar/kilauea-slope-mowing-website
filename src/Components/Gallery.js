import React, { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false); // State to track the loading status
  const isMobile = window.innerWidth <= 768;
  // Combine image and video data efficiently
  const media = [
    { src: "mower_1.webp", mobileSrc: "mower_1_mobile.webp", isVideo: false },
    { src: "mower_1.mp4", isVideo: true },
    { src: "mower_2.webp", mobileSrc: "mower_2_mobile.webp", isVideo: false },
    { src: "mower_2.mp4", isVideo: true },
  ];

  // Use a ref to store the current media element
  const mediaRef = useRef(null);

  // Preload next and previous images/videos based on media type and mobile state
  useEffect(() => {
    const nextIndex = (current + 1) % media.length;
    const prevIndex = (current - 1 + media.length) % media.length;
    const nextMedia = isMobile ? media[nextIndex].mobileSrc : media[nextIndex].src;
    const prevMedia = isMobile ? media[prevIndex].mobileSrc : media[prevIndex].src;
    const preloadImage = (url) => {
      if (url) {
        const img = new Image();
        img.src = url;
      }
    };
    preloadImage(nextMedia);
    preloadImage(prevMedia);
  }, [current, isMobile, media]);

  // Add event listeners to the media element to handle the loading and loaded events
  useEffect(() => {
    const mediaElement = mediaRef.current;
    if (mediaElement) {
      const handleLoading = () => {
        setLoading(true); // Set the loading state to true when the media is loading
      };
      const handleLoaded = () => {
        setLoading(false); // Set the loading state to false when the media is loaded
      };
      mediaElement.addEventListener("loadstart", handleLoading);
      mediaElement.addEventListener("loadeddata", handleLoaded);
      return () => {
        // Remove the event listeners when the component unmounts
        mediaElement.removeEventListener("loadstart", handleLoading);
        mediaElement.removeEventListener("loadeddata", handleLoaded);
      };
    }
  }, [mediaRef]);

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
        <div className="media-container">
          {loading && <div className="spinner"></div>} 
          {media[current].isVideo ? (
            <video
              src={media[current].src}
              alt="slope mowing, mowing video"
              muted
              autoPlay
              loop
              className="gallery-image"
              ref={mediaRef} // Assign the ref to the media element
            />
          ) : (
            <img
              src={isMobile ? media[current].mobileSrc : media[current].src}
              alt="slope mowing, mower image"
              className="gallery-image"
              ref={mediaRef} // Assign the ref to the media element
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
