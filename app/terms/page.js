"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Terms of Use
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
            Welcome to MaxEntertain. By accessing or using our website, you agree to comply with and be bound by the following Terms of Use. Please review these terms carefully.
          </p>

          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and MaxEntertain ("we", "us", or "our"), concerning your access to and use of the website at maxentertain.com.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
          </p>

          <h2>3. User Representations</h2>
          <p>By using the Website, you represent and warrant that:</p>
          <ul>
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
            <li>You will not access the Website through automated or non-human means, whether through a bot, script or otherwise.</li>
            <li>You will not use the Website for any illegal or unauthorized purpose.</li>
          </ul>

          <h2>4. Coupon & Deal Disclaimer</h2>
          <p>
            The coupons and deals listed on MaxEntertain are provided for informational purposes only. While we strive to verify every deal, we do not guarantee the validity, accuracy, or availability of any specific offer. Coupons may expire or be modified by the respective merchant at any time without notice.
          </p>

          <h2>5. Third-Party Websites</h2>
          <p>
            The Website may contain links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties. We are not responsible for any Third-Party Websites accessed through our platform.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms of Use.
          </p>

          <h2>8. Contact Us</h2>
          <p>To resolve a complaint regarding the Website or to receive further information regarding use of the Website, please contact us at:</p>
          <p>
            MaxEntertain Legal Team<br />
            Email: legal@maxentertain.com
          </p>
        </motion.div>
      </div>
    </main>
  );
}
