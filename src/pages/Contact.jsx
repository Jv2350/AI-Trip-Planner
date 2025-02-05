import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us anytime.</p>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div class="airplane"></div>


      {/* Contact Info Section */}
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Street, City, Country</p>
      </div>

      {/* Footer Section */}
      <div className="contact-footer">
        <p>© 2025 AI Travel Platform. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
