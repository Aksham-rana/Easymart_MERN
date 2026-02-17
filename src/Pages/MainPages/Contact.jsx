import React from "react";
import "../../Style/Contact.css";
import Navigation from "./Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />

      <div className="contact-page">
        <h1>Contact Us</h1>

        <p className="contact-intro">
          Have questions, feedback, or need help?  
          We’d love to hear from you.
        </p>

        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p>
              Feel free to reach out to us for any queries related to products,
              orders, or general support.
            </p>

            <ul>
              <li><strong>Email:</strong> support@easymart.com</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Location:</strong> India</li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <h2>Send a Message</h2>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
