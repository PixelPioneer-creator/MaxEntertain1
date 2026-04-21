"use client";

import { Ticket, Mail, Shield, CheckCircle, Award } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Trust Badges */}
      <div className="footer-trust">
        <div className="trust-item">
          <Shield size={18} />
          <span>100% Verified Deals</span>
        </div>
        <div className="trust-item">
          <CheckCircle size={18} />
          <span>No Spam Promise</span>
        </div>
        <div className="trust-item">
          <Award size={18} />
          <span>Trusted by 50K+ Users</span>
        </div>
      </div>

      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo footer-logo">
            <Ticket className="logo-icon" size={24} />
            <span className="logo-text">Max<span>Entertain</span></span>
          </div>
          <p>
            Your ultimate destination for authentic and verified 
            entertainment deals. We curate the best savings on 
            movies, gaming, concerts, and unforgettable experiences.
          </p>

        </div>

        {/* Categories */}
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li><Link href="/movies">Movie Tickets</Link></li>
            <li><Link href="/gaming">Gaming Zones</Link></li>
            <li><Link href="/music">Live Concerts</Link></li>
            <li><Link href="/amusement">Theme Parks</Link></li>
            <li><Link href="/exhibitions">Exhibitions</Link></li>
            <li><Link href="/tv">Streaming</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Support</Link></li>
            <li><Link href="/submit-deal">Submit a Deal</Link></li>
            <li><Link href="/explore">Deal Alerts</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
            <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
            <li><Link href="/cookies">Cookie Settings</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get the best deals delivered to your inbox weekly. Join 50,000+ savers.</p>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
            />
            <button type="submit">Go</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="copyright">
          &copy; 2026 MaxEntertain. Built for extreme savings.
        </div>
        <div className="footer-legal">
          <Link href="/privacy">Privacy</Link>
          <span style={{ margin: '0 10px', opacity: 0.4 }}>|</span>
          <Link href="/terms">Terms</Link>
          <span style={{ margin: '0 10px', opacity: 0.4 }}>|</span>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
