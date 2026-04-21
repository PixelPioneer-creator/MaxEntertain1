"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          className="info-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Last Updated: April 16, 2026
        </motion.p>
      </section>

      <div className="info-container">
        <motion.div 
          className="info-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            At MaxEntertain, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.
          </p>

          <h2>1. Information We Collect</h2>
          <p> We may collect information about you in a variety of ways. The information we may collect on the Website includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Website.</li>
            <li><strong>Cookie Data:</strong> We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Website to help customize the Website and improve your experience.</li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:</p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Website.</li>
            <li>Generate a personal profile about you to make future visits to the Website more personalized.</li>
            <li>Increase the efficiency and operation of the Website.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            <li><strong>Interactions with Other Users:</strong> If you interact with other users of the Website, those users may see your name, profile photo, and descriptions of your activity.</li>
            <li><strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
          </ul>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>
            MaxEntertain Support<br />
            Email: privacy@maxentertain.com
          </p>
        </motion.div>
      </div>
    </main>
  );
}
