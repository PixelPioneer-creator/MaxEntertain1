"use client";

import { useState, useEffect, useRef } from "react";
import CouponCard from "./components/CouponCard";
import Header from "./components/Header";
import { coupons } from "../lib/coupons";
import { Sparkles, Zap, Clock, ArrowUp } from "lucide-react";

const categories = ["All", "Movies", "Gaming", "Music", "Events", "Travel", "Family", "Amusement", "Exhibitions", "TV", "Fitness", "E-Sports"];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Movie Enthusiast",
    avatar: "SM",
    avatarClass: "av-1",
    text: "MaxEntertain saved me over $300 on movie tickets alone last year. The codes always work and the deals are genuinely fantastic!",
    stars: 5,
  },
  {
    name: "James Rodriguez",
    role: "Gamer & Streamer",
    avatar: "JR",
    avatarClass: "av-2",
    text: "I use this every week for gaming zone passes. The VR deals are incredible — my friends think I'm getting some secret hookup!",
    stars: 5,
  },
  {
    name: "Priya Kapoor",
    role: "Family Travel Blogger",
    avatar: "PK",
    avatarClass: "av-3",
    text: "Found a cruise deal here that was $40 cheaper than anywhere else. The family park passes are a lifesaver during school holidays.",
    stars: 5,
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const revealRefs = useRef([]);

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const filteredCoupons = activeFilter === "All" 
    ? coupons 
    : coupons.filter(c => c.category === activeFilter);

  const featuredCoupons = filteredCoupons.filter(c => c.isFeatured);
  const trendingCoupons = filteredCoupons.filter(c => !c.isFeatured).slice(0, 4);
  const recentCoupons = filteredCoupons.filter(c => !c.isFeatured).slice(4);

  return (
    <main>
      {/* ========== HEADER / HERO ========== */}
      <Header />

      {/* ========== STATS BAR ========== */}
      <section className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Happy Users</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">200+</div>
          <div className="stat-label">Partner Brands</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">$2M+</div>
          <div className="stat-label">Total Saved</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">99%</div>
          <div className="stat-label">Verified Deals</div>
        </div>
      </section>

      {/* ========== CATEGORY FILTERS ========== */}
      <section className="filter-section reveal">
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ========== COUPON SECTIONS ========== */}
      <div className="container">
        {/* Featured */}
        {featuredCoupons.length > 0 && (
          <section className="content-section reveal">
            <div className="section-header">
              <Sparkles className="logo-icon" size={22} />
              <h2>Featured Offers</h2>
            </div>
            <p className="section-subtitle">Hand-picked deals with the highest savings — verified daily.</p>
            <div className="grid">
              {featuredCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </div>
          </section>
        )}

        {/* Trending */}
        {trendingCoupons.length > 0 && (
          <section className="content-section reveal">
            <div className="section-header">
              <Zap size={22} style={{ color: '#ec4899' }} />
              <h2>Trending Deals</h2>
            </div>
            <p className="section-subtitle">What everyone&apos;s grabbing right now — don&apos;t miss out.</p>
            <div className="grid">
              {trendingCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </div>
          </section>
        )}

        {/* Recently Added */}
        {recentCoupons.length > 0 && (
          <section className="content-section reveal">
            <div className="section-header">
              <Clock size={22} style={{ color: '#10b981' }} />
              <h2>Recently Added</h2>
            </div>
            <p className="section-subtitle">Fresh deals added this week — be the first to save.</p>
            <div className="grid">
              {recentCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ========== HOW IT WORKS ========== */}
      <section className="how-it-works reveal">
        <div className="section-header">
          <h2>How It Works</h2>
        </div>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: '500px' }}>
          Saving on entertainment is as easy as 1-2-3
        </p>
        <div className="steps-grid">
          <div className="step-card reveal reveal-delay-1">
            <div className="step-icon">🔍</div>
            <div className="step-number step-1">1</div>
            <h3>Browse Deals</h3>
            <p>Explore our curated collection of verified entertainment coupons across movies, gaming, music, and more.</p>
          </div>
          <div className="step-card reveal reveal-delay-2">
            <div className="step-icon">🎟️</div>
            <div className="step-number step-2">2</div>
            <h3>Grab Your Code</h3>
            <p>Click to reveal exclusive promo codes or activate deal links — every offer is verified by our team.</p>
          </div>
          <div className="step-card reveal reveal-delay-3">
            <div className="step-icon">🎉</div>
            <div className="step-number step-3">3</div>
            <h3>Save & Enjoy</h3>
            <p>Apply the code at checkout or follow the deal link. Enjoy premium entertainment at unbeatable prices!</p>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="testimonials-section reveal">
        <div className="section-header">
          <h2>What Our Users Say</h2>
        </div>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: '500px' }}>
          Real savings from real people — join our growing community
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-stars">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="star">★</span>
                ))}
              </div>
              <div className="quote-mark">&ldquo;</div>
              <p className="quote-text">{t.text}</p>
              <div className="testimonial-author">
                <div className={`author-avatar ${t.avatarClass}`}>
                  {t.avatar}
                </div>
                <div className="author-info">
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== NEWSLETTER CTA ========== */}
      <section className="newsletter-section reveal">
        <div className="newsletter-box">
          <h2>Never Miss a Deal 🔔</h2>
          <p>
            Subscribe to get the hottest entertainment deals delivered 
            straight to your inbox every week. No spam, just savings.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* ========== BACK TO TOP ========== */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </button>
    </main>
  );
}
