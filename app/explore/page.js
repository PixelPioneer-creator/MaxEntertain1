"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Sparkles } from "lucide-react";

export default function ExplorePage() {
  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Sparkles className="logo-icon" size={28} />
        <h2>Explore All Deals</h2>
      </div>
      <p className="section-subtitle">Discover our entire collection of premium entertainment coupons.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {coupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
