"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Map } from "lucide-react";

export default function ExhibitionsPage() {
  const exhibitionsCoupons = coupons.filter(c => c.category === "Exhibitions");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Map className="logo-icon" size={28} />
        <h2>Exhibitions</h2>
      </div>
      <p className="section-subtitle">Explore amazing exhibitions and museums for less.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {exhibitionsCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
