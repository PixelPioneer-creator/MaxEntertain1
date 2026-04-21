"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Plane } from "lucide-react";

export default function TravelPage() {
  const travelCoupons = coupons.filter(c => c.category === "Travel");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Plane className="logo-icon" size={28} />
        <h2>Travel Deals</h2>
      </div>
      <p className="section-subtitle">Discover amazing savings on flights, hotels, and holiday packages.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {travelCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
