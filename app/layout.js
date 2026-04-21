import "./globals.css";
import Analytics from "./components/Analytics";
import Disclosure from "./components/Disclosure";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export const metadata = {
  title: "MaxEntertain — Premier Entertainment Coupons & Verified Deals",
  description: "Your authentic destination for the best deals on movies, gaming, concerts, and world-class experiences. 50,000+ users trust us for verified entertainment savings.",
  keywords: "entertainment coupons, movie tickets deals, gaming discounts, theme park offers, concert deals, streaming promo codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <AnimatedBackground />
        <Analytics />
        <Disclosure />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
