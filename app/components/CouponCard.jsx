"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, ExternalLink, Ticket, Users, Calendar, Star, Check } from "lucide-react";
import clsx from "clsx";

function getCategoryClass(category) {
  const map = {
    "Movies": "cat-movies",
    "Gaming": "cat-gaming",
    "Music": "cat-music",
    "Events": "cat-events",
    "Travel": "cat-travel",
    "Family": "cat-family",
    "Amusement": "cat-amusement",
    "Exhibitions": "cat-exhibitions",
    "TV": "cat-tv",
    "Fitness": "cat-fitness",
    "E-Sports": "cat-esports",
  };
  return map[category] || "cat-default";
}

function StarRating({ rating, totalReviews }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  
  return (
    <div className="card-rating">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < fullStars || (i === fullStars && hasHalf) ? '' : 'empty'}`}>
            ★
          </span>
        ))}
      </div>
      <span>{rating}</span>
      <span style={{ color: '#94a3b8' }}>({totalReviews?.toLocaleString()})</span>
    </div>
  );
}

export default function CouponCard({ coupon }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (coupon.type === "code") {
      setRevealed(true);
    } else {
      window.open(coupon.link, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const catClass = getCategoryClass(coupon.category);
  const badgeClass = coupon.badge 
    ? `badge-${coupon.badge.toLowerCase().replace(' ', '')}` 
    : '';

  return (
    <motion.div
      className={clsx("coupon-card", coupon.isFeatured && "featured-card")}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      {/* Category Accent Bar */}
      <div className={`card-accent-bar ${catClass}`} />

      {/* Badge */}
      {coupon.badge && (
        <div className={clsx("card-badge", badgeClass)}>
          {coupon.badge === "LIMITED" ? "⏳ Limited" : coupon.badge}
        </div>
      )}

      <div className="card-inner">
        <div className="card-header">
          <div className="brand-badge">{coupon.brand}</div>
          <div className="usage-tag">
            <Users size={13} /> <span>{coupon.usageCount} used</span>
          </div>
        </div>

        <div className="card-body">
          <h3 className="coupon-title">{coupon.title}</h3>
          <p className="coupon-desc">{coupon.description}</p>
        </div>

        {/* Rating */}
        {coupon.rating && (
          <StarRating rating={coupon.rating} totalReviews={coupon.totalReviews} />
        )}

        {/* Discount */}
        {coupon.discount && (
          <div className="discount-row">
            <span className="discount-tag">{coupon.discount}</span>
            {coupon.originalPrice && (
              <span className="original-price">{coupon.originalPrice}</span>
            )}
          </div>
        )}

        <div className="card-meta">
          <div className={`category-chip ${catClass}`}>{coupon.category}</div>
          <div className="expiry">
            <Calendar size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
            Expires: <span>{coupon.expiryDate}</span>
          </div>
        </div>
      </div>

      <div className="coupon-footer">
        <AnimatePresence mode="wait">
          {coupon.type === "code" && revealed ? (
            <motion.div 
              key="code"
              className="code-container"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <code className="coupon-code">{coupon.code}</code>
              <button 
                className={clsx("copy-btn", copied && "copied")} 
                onClick={handleCopy}
              >
                {copied ? (
                  <><Check size={14} style={{ marginRight: '4px', verticalAlign: '-2px' }} /> Copied!</>
                ) : (
                  <><Copy size={14} style={{ marginRight: '4px', verticalAlign: '-2px' }} /> Copy</>
                )}
              </button>
            </motion.div>
          ) : (
            coupon.type === "code" ? (
              <motion.button 
                key="code-button"
                className="action-btn code-btn" 
                onClick={handleClick}
                whileTap={{ scale: 0.97 }}
              >
                <Ticket size={18} /> Reveal Code
              </motion.button>
            ) : (
              <motion.a 
                href={coupon.link}
                target="_blank"
                rel="noopener noreferrer"
                key="deal-link"
                className="action-btn deal-btn" 
                whileTap={{ scale: 0.97 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} /> Activate Deal
              </motion.a>
            )
        )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
