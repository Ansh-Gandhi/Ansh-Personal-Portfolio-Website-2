import React from "react";
import "./styling/ContactForm.css";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in touch</h2>
      <div className="contact-card">
        <h3 className="form-title">Send a Message</h3>
        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="cb5a8a60-2198-4462-ab79-e3ac4f2b2db3"
          />

          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="contact-input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="contact-input"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="contact-input"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows="6"
            className="contact-input"
          />

          <button type="submit" className="gradient-button">
            <FaPaperPlane className="submit-icon" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
