export default function Refund() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-page section">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Refund Policy
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
              <h2 className="section-title">1. Overview</h2>
              <p>
                At LoopWar, we are committed to delivering high-quality services and ensuring customer satisfaction. This Refund Policy outlines the conditions under which refunds may be issued for our services.
              </p>
              <p>
                By engaging our services, you acknowledge and agree to this Refund Policy.
              </p>
            </div>

            {/* Project-Based Services */}
            <div>
              <h2 className="section-title">2. Project-Based Services</h2>
              
              <h3 className="font-semibold text-lg mt-4 mb-2">2.1 Advance Payment</h3>
              <p>
                Advance payments (typically 30-50%) are <strong>non-refundable</strong> once the project has commenced and work has begun. This covers:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Initial planning and consultation</li>
                <li>Resource allocation</li>
                <li>Project setup and configuration</li>
                <li>Research and discovery phase</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">2.2 Milestone Payments</h3>
              <p>
                Milestone payments are due upon completion of agreed-upon deliverables. Once a milestone is completed and approved by the client, the payment is <strong>non-refundable</strong>.
              </p>

              <h3 className="font-semibold text-lg mt-4 mb-2">2.3 Project Cancellation by Client</h3>
              <p>
                If you choose to cancel the project:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Before work begins: Full refund minus any consultation fees (₹5,000 or 10%, whichever is lower)</li>
                <li>After work begins: No refund on advance payment; you will receive all completed work</li>
                <li>Mid-project: Payment required for all completed work; remaining balance may be refunded</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">2.4 Project Cancellation by LoopWar</h3>
              <p>
                In rare cases where we must cancel a project (due to unforeseen circumstances), you will receive:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full refund of all payments made</li>
                <li>All work completed up to that point</li>
                <li>Assistance in transitioning to another service provider</li>
              </ul>
            </div>

            {/* Subscription Services */}
            <div>
              <h2 className="section-title">3. Subscription Services (Hosting, Maintenance, etc.)</h2>
              
              <h3 className="font-semibold text-lg mt-4 mb-2">3.1 Monthly Subscriptions</h3>
              <p>
                Monthly subscriptions are billed in advance and are <strong>non-refundable</strong>. You may cancel at any time, and the service will continue until the end of the current billing period.
              </p>

              <h3 className="font-semibold text-lg mt-4 mb-2">3.2 Annual Subscriptions</h3>
              <p>
                Annual subscriptions paid in advance may be eligible for a prorated refund if:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cancellation occurs within the first 30 days</li>
                <li>Less than 20% of the service period has elapsed</li>
                <li>No major customizations or setup work has been performed</li>
              </ul>
              <p>
                Refund amount = (Remaining months / 12) × Annual fee × 80%
              </p>

              <h3 className="font-semibold text-lg mt-4 mb-2">3.3 Service Downtime</h3>
              <p>
                If our services experience downtime exceeding our SLA commitment (99.9% uptime), you may be eligible for service credits calculated as:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>1-5% downtime: 10% credit</li>
                <li>5-10% downtime: 25% credit</li>
                <li>10%+ downtime: 50% credit</li>
              </ul>
              <p className="text-sm" style={{ color: "var(--color-secondary-2)" }}>
                Credits are applied to your next billing cycle and do not constitute cash refunds.
              </p>
            </div>

            {/* VPS & Cloud Hosting */}
            <div>
              <h2 className="section-title">4. VPS & Cloud Hosting Services</h2>
              
              <h3 className="font-semibold text-lg mt-4 mb-2">4.1 New Accounts</h3>
              <p>
                We offer a <strong>7-day money-back guarantee</strong> for new VPS/cloud hosting accounts. Refund conditions:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request must be made within 7 days of service activation</li>
                <li>Bandwidth usage must not exceed 100 GB</li>
                <li>No violations of Terms of Service</li>
                <li>Setup fees and domain registrations are non-refundable</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">4.2 Upgrades & Add-ons</h3>
              <p>
                Server upgrades, additional resources, and add-on services are <strong>non-refundable</strong>.
              </p>

              <h3 className="font-semibold text-lg mt-4 mb-2">4.3 Account Termination</h3>
              <p>
                If you terminate your hosting account mid-cycle, no prorated refunds will be issued for the unused portion.
              </p>
            </div>

            {/* Ineligible for Refund */}
            <div>
              <h2 className="section-title">5. Services Not Eligible for Refund</h2>
              <p>
                The following are <strong>non-refundable</strong> under all circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Domain name registrations and renewals</li>
                <li>Third-party licenses (software, plugins, themes, etc.)</li>
                <li>SSL certificates</li>
                <li>One-time setup fees</li>
                <li>Consultation and advisory services already rendered</li>
                <li>Marketing campaigns after launch</li>
                <li>Services where work has been delivered and approved</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div>
              <h2 className="section-title">6. Refund Process</h2>
              
              <h3 className="font-semibold text-lg mt-4 mb-2">6.1 How to Request</h3>
              <p>
                To request a refund, please contact us with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your full name and contact information</li>
                <li>Invoice/transaction ID</li>
                <li>Reason for refund request</li>
                <li>Supporting documentation (if applicable)</li>
              </ul>
              <p>
                📧 Email: <a href="mailto:contact@loopwar.dev" className="underline">contact@loopwar.dev</a> or <a href="mailto:admin@loopwar.dev" className="underline">admin@loopwar.dev</a>
              </p>

              <h3 className="font-semibold text-lg mt-4 mb-2">6.2 Processing Time</h3>
              <p>
                Refund requests are reviewed within <strong>3-5 business days</strong>. Approved refunds are processed within:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Bank transfer: 5-7 business days</li>
                <li>UPI: 1-2 business days</li>
                <li>Credit/Debit card: 7-14 business days (depending on your bank)</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">6.3 Partial Refunds</h3>
              <p>
                In some cases, we may offer partial refunds based on:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Percentage of work completed</li>
                <li>Resources consumed</li>
                <li>Time invested in the project</li>
              </ul>
            </div>

            {/* Disputes */}
            <div>
              <h2 className="section-title">7. Disputes</h2>
              <p>
                If you are not satisfied with our refund decision, you may:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request a review by escalating to management</li>
                <li>Provide additional documentation supporting your claim</li>
                <li>Seek mediation through mutually agreed channels</li>
              </ul>
              <p>
                We are committed to resolving all disputes fairly and professionally.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="section-title">8. Changes to This Policy</h2>
              <p>
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="section-title">9. Contact Us</h2>
              <p>
                For any questions regarding refunds or this policy, please contact us:
              </p>
              <ul className="list-none space-y-1">
                <li>📧 Email: <a href="mailto:contact@loopwar.dev" className="underline">contact@loopwar.dev</a></li>
                <li>📧 Email: <a href="mailto:admin@loopwar.dev" className="underline">admin@loopwar.dev</a></li>
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
