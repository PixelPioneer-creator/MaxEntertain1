"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h1>
        <motion.p 
          className="info-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Have a question or need assistance? We're here to help you float through any issues.
        </motion.p>
      </section>

      <div className="info-container">
        <motion.div 
          className="info-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="contact-grid">
            <div>
              <h2>Get in Touch</h2>
              <p>Our support team is available 24/7 to help you with deal verification, submission issues, or any other inquiries.</p>
              
              <div className="contact-info-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)' }}>Email Support</h4>
                  <p style={{ margin: 0 }}>support@maxentertain.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)' }}>Phone</h4>
                  <p style={{ margin: 0 }}>+1 (800) MAX-DEAL</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)' }}>Headquarters</h4>
                  <p style={{ margin: 0 }}>123 Aurora Lane, Digital City, DC 90210</p>
                </div>
              </div>
            </div>

            <div>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="How can we help?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                </div>
                <button type="submit" className="submit-btn" style={{ width: '100%', padding: '16px' }}>
                  <Send size={18} style={{ marginRight: '8px' }} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
