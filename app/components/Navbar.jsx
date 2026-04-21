"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Explore", href: "/explore" },
    { label: "Entertainment", href: "/entertainment" },
    { label: "Gaming", href: "/gaming" },
    { label: "Music", href: "/music" },
    { label: "Events", href: "/events" },
  ];

  return (
    <>
      <nav className="navbar">
        <motion.div 
          className="nav-container"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          <Link href="/" className="logo">
            <Ticket className="logo-icon" size={30} />
            <span className="logo-text">Max<span>Entertain</span></span>
          </Link>
          
          <div className="nav-links">
            {links.map((link, i) => (
              <Link
                key={link.label} 
                href={link.href} 
                className={`nav-link ${i === 0 ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <button className="submit-btn">Submit Deal</button>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              className="mobile-menu-close" 
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              className="submit-btn"
              style={{
                marginTop: '20px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                padding: '14px 36px',
                borderRadius: '14px',
                border: 'none',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: links.length * 0.08 }}
            >
              Submit Deal
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
