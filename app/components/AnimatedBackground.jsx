"use client";

export default function AnimatedBackground() {
  return (
    <>
      {/* Aurora Gradient Blobs */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-blob" />
        <div className="aurora-blob" />
        <div className="aurora-blob" />
        <div className="aurora-blob" />
      </div>

      {/* Floating Particles */}
      <div className="particles" aria-hidden="true">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>
    </>
  );
}
