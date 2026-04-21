"use client";

import { motion } from "framer-motion";
import { DollarSign, ShieldCheck, HeartPulse } from "lucide-react";

export default function AffiliateDisclosurePage() {
  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Affiliate Disclosure
        </motion.h1>
        <motion.p 
          className="info-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Transparency is at the heart of our "Anti-Gravity" experience.
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
              <DollarSign size={32} />
            </div>
            <h2>How We Keep the Lights On</h2>
          </div>

          <p>
            MaxEntertain is a free-to-use platform for all our visitors. To maintain the quality of our service, 
            verify thousands of deals daily, and keep our servers running, we participate in various affiliate marketing programs.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px', marginBottom: '40px' }}>
            <div className="contact-info-item">
              <div className="contact-icon"><ShieldCheck size={24} /></div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Expert Curation</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>Every deal is selected based on value to you, not the commission rate.</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><HeartPulse size={24} /></div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Honest Integrity</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>An affiliate relationship never influences our editorial standards.</p>
              </div>
            </div>
          </div>

          <h2>What is an Affiliate Link?</h2>
          <p>
            When you click on a deal button or reveal a coupon code on MaxEntertain, you are often directed to the 
            merchant's website via an affiliate link. If you subsequently make a purchase, we may receive a small 
            commission from the merchant at <strong>no additional cost to you</strong>.
          </p>
          <p>
            In many cases, these affiliate relationships allow us to negotiate exclusive codes (like the ones 
            tagged "EXCLUSIVE" on our homepage) that you won't find anywhere else.
          </p>

          <h2>Our Commitment to You</h2>
          <p>
            We only partner with reputable entertainment brands that we would use ourselves. Our primary goal is 
            to save you money on the activities you love. Whether we get a commission or not, a "Working" deal 
            is always our top priority.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have any questions regarding our affiliate relationships or how we handle your data, please 
            don't hesitate to contact our team at <a href="mailto:partnerships@maxentertain.com">partnerships@maxentertain.com</a>.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
