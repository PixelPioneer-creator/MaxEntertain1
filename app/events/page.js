"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";

export default function EventsPage() {
  const eventsCoupons = coupons.filter(c => ["Events", "Exhibitions"].includes(c.category));

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <span style={{ fontSize: '28px', marginRight: '16px' }}>🎪</span>
        <h2>Events & Exhibitions</h2>
      </div>
      <p className="section-subtitle">Discover thrilling events and cultural exhibitions at a discount.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {eventsCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
