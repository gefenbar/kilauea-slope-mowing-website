export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="image-grid">
        <img
          src="mower_1.jpeg"
          alt="slope mowing"
          loading="lazy"
          width="0px"
          height="0px"
          className="gallery-image"
        />
        <video
          src="mower_1.mp4"
          alt="slope mowing"
          loading="lazy"
          width="0px"
          height="0px"
          muted
          autoPlay
          loop
          className="gallery-image"
        />
        <video
          src="mower_2.mp4"
          alt="slope mowing"
          loading="lazy"
          width="0px"
          height="0px"
          muted
          autoPlay
          loop
          className="gallery-image"
        />
        {/* <video src="mower_3.mp4" muted autoPlay className="gallery-image" /> */}

        <img
          src="mower_2.jpeg"
          alt="slope mowing"
          loading="lazy"
          width="0px"
          height="0px"
          className="gallery-image"
        />
      </div>
    </section>
  );
}
