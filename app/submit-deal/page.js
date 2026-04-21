"use client";

import { motion } from "framer-motion";
import { PlusCircle, Upload, Check } from "lucide-react";

export default function SubmitDealPage() {
  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Submit a Deal
        </motion.h1>
        <motion.p 
          className="info-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Found a great entertainment discount? Share it with the community and help others save!
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
              <PlusCircle size={32} />
            </div>
            <h2>Partner With Us</h2>
            <p>Whether you're a user who found a gem or a brand representative, we'd love to showcase your deal.</p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group">
                <label htmlFor="brand-name">Brand Name</label>
                <input type="text" id="brand-name" placeholder="e.g., CinemaWorld" required />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" style={{ padding: '14px 18px', borderRadius: '12px', border: '1px solid var(--border-light)', background: 'white' }} required>
                  <option value="">Select Category</option>
                  <option value="Movies">Movies</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Music">Music</option>
                  <option value="Events">Events</option>
                  <option value="Travel">Travel</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="deal-title">Deal Title</label>
              <input type="text" id="deal-title" placeholder="e.g., 50% Off Premier Tickets" required />
            </div>

            <div className="form-group">
              <label htmlFor="deal-desc">Description</label>
              <textarea id="deal-desc" rows="3" placeholder="Tell us more about the deal..." required></textarea>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group">
                <label htmlFor="coupon-type">Coupon Type</label>
                <select id="coupon-type" style={{ padding: '14px 18px', borderRadius: '12px', border: '1px solid var(--border-light)', background: 'white' }} required>
                  <option value="code">Promo Code</option>
                  <option value="deal">Direct Deal/Link</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="coupon-code">Code (if applicable)</label>
                <input type="text" id="coupon-code" placeholder="e.g., SAVE50" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="link">Deal Link / URL</label>
              <input type="url" id="link" placeholder="https://brand.com/deal" required />
            </div>

            <div className="form-group">
              <label htmlFor="proof">Proof of Deal (Optional)</label>
              <div style={{ border: '2px dashed var(--border-light)', padding: '30px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer' }}>
                <Upload size={24} style={{ color: 'var(--text-muted)', marginBottom: '8px' }} />
                <p style={{ margin: 0, fontSize: '14px' }}>Click to upload screenshot or drag and drop</p>
              </div>
            </div>

            <button type="submit" className="submit-btn" style={{ width: '100%', padding: '16px', marginTop: '20px' }}>
              <Check size={18} style={{ marginRight: '8px' }} />
              Submit For Review
            </button>
          </form>

          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '20px' }}>
            By submitting, you agree to our Terms of Service and verify that this deal is publicly available. 
            All submissions are reviewed within 24 hours.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
