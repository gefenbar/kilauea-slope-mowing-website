import React from 'react';

const testimonials = [
  {
    name: 'John Smith',
    location: 'Kauai, HI',
    quote: 'These guys are amazing! They transformed my overgrown slope into a beautiful piece of paradise. Highly recommend!',
  },
  {
    name: 'Mary Jones',
    location: 'Poipu, Kauai',
    quote: 'Fast, efficient, and affordable service. They were professional and cleaned up everything perfectly. Mahalo!',
  },
  {
    name: 'Sarah Lee',
    location: 'Lihue, Kauai',
    quote: 'I was impressed by their attention to detail and dedication to making sure I was satisfied with their work. My yard has never looked better!',
  }  
  // Add more testimonials as needed
];

const Testimonial = ({ name, location, quote, image }) => (
  <div className="testimonial">
    <p className="testimonial-quote">{quote}</p>
    <div className="testimonial-info">
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-location">{location}</p>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2 className="section-title">What our clients say</h2>
    <div className="testimonial-container">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.name} {...testimonial} />
      ))}
    </div>
  </section>
);

export default Testimonials;
