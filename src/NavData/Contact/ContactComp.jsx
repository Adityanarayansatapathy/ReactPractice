import React from 'react'
import { HeaderComp } from '../Header/HeaderComp'
import './Contact.css';

export function ContactComp() {
  return (
    <div className="contact-container">
      <HeaderComp />
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-intro">We're here to help! Reach out to us through any of the following channels:</p>

      <section className="contact-details">
        <div className="contact-item">
          <h2>Phone</h2>
          <p>Our customer service team is available to assist you at <strong>+91 1234567890</strong>.</p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p>For any inquiries, feel free to email us at <strong>info@example.com</strong>.</p>
        </div>
        <div className="contact-item">
          <h2>Address</h2>
          <p>Visit us at our office located at <strong>123 Main St, Anytown, USA</strong>.</p>
        </div>
        <div className="contact-item">
          <h2>Business Hours</h2>
          <p>We are available during the following hours:</p>
          <ul>
            <li>Monday - Friday: 9 AM - 5 PM</li>
            <li>Saturday & Sunday: 10 AM - 3 PM</li>
          </ul>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required className="input-field" />
          <input type="email" placeholder="Your Email" required className="input-field" />
          <textarea placeholder="Your Message" required className="textarea-field"></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
}

