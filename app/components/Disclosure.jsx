"use client";

import { useState } from "react";

export default function Disclosure() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="disclosure" style={{ animation: "fadeInUp 0.5s ease" }}>
      <div className="disclosure-content">
        <p>
          <span className="disclosure-tag">Disclosure</span>
          MaxEntertain may earn commissions when you click on deals and make purchases. This helps us keep deals verified & free.
        </p>
      </div>
      <button 
        className="disclosure-close" 
        onClick={() => setVisible(false)}
        aria-label="Close disclosure"
      >
        ✕
      </button>
    </div>
  );
}
