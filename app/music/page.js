"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";

export default function MusicPage() {
  const musicCoupons = coupons.filter(c => c.category === "Music");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <span style={{ fontSize: '28px', marginRight: '16px' }}>🎵</span>
        <h2>Music & Concerts</h2>
      </div>
      <p className="section-subtitle">Don't miss the beat. Save on live music, festivals, and concerts.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {musicCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
