"use client";

import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookiesPage() {
  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cookie Settings
        </motion.h1>
        <motion.p 
          className="info-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Everything you need to know about how we use cookies.
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
              <Cookie size={32} />
            </div>
          </div>

          <p>
            MaxEntertain uses cookies to improve your experience on our website. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
          </p>

          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function correctly. They enable basic functions like page navigation and access to secure areas.</li>
            <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.</li>
            <li><strong>Functional Cookies:</strong> These cookies allow our website to remember choices you make (such as your username or language) and provide enhanced features.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.</li>
          </ul>

          <h2>3. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. For example, we use Google Analytics to monitor site traffic.
          </p>

          <h2>4. Your Choices Regarding Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>

          <h2>5. Updates to This Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this policy periodically for any changes.
          </p>

          <div style={{ marginTop: '40px', padding: '24px', border: '1px solid var(--border-light)', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '16px' }}>Cookie Preferences</h3>
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>You can customize your cookie preferences below. Please note that essential cookies cannot be disabled.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked disabled />
                <span>Essential Cookies (Required)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>Analytics & Performance</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>Personalization</span>
              </label>
              <button className="submit-btn" style={{ marginTop: '12px', padding: '10px 20px', alignSelf: 'flex-start' }}>Save Preferences</button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
