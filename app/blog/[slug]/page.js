import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPost({ params }) {
  // Await params for Next.js 15+ compatibility
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', color: '#94a3b8', textDecoration: 'none', marginBottom: '32px' }}>
        <ArrowLeft size={16} style={{ marginRight: '8px' }} />
        Back to Blog
      </Link>
      
      <div className="section-header" style={{ marginBottom: '24px' }}>
        <h1>{title}</h1>
      </div>
      
      <div style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.8" }}>
        <p style={{ marginBottom: "20px" }}>
          This is a placeholder for the blog post "<strong>{title}</strong>". Here, you would explore the details of how to maximize your savings or read exciting news about top entertainment platforms, tips for amusement parks, and everything else you need to know about the incredible deals found on MaxEntertain!
        </p>

        <p style={{ marginBottom: "20px", padding: "20px", backgroundColor: "#1e293b", borderRadius: "8px", borderLeft: "4px solid #3b82f6" }}>
          <em>"Never pay full price when a perfectly verified, high-value alternative exists!"</em> - The MaxEntertain Philosophy.
        </p>

        <p>
          Don't forget to check out our <Link href="/explore" style={{ color: "#3b82f6", textDecoration: "none" }}>Explore</Link> page for the latest, daily-updated verified deal drops from around the internet.
        </p>
      </div>
    </main>
  );
}
