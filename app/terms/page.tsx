export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-page section">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Terms & Conditions
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
                Welcome to LoopWar ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p>
                If you disagree with any part of these Terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="section-title">2. Services</h2>
              <p>
                LoopWar provides freelance digital services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Website and web application development</li>
                <li>Mobile application development</li>
                <li>UI/UX design services</li>
                <li>AI and automation integration</li>
                <li>Cloud hosting and infrastructure services</li>
                <li>Digital marketing and SEO</li>
                <li>Maintenance and support services</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
              </p>
            </div>

            {/* User Obligations */}
            <div>
              <h2 className="section-title">3. User Obligations</h2>
              <p>By using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="section-title">4. Payment Terms</h2>
              <p>
                <strong>Project-Based Services:</strong> Payment terms will be outlined in the project proposal. Typically, we require:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>30-50% advance payment before project commencement</li>
                <li>Milestone-based payments as agreed upon</li>
                <li>Final payment upon project completion</li>
              </ul>
              <p>
                <strong>Subscription Services:</strong> Monthly or annual subscriptions are billed in advance. Failure to pay may result in service suspension.
              </p>
              <p>
                All prices are in Indian Rupees (INR) unless otherwise stated. Payment can be made via bank transfer, UPI, credit/debit cards, or other approved payment methods.
              </p>
            </div>

            {/* Project Scope & Changes */}
            <div>
              <h2 className="section-title">5. Project Scope & Changes</h2>
              <p>
                The scope of work will be defined in the project proposal or agreement. Any changes to the scope ("Scope Creep") may result in additional charges and timeline adjustments.
              </p>
              <p>
                Change requests must be submitted in writing and approved by both parties before implementation.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="section-title">6. Intellectual Property</h2>
              <p>
                <strong>Client-Owned IP:</strong> Upon full payment, all custom work created specifically for the client will be transferred to the client, including source code, designs, and documentation.
              </p>
              <p>
                <strong>Company-Owned IP:</strong> We retain ownership of:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pre-existing code, frameworks, and tools</li>
                <li>General methodologies and processes</li>
                <li>Third-party libraries and components</li>
              </ul>
              <p>
                We reserve the right to showcase completed projects in our portfolio unless a non-disclosure agreement is in place.
              </p>
            </div>

            {/* Warranties & Disclaimers */}
            <div>
              <h2 className="section-title">7. Warranties & Disclaimers</h2>
              <p>
                We strive to provide high-quality services but cannot guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Uninterrupted or error-free service</li>
                <li>Complete security from cyber threats</li>
                <li>Specific business outcomes or results</li>
                <li>Compatibility with all third-party systems</li>
              </ul>
              <p>
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.
              </p>
            </div>

            {/* Support & Maintenance */}
            <div>
              <h2 className="section-title">8. Support & Maintenance</h2>
              <p>
                <strong>Warranty Period:</strong> We provide a 30-day bug-fix warranty on new projects from the date of delivery.
              </p>
              <p>
                <strong>Ongoing Support:</strong> Extended support and maintenance services are available through separate agreements.
              </p>
              <p>
                Support does not cover:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Issues caused by third-party modifications</li>
                <li>Feature additions or scope changes</li>
                <li>Problems arising from hosting/server issues not managed by us</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="section-title">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, LoopWar shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages exceeding the amount paid for the specific service</li>
              </ul>
              <p>
                Our total liability is limited to the fees paid by the client for the specific service in question.
              </p>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="section-title">10. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary information shared during the engagement. This obligation survives the termination of our agreement.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="section-title">11. Termination</h2>
              <p>
                Either party may terminate the agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Client must pay for all work completed up to the termination date</li>
                <li>We will deliver all completed work and materials</li>
                <li>Refunds will be processed as per our Refund Policy</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="section-title">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="section-title">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="section-title">14. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-none space-y-1">
                <li>📧 Email: <a href="mailto:contact@loopwar.dev" className="underline">contact@loopwar.dev</a></li>
                <li>📞 Phone: <a href="tel:+916377362603" className="underline">+91 63773 62603</a></li>
                <li>🌐 Website: <a href="https://loopwar.dev" className="underline">https://loopwar.dev</a></li>
              </ul>
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
