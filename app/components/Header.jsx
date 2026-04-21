"use client";

import React from "react";

export default function Header() {
  return (
    <section className="hero">
      <span className="hero-decor" aria-hidden="true">🎬</span>
      <span className="hero-decor" aria-hidden="true">🎮</span>
      <span className="hero-decor" aria-hidden="true">🎵</span>
      <span className="hero-decor" aria-hidden="true">🎪</span>

      <div className="hero-badge">
        <span className="badge-dot" />
        Trusted by 50,000+ entertainment lovers
      </div>

      <h1 className="title">
        Experience More<br />
        <span>Pay Less</span>
      </h1>

      <p className="subtitle">
        Your authentic source for verified entertainment deals.
        Discover exclusive coupons for movies, gaming, concerts, 
        and world-class experiences — all in one place. 🎟️
      </p>
    </section>
  );
}
