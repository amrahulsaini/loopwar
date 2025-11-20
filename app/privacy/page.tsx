export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-page section">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "var(--color-secondary-2)" }}>
            Last Updated: November 20, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container-page section">
        <div className="card max-w-4xl mx-auto prose prose-sm md:prose-base">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="section-title">1. Introduction</h2>
              <p>
                LoopWar ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                By using our services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="section-title">2. Information We Collect</h2>
              
              <h3 className="font-semibold text-lg mt-4 mb-2">2.1 Personal Information</h3>
              <p>
                We may collect personally identifiable information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact details (email, phone number, address)</li>
                <li>Company name and business information</li>
                <li>Payment and billing information</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Operating system and device identifiers</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">2.3 Information from Third Parties</h3>
              <p>
                We may receive information from:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Analytics providers (Google Analytics, etc.)</li>
                <li>Payment processors</li>
                <li>Social media platforms (if you interact with us there)</li>
                <li>Business partners and referral sources</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="section-title">3. How We Use Your Information</h2>
              <p>
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
                <li><strong>Billing:</strong> To process payments and send invoices</li>
                <li><strong>Marketing:</strong> To send promotional materials (with your consent)</li>
                <li><strong>Analytics:</strong> To understand how our services are used and improve user experience</li>
                <li><strong>Security:</strong> To detect fraud and protect against security threats</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="section-title">4. How We Share Your Information</h2>
              <p>
                We do not sell your personal information. We may share information with:
              </p>
              
              <h3 className="font-semibold text-lg mt-4 mb-2">4.1 Service Providers</h3>
              <p>
                Third-party vendors who assist us with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cloud hosting (Google Cloud, AWS, etc.)</li>
                <li>Payment processing (Razorpay, Stripe, etc.)</li>
                <li>Email services and marketing tools</li>
                <li>Analytics and performance monitoring</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">4.2 Legal Requirements</h3>
              <p>
                We may disclose information if required by:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Law enforcement or government agencies</li>
                <li>Court orders or legal processes</li>
                <li>Protection of our rights and safety</li>
                <li>Prevention of fraud or illegal activities</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">4.3 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="section-title">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers with firewalls and intrusion detection</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>
                However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="section-title">6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
              
              <h3 className="font-semibold text-lg mt-4 mb-2">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for website operation</li>
                <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="section-title">7. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p>
                Typical retention periods:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Project data: Duration of project + 3 years</li>
                <li>Financial records: 7 years (as per Indian tax laws)</li>
                <li>Marketing data: Until consent is withdrawn</li>
                <li>Website analytics: 26 months (Google Analytics default)</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="section-title">8. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Object:</strong> Object to certain data processing activities</li>
              </ul>
              <p>
                To exercise these rights, contact us at <a href="mailto:contact@loopwar.dev" className="underline">contact@loopwar.dev</a>
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="section-title">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="section-title">10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from children. If we become aware of such collection, we will delete it promptly.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="section-title">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="section-title">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The "Last Updated" date at the top indicates when the policy was last revised. We encourage you to review this policy periodically.
              </p>
              <p>
                Material changes will be communicated via email or prominent notice on our website.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="section-title">13. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none space-y-1">
                <li>📧 Email: <a href="mailto:contact@loopwar.dev" className="underline">contact@loopwar.dev</a></li>
                <li>📧 Email: <a href="mailto:admin@loopwar.dev" className="underline">admin@loopwar.dev</a></li>
                <li>📞 Phone: <a href="tel:+916377362603" className="underline">+91 63773 62603</a></li>
                <li>🌐 Website: <a href="https://loopwar.dev" className="underline">https://loopwar.dev</a></li>
              </ul>
            </div>

            {/* Consent */}
            <div className="bg-gray-50 p-4 rounded-lg border" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-sm font-semibold mb-2">Your Consent</p>
              <p className="text-sm">
                By using our website and services, you consent to our Privacy Policy and agree to its terms. If you do not agree, please discontinue use of our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container-page pb-10">
        <div className="text-center">
          <a href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Home</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-page pb-10 text-sm text-center" style={{ color: "var(--color-secondary-2)" }}>
        © {new Date().getFullYear()} Loopwar
      </footer>
    </div>
  );
}
