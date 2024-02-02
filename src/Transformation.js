import React from 'react';

const TransformationSection = () => {
  return (
    <section className="transformation" id="transformation">
      <h2 className="section-title">Our Transformation</h2>
      <div className="before-after">
        <div className="before-after-container">
          <img src="before.jpeg" alt="Before Mowing" className="before-image" />
          <img src="after.jpeg" alt="After Mowing" className="after-image" />
        </div>
        <p>Witness the dramatic difference our service makes on the toughest terrains.</p>
      </div>
    </section>
  );
};

export default TransformationSection;
