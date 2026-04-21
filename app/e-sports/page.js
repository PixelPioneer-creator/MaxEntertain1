"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Gamepad2 } from "lucide-react";

export default function ESportsPage() {
  const esportsCoupons = coupons.filter(c => c.category === "E-Sports");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Gamepad2 className="logo-icon" size={28} />
        <h2>E-Sports Deals</h2>
      </div>
      <p className="section-subtitle">Epic discounts on E-Sports tournaments, merch, and streams.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {esportsCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
