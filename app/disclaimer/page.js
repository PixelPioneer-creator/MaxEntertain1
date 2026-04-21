"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <main>
      <section className="info-hero">
        <motion.h1 
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Disclaimer
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
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="contact-icon" style={{ margin: '0 auto 20px', width: '64px', height: '64px' }}>
              <AlertTriangle size={32} />
            </div>
          </div>

          <h2>1. General Information</h2>
          <p>
            The information provided by MaxEntertain ("we," "us," or "our") on maxentertain.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <h2>2. Affiliate Disclaimer</h2>
          <p>
            The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliate relationships include, but are not limited to, partnerships with major entertainment providers, ticket vendors, and gaming platforms.
          </p>
          <p>
            Please note that having an affiliate relationship does not influence our team's commitment to finding the best possible deals for our users. We prioritize the utility and validity of a deal over the potential commission earned.
          </p>

          <h2>3. External Links Disclaimer</h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>

          <h2>4. Errors and Omissions Disclaimer</h2>
          <p>
            While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, MaxEntertain is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information.
          </p>

          <h2>5. Use at Your Own Risk</h2>
          <p>
            The deals and coupons found on this site are for personal use only. The validity of coupons can change within minutes. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
