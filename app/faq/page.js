"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
      {isOpen && (
        <motion.div 
          className="faq-answer"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I use a coupon code on MaxEntertain?",
      answer: "When you find a deal you like, click 'Reveal Code'. A popup will show the code. Copy it and paste it during the checkout process on the merchant's website. If it's a 'Get Deal' button, the discount will be automatically applied at the link provided."
    },
    {
      question: "Are the deals on your site verified?",
      answer: "Yes! Our team of deal hunters tests every offer daily to ensure it works as advertised. We also have a community feedback system where users can report if a deal has expired."
    },
    {
      question: "I found a deal that isn't working. What should I do?",
      answer: "Occasionally, merchants may pull a deal earlier than expected. If you find a broken deal, please contact our support at support@maxentertain.com, and we'll investigate it immediately."
    },
    {
      question: "Does it cost anything to use MaxEntertain?",
      answer: "No, MaxEntertain is completely free for users. We earn a small commission from some of our partners when you make a purchase through our links, which helps us keep the platform running and the deals verified."
    },
    {
      question: "How can I submit a new entertainment deal?",
      answer: "Visit our 'Submit a Deal' page (linked in the footer) and fill out the form. Our team will review the deal and list it if it meets our quality standards."
    },
    {
      question: "Do you offer deals for local entertainment?",
      answer: "While we focus on major national entertainment brands, we are constantly expanding into local categories like escape rooms, karaoke lounges, and regional theme parks. Check our 'Events' category for local gems!"
    }
  ];

  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p 
          className="info-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Everything you need to know about saving with MaxEntertain.
        </motion.p>
      </section>

      <div className="info-container">
        <motion.div 
          className="info-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="contact-icon" style={{ margin: '0 auto 20px', width: '64px', height: '64px' }}>
              <HelpCircle size={32} />
            </div>
          </div>
          
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}

          <div style={{ marginTop: '48px', textAlign: 'center', background: 'var(--primary-glow)', padding: '32px', borderRadius: '20px' }}>
            <h3>Still have questions?</h3>
            <p>We're here to help! Get in touch with our support team.</p>
            <a href="/contact" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-flex', padding: '12px 24px' }}>
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
