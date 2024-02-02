import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact_Form() {
  const [state, handleSubmit] = useForm("mnqepqya");
  if (state.succeeded) {
      return <p id="submit_message">Thanks for contacting us!</p>
  }
  return (
    <div>
      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input id="name" type="text" name="name" placeholder="Your Name" required className="input-field" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input id="email" type="email" name="_replyto" placeholder="Your Email" required className="input-field" />
          <ValidationError prefix="Email" field="_replyto" errors={state.errors} />
          <textarea id="message" name="message" placeholder="Your Message" required className="textarea-field"></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting} className="cta-button">
            Send Message
          </button>
        </form>
      </section>
      
    </div>
  );
}

export default Contact_Form;
