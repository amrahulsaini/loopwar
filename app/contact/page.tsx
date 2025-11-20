export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-page section">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Get In Touch
          </h1>
          <p className="text-lg text-gray-700">
            Have a project in mind? We'd love to hear from you. Let's discuss how we can help bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container-page section">
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="card text-center hover-lift">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--color-primary)" }}>Email Us</h3>
            <div className="space-y-1 text-sm">
              <div>
                <a href="mailto:contact@loopwar.dev" className="underline hover:no-underline">
                  contact@loopwar.dev
                </a>
              </div>
              <div>
                <a href="mailto:admin@loopwar.dev" className="underline hover:no-underline">
                  admin@loopwar.dev
                </a>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: "var(--color-secondary-2)" }}>
              We typically respond within 24 hours
            </p>
          </div>

          <div className="card text-center hover-lift">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--color-primary)" }}>Call Us</h3>
            <div className="space-y-1">
              <a href="tel:+916377362603" className="text-lg font-semibold underline hover:no-underline">
                +91 63773 62603
              </a>
            </div>
            <p className="text-xs mt-3" style={{ color: "var(--color-secondary-2)" }}>
              Mon–Sat, 9 AM – 7 PM IST
            </p>
          </div>

          <div className="card text-center hover-lift">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--color-primary)" }}>Visit Website</h3>
            <div className="space-y-1">
              <a href="https://loopwar.dev" target="_blank" rel="noreferrer" className="underline hover:no-underline break-all">
                https://loopwar.dev
              </a>
            </div>
            <p className="text-xs mt-3" style={{ color: "var(--color-secondary-2)" }}>
              Available 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container-page section">
        <div className="card max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Send Us a Message
          </h2>
          <form className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="ai-automation">AI & Automation</option>
                  <option value="cloud-hosting">Cloud Hosting</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I agree to the <a href="/privacy" className="underline">Privacy Policy</a> and consent to LoopWar contacting me about this inquiry.
              </label>
            </div>

            <button type="submit" className="btn w-full hover-lift">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Business Hours */}
      <section className="container-page section">
        <div className="card max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Business Hours
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: "var(--color-border)" }}>
              <span className="font-semibold">Monday – Friday</span>
              <span>9:00 AM – 7:00 PM IST</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: "var(--color-border)" }}>
              <span className="font-semibold">Saturday</span>
              <span>9:00 AM – 7:00 PM IST</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="font-semibold">Sunday</span>
              <span className="text-gray-500">Closed</span>
            </div>
          </div>
          <p className="text-sm mt-4 text-center" style={{ color: "var(--color-secondary-2)" }}>
            📧 Email inquiries are answered 24/7 within 24 hours
          </p>
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
