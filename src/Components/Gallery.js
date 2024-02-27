import React, { useState, useEffect } from "react";

export default function Gallery() {
 const [current, setCurrent] = useState(0);
 const isMobile = window.innerWidth <= 768;
 const images = [
   "mower_1.webp",
   "mower_1.mp4",
   "mower_2.webp",
   "mower_2.mp4",
 ];

 // Preload next and previous images
 const [preloadedImages, setPreloadedImages] = useState([]);
 useEffect(() => {
   const nextIndex = (current + 1) % images.length;
   const prevIndex = (current - 1 + images.length) % images.length;
   const nextImage = new Image();
   const prevImage = new Image();
   nextImage.src = images[nextIndex];
   prevImage.src = images[prevIndex];
   setPreloadedImages([nextImage, prevImage]);
 }, [current, images]);

 // Enhanced conditional check for mobile images
 const currentImage = isMobile
   ? images[current].replace(".webp", "_mobile.webp")
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
           <img src={currentImage} alt="slope mowing, mower image" className="gallery-image" />
         ) : (
           <video src={currentImage} alt="slope mowing, mowing video" muted autoPlay loop className="gallery-image" />
         )}
       </div>
       <button onClick={handlePrev} className="nav-button prev-button">
         {"<"}
       </button>
     </div>
   </section>
 );
}
