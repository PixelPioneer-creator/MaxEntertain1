"use client";
import CouponCard from "../components/CouponCard";
import { coupons } from "../../lib/coupons";
import { Film } from "lucide-react";

export default function MoviesPage() {
  const moviesCoupons = coupons.filter(c => c.category === "Movies");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="section-header">
        <Film className="logo-icon" size={28} />
        <h2>Movies</h2>
      </div>
      <p className="section-subtitle">Grab the best deals on movie tickets and cinematic experiences.</p>
      <div className="grid" style={{ marginTop: '40px' }}>
        {moviesCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </main>
  );
}
