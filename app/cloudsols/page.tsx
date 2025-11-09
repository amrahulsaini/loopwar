import Link from "next/link";

export default function CloudSols() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-page section">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
            <span className="text-sm font-semibold text-blue-800">🚀 Special Launch Offer</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Google Cloud VPS Plans
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Starting at <span className="font-bold text-indigo-600">₹299/month</span>
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium virtual private servers powered by Google Cloud infrastructure. 
            Fast, reliable, and scalable hosting solutions for your growing business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a href="#plans" className="btn hover-lift">
              View Plans
            </a>
            <a href="#contact" className="btn secondary hover-lift">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container-page section">
        <h2 className="section-title text-center mb-8">Why Choose Our Google Cloud VPS?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card hover-lift">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-xl mb-2">Lightning Fast</h3>
            <p>Premium SSDs with Google's global network ensure blazing-fast load times and low latency worldwide.</p>
          </div>
          <div className="card hover-lift">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-xl mb-2">Enterprise Security</h3>
            <p>DDoS protection, SSL certificates, automated backups, and Google's world-class security infrastructure.</p>
          </div>
          <div className="card hover-lift">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold text-xl mb-2">Scalable Resources</h3>
            <p>Upgrade RAM, CPU, and storage seamlessly as your business grows. Pay only for what you use.</p>
          </div>
          <div className="card hover-lift">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="font-semibold text-xl mb-2">Global Data Centers</h3>
            <p>Choose from multiple regions across the globe for optimal performance and compliance.</p>
          </div>
          <div className="card hover-lift">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="font-semibold text-xl mb-2">Full Root Access</h3>
            <p>Complete control over your server with root access. Install any software and configure as needed.</p>
          </div>
          <div className="card hover-lift">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold text-xl mb-2">24/7 Support</h3>
            <p>Expert technical support available around the clock via email, chat, and phone.</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="container-page section">
        <h2 className="section-title text-center mb-4">Choose Your Perfect Plan</h2>
        <p className="text-center text-gray-600 mb-10">All plans include SSD storage, 99.9% uptime SLA, and free SSL certificates</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Starter Plan */}
          <div className="card hover-lift">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-2xl mb-1" style={{ color: "var(--color-primary)" }}>Starter</h3>
                <p className="text-sm text-gray-600">Perfect for small projects</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold" style={{ color: "var(--color-primary)" }}>₹299</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>1 vCPU Core</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>1 GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>25 GB SSD Storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>1 TB Bandwidth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>1 IPv4 Address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Free SSL Certificate</span>
                </li>
              </ul>
              <button className="btn w-full">Get Started</button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="card hover-lift relative" style={{ borderColor: "var(--color-primary)", borderWidth: "2px" }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white">POPULAR</span>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-2xl mb-1" style={{ color: "var(--color-primary)" }}>Professional</h3>
                <p className="text-sm text-gray-600">Ideal for growing businesses</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold" style={{ color: "var(--color-primary)" }}>₹599</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>2 vCPU Cores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>2 GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>50 GB SSD Storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>2 TB Bandwidth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>1 IPv4 Address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Free SSL Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Weekly Backups</span>
                </li>
              </ul>
              <button className="btn w-full">Get Started</button>
            </div>
          </div>

          {/* Business Plan */}
          <div className="card hover-lift">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-2xl mb-1" style={{ color: "var(--color-primary)" }}>Business</h3>
                <p className="text-sm text-gray-600">For high-traffic applications</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold" style={{ color: "var(--color-primary)" }}>₹999</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>4 vCPU Cores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>4 GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>100 GB SSD Storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>4 TB Bandwidth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>1 IPv4 Address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Free SSL Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Daily Backups</span>
                </li>
              </ul>
              <button className="btn w-full">Get Started</button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="card hover-lift">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-2xl mb-1" style={{ color: "var(--color-primary)" }}>Enterprise</h3>
                <p className="text-sm text-gray-600">Maximum performance</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold" style={{ color: "var(--color-primary)" }}>₹1,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>8 vCPU Cores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>8 GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>200 GB SSD Storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>8 TB Bandwidth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>2 IPv4 Addresses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Free SSL Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Daily Backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Priority Support</span>
                </li>
              </ul>
              <button className="btn w-full">Get Started</button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">Need a custom configuration? <a href="#contact" className="underline font-semibold" style={{ color: "var(--color-primary)" }}>Contact us</a> for enterprise solutions.</p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container-page section">
        <h2 className="section-title text-center mb-8">Perfect For</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">🌐 Web Hosting</h3>
            <p className="text-sm">Host WordPress, Laravel, Node.js, or any web application with ease.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">📱 App Development</h3>
            <p className="text-sm">Deploy and test your mobile or web applications in a production-like environment.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">💾 Database Servers</h3>
            <p className="text-sm">Run MySQL, PostgreSQL, MongoDB, or any database with high performance.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">🎮 Game Servers</h3>
            <p className="text-sm">Low latency and high performance for multiplayer gaming experiences.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">🤖 AI & ML</h3>
            <p className="text-sm">Train models and run AI workloads with scalable compute resources.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">📊 Analytics</h3>
            <p className="text-sm">Process large datasets and run analytics tools efficiently.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-page section">
        <div className="card max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-700">
              Launch your VPS server in minutes or speak with our cloud experts to find the perfect solution for your needs.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:contact@loopwar.dev" className="btn hover-lift">
                  Email: contact@loopwar.dev
                </a>
                <a href="tel:+916377362603" className="btn secondary hover-lift">
                  Call: +91 63773 62603
                </a>
              </div>
              <p className="text-sm text-gray-600">
                💬 Available Mon–Sat, 9 AM – 7 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container-page pb-10">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-page pb-10 text-sm text-center" style={{ color: "var(--color-secondary-2)" }}>
        © {new Date().getFullYear()} Loopwar • Powered by Google Cloud
      </footer>
    </div>
  );
}
