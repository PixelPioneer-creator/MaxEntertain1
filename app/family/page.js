"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Users } from "lucide-react";

export default function FamilyPage() {
  const familyCoupons = coupons.filter(c => c.category === "Family");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Users className="logo-icon" size={28} />
        <h2>Family Activities</h2>
      </div>
      <p className="section-subtitle">Budget-friendly deals for fun outings with the whole family.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {familyCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
