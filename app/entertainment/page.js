"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Ticket } from "lucide-react";

export default function EntertainmentPage() {
  const entertainmentCoupons = coupons.filter(c => ["Movies", "TV", "Amusement"].includes(c.category));

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Ticket className="logo-icon" size={28} />
        <h2>Entertainment Deals</h2>
      </div>
      <p className="section-subtitle">The best offers for movies, TV streaming, and amusement parks.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {entertainmentCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
