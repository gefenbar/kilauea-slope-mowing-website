export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="image-grid">
        <img src="2.jpeg" alt="mower1" className="gallery-image" />
        <video src="mower_1.mp4" muted autoPlay loop className="gallery-image" />
        <video src="mower_2.mp4" muted autoPlay loop className="gallery-image" />
        {/* <video src="mower_3.mp4" muted autoPlay className="gallery-image" /> */}

        <img src="1.jpeg" alt="" className="gallery-image" />
      </div>
    </section>
  );
}
