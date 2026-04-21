import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Blog — MaxEntertain",
  description: "Read the latest news, updates, and tips on saving big with MaxEntertain.",
};

export default function BlogPage() {
  return (
    <main className="container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="section-header" style={{ marginBottom: '40px' }}>
        <h2>MaxEntertain Blog</h2>
      </div>
      
      <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "40px" }}>
        Stay tuned for the latest updates, cost-saving tips, and exclusive entertainment news!
      </p>

      <div className="grid">
        {/* Placeholder for blog posts */}
        <div style={{ backgroundColor: "#1e293b", padding: "24px", borderRadius: "12px" }}>
          <h3 style={{ color: "#f8fafc", marginBottom: "12px" }}>5 Ways to Maximize Your Savings on Streaming Services</h3>
          <p style={{ color: "#94a3b8", marginBottom: "16px" }}>Learn how you can stack coupons and take advantage of seasonal deals to cut your streaming bills in half.</p>
          <Link href="/blog/maximize-savings" style={{ color: "#3b82f6", fontWeight: "600", textDecoration: "none", display: "inline-block" }}>Read More &rarr;</Link>
        </div>

        <div style={{ backgroundColor: "#1e293b", padding: "24px", borderRadius: "12px" }}>
          <h3 style={{ color: "#f8fafc", marginBottom: "12px" }}>Top 10 Amusement Parks to Visit This Summer</h3>
          <p style={{ color: "#94a3b8", marginBottom: "16px" }}>Planning a family getaway? Check out our top picks for water parks and rides to tackle heat this season.</p>
          <Link href="/blog/amusement-parks" style={{ color: "#3b82f6", fontWeight: "600", textDecoration: "none", display: "inline-block" }}>Read More &rarr;</Link>
        </div>

        <div style={{ backgroundColor: "#1e293b", padding: "24px", borderRadius: "12px" }}>
          <h3 style={{ color: "#f8fafc", marginBottom: "12px" }}>How GrabOn Deals Work With MaxEntertain</h3>
          <p style={{ color: "#94a3b8", marginBottom: "16px" }}>We source our best 100% verified deals securely so you never deal with expired or false codes again.</p>
          <Link href="/blog/verified-deals" style={{ color: "#3b82f6", fontWeight: "600", textDecoration: "none", display: "inline-block" }}>Read More &rarr;</Link>
        </div>
      </div>
    </main>
  );
}
