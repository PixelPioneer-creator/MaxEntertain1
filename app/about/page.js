"use client";

import { motion } from "framer-motion";
import { Ticket, Users, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About MaxEntertain
        </motion.h1>
        <motion.p 
          className="info-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Your premier destination for verified entertainment deals and unforgettable experiences.
        </motion.p>
      </section>

      <div className="info-container">
        <motion.div 
          className="info-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Our Mission</h2>
          <p>
            At MaxEntertain, we believe that world-class entertainment should be accessible to everyone. 
            Our mission is to bridge the gap between premium experiences and value-conscious consumers 
             by providing a curated, verified, and easy-to-use platform for the best deals in movies, gaming, music, and more.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px' }}>
            <div className="contact-info-item">
              <div className="contact-icon"><Ticket size={24} /></div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Verified Daily</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>Every coupon is manually tested by our dedicated deal hunters.</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><Users size={24} /></div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Community First</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>Join 50,000+ members saving on their favorite experiences.</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><Award size={24} /></div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Premium Partners</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>We work directly with top brands to bring you exclusive offers.</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><ShieldCheck size={24} /></div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Safe & Secure</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>No spam, no hidden fees. Just pure savings and great times.</p>
              </div>
            </div>
          </div>

          <h2>Our Story</h2>
          <p>
            Founded in 2024, MaxEntertain started as a simple project to help friends find better deals on movie tickets. 
            Quickly realizing that the entertainment industry lacked a truly specialized and "anti-gravity" themed discount hub, 
            we expanded into the comprehensive platform you see today.
          </p>
          <p>
            Today, we are proud to be the fastest-growing entertainment coupon platform, floating through the noise 
            of generic deal sites to bring you the "Max" in entertainment.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
