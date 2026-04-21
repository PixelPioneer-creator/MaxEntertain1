"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Smile } from "lucide-react";

export default function AmusementPage() {
  const amusementCoupons = coupons.filter(c => c.category === "Amusement");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Smile className="logo-icon" size={28} />
        <h2>Amusement Parks</h2>
      </div>
      <p className="section-subtitle">Find thrilling discounts on theme parks and amusement rides.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {amusementCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
