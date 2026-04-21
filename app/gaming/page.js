"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";

export default function GamingPage() {
  const gamingCoupons = coupons.filter(c => c.category === "Gaming" || c.category === "E-Sports");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <span style={{ fontSize: '28px', marginRight: '16px' }}>🎮</span>
        <h2>Gaming & E-Sports</h2>
      </div>
      <p className="section-subtitle">Level up your savings with our exclusive gaming deals.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {gamingCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
