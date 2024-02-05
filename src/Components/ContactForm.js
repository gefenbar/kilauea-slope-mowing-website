import { useState, useEffect } from 'react';
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqepqya");
  const [isInUS, setIsInUS] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => setIsInUS(data.country === 'US'))
      .catch(() => {
        // Handle error
      });
  }, []);

  const handleFormSubmit = (e) => {
    if (!isInUS) {
      e.preventDefault();
      alert('Sorry, we are only accepting messages from the United States.');
    } else {
      handleSubmit(e);
    }
  }

  if (state.succeeded) {
    return <p id="submit_message">Thanks for contacting us!</p>;
  }

  return (
    <div>
      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <form onSubmit={handleFormSubmit} className="contact-form">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input-field"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            className="input-field"
          />
          <ValidationError
            prefix="Email"
            field="_replyto"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className="textarea-field"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="cta-button"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
