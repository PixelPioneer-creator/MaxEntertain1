"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Tv } from "lucide-react";

export default function TvPage() {
  const tvCoupons = coupons.filter(c => c.category === "TV");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Tv className="logo-icon" size={28} />
        <h2>TV & Streaming</h2>
      </div>
      <p className="section-subtitle">Save big on your favorite TV streaming subscriptions.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {tvCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
