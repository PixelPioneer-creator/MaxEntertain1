"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Activity } from "lucide-react";

export default function FitnessPage() {
  const fitnessCoupons = coupons.filter(c => c.category === "Fitness");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Activity className="logo-icon" size={28} />
        <h2>Fitness Deals</h2>
      </div>
      <p className="section-subtitle">Stay active and save money with our fitness and gym coupons.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {fitnessCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
