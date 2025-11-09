import OptionalImage from "./components/OptionalImage";
import Typewriter from "./components/Typewriter";
import StartupModal from "./components/StartupModal";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StartupModal />
      {/* Hero */}
      <header className="container-page section">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Typewriter
              text="LoopWar — Freelancers Who Design, Build, and Inspire"
              className="kicker animate-fade-up"
              speed={35}
              startDelay={100}
              caret
            />
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-up" style={{ ['--delay' as any]: '80ms', color: "var(--color-text-heading)", fontFamily: "var(--font-montserrat)" }}>
              We design, build, and ship smart, beautiful digital products
            </h1>
            <p className="text-lg leading-relaxed animate-fade-up" style={{ ['--delay' as any]: '160ms', color: "var(--color-text-body)" }}>
              We build high‑performing websites and apps that help your business grow online.
              Our AI‑powered solutions blend cutting‑edge tech with elegant design to deliver
              experiences that captivate users and drive measurable results.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ ['--delay' as any]: '220ms' }}>
              <a className="btn hover-lift" href="/loopwar-final-brochure.pdf" download>
                Download brochure
              </a>
              <a className="btn secondary hover-lift" href="#brochure">
                View online
              </a>
            </div>
          </div>

          {/* Right column now displays a decorative placeholder instead of color swatches */}
          <OptionalImage
            src="/loop1.jpg"
            alt="Ideas turning into products"
            prompt="Hero illustration: neat line art of laptop, pen, and spark icon symbolizing ideas‑to‑product; minimal, black strokes on warm beige"
            className="media"
          />
        </div>
      </header>

      {/* Who We Are */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '60ms' }}>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-subtitle">Next‑Gen Freelancing Studio</p>
            <p>
              LoopWar is a modern freelancing agency bringing together talented developers,
              designers, and creators to build high‑quality digital solutions. From websites to
              mobile apps, we turn ideas into products that perform, engage, and grow your business.
            </p>
            <p>
              Our freelancers combine creativity, technology, and experience to deliver work that’s
              smart, scalable, and beautifully designed. At LoopWar, we don’t just complete projects —
              we help you achieve real results.
            </p>
          </div>
          <OptionalImage
            src="/loop2.jpg"
            alt="Collaborative studio team"
            prompt="Minimal line art of a collaborative studio: designer, developer, and strategist around a desk with laptops; warm beige background; thin black lines; modern tech vibes"
            className="media"
          />
        </div>
      </section>

      {/* Why Choose LoopWar */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '80ms' }}>
          <h2 className="section-title">Why LoopWar</h2>
          <p className="section-subtitle mb-4">A better way to build: flexible, fast, and focused</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold text-xl mb-2">Flexible Engagement Models</h3>
            <p>Adapt to your project needs with scalable teams and flexible contracts for optimal agility.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-xl mb-2">Cost‑Effective Solutions</h3>
            <p>Access top‑tier talent and tech without full‑time overhead, maximizing your budget.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-xl mb-2">Direct Communication</h3>
            <p>Streamlined workflows and direct access to your dedicated team for clarity and speed.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-xl mb-2">Faster Turnaround</h3>
            <p>Agile methods and focused expertise accelerate delivery and time‑to‑market.</p>
          </div>
          <div className="card md:col-span-2">
            <h3 className="font-semibold text-xl mb-2">Personalized Attention</h3>
            <p>Tailored strategies and bespoke solutions for your goals and challenges.</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="p-3 rounded border" style={{ borderColor: "var(--color-border)" }}>
                  <div className="stat-title">Cost Savings</div>
                <div className="text-lg font-semibold">—</div>
                <p className="text-sm">Average reduction vs traditional agencies</p>
              </div>
              <div className="p-3 rounded border" style={{ borderColor: "var(--color-border)" }}>
                  <div className="stat-title">Project Completion Rate</div>
                <div className="text-lg font-semibold">—</div>
                <p className="text-sm">Delivered on time and on budget</p>
              </div>
              <div className="p-3 rounded border" style={{ borderColor: "var(--color-border)" }}>
                  <div className="stat-title">Client Satisfaction</div>
                <div className="text-lg font-semibold">—</div>
                <p className="text-sm">Average rating for service and quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page section">
          <h2 className="section-title">Process</h2>
          <p className="section-subtitle mb-4">Simple, transparent, effective</p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Initial Consultation","Understand goals, requirements, and outcomes for clear alignment."],
            ["Project Scoping & Proposal","Define scope, deliverables, timeline, costs, and milestones."],
            ["Team Assembly","Handpick experts with the right blend of skills and experience."],
            ["Development Phases","Agile sprints with ongoing progress and regular check‑ins."],
            ["Regular Updates & Feedback","Integrate your feedback at every stage to refine the product."],
            ["Testing & Delivery","Rigorous QA, seamless deployment, and delivery."],
            ["Post‑Launch Support","Ongoing maintenance and optimizations for long‑term success."],
          ].map(([title, body]) => (
            <div key={String(title)} className="card hover-lift">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm" style={{ color: "var(--color-secondary-2)" }}>
          We offer flexible payment terms and milestone‑based billing for financial clarity.
        </p>
      </section>

      {/* Team */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '100ms' }}>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4 animate-fade-up" style={{ ['--delay' as any]: '120ms' }}>
              <h2 className="section-title">Team</h2>
              <p className="section-subtitle">Meet our expert freelance network</p>
            <p>
              LoopWar partners with a curated network of top professionals — innovators and
              problem‑solvers who bring your projects to life.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 list-disc pl-5">
              <li><strong>Full‑stack Developers</strong> — End‑to‑end web and app development.</li>
              <li><strong>UI/UX Designers</strong> — Intuitive and engaging experiences.</li>
              <li><strong>AI Specialists</strong> — Automation and actionable insights.</li>
              <li><strong>DevOps Engineers</strong> — Streamlined workflows and operations.</li>
              <li><strong>Project Managers</strong> — From concept to successful delivery.</li>
            </ul>
            <p>
              Rigorous vetting ensures technical proficiency, proven track record, and excellent
              communication. Scale effortlessly without full‑time hiring overhead.
            </p>
          </div>
          <OptionalImage
            src="/loop3.jpg"
            alt="Network of professionals"
            prompt="Abstract line art of networked professionals connected by nodes; simple human figures; monochrome on warm beige"
            className="media"
          />
        </div>
      </section>

      {/* Expertise */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '120ms' }}>
          <h2 className="section-title">Expertise</h2>
          <p className="section-subtitle mb-4">Core capabilities</p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Custom Website & App Development","Tailored solutions built from the ground up."],
            ["AI & Automation Integration","Streamline operations with intelligent systems."],
            ["Cloud Infrastructure & DevOps","Scalable, secure hosting with CI/CD."],
            ["UI/UX Design","Beautiful, intuitive interfaces that drive engagement."],
            ["Product Optimization & Maintenance","Keep products performing at their peak."],
          ].map(([title, body]) => (
            <div key={String(title)} className="card hover-lift">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* E‑Commerce */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '140ms' }}>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-2">
            <h2 className="section-title">E‑Commerce</h2>
            <p className="section-subtitle">Conversion‑focused online stores</p>
            <p>
              Secure payments, product dashboards, and responsive design — optimized to guide
              visitors from browsing to purchase.
            </p>
            <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-2">
              <li><strong>Secure Payment Integration</strong> — Multiple gateways with encryption.</li>
              <li><strong>Inventory Management</strong> — Real‑time tracking and stock updates.</li>
              <li><strong>Analytics Dashboard</strong> — Sales insights and customer behavior.</li>
              <li><strong>Mobile‑First Design</strong> — Seamless experience on all devices.</li>
            </ul>
          </div>
          <OptionalImage src="/loop4.jpg" alt="E‑commerce analytics" prompt="Line art of a shopping cart morphing into analytics charts; minimalist; black stroke on beige" className="media" />
        </div>
      </section>

      {/* Food Businesses */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '140ms' }}>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-2 md:order-1">
            <h2 className="section-title">Food & Hospitality</h2>
            <p className="section-subtitle">Smart websites for cafés and restaurants</p>
            <p>
              Enable menu updates, online table orders, and direct payments — no middlemen.
            </p>
            <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-2">
              <li><strong>Dynamic Menu Management</strong> — Update dishes and availability in real‑time.</li>
              <li><strong>Online Table Booking</strong> — Integrated reservations with reminders.</li>
              <li><strong>Direct Payment Processing</strong> — Keep 100% of your revenue.</li>
            </ul>
          </div>
          <div className="md:order-2">
            <OptionalImage src="/loop5.jpg" alt="Café ordering and menu" prompt="Line art of a café table with menu, phone ordering, and a small receipt; clean outline style" className="media animate-fade-up" />
          </div>
        </div>
      </section>

      {/* Fitness & Lifestyle */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '140ms' }}>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-2">
            <h2 className="section-title">Fitness & Lifestyle</h2>
            <p className="section-subtitle">Engaging digital experiences</p>
            <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-2">
              <li><strong>Membership Portals</strong> — Schedules, progress, personalized plans.</li>
              <li><strong>Booking & Scheduling</strong> — Real‑time availability and profiles.</li>
              <li><strong>Event Management</strong> — Ticketing, RSVPs, and promotions.</li>
            </ul>
          </div>
          <OptionalImage src="/loop6.jpg" alt="Calendar dumbbell ticket icons" prompt="Line art of a calendar, dumbbell, and ticket icons interconnected; thin strokes" className="media" />
        </div>
      </section>

      {/* Property Management */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '160ms' }}>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-2 md:order-1">
            <h2 className="section-title">Property</h2>
            <p className="section-subtitle">Simplifying PG, hostel, and real‑estate workflows</p>
            <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-2">
              <li><strong>PG & Hostel Management</strong> — Rooms, bookings, and maintenance.</li>
              <li><strong>Real Estate Listings</strong> — Virtual tours and high‑intent lead capture.</li>
              <li><strong>Tenant Dashboards</strong> — Rent, complaints, and communication.</li>
            </ul>
            <p className="text-sm" style={{ color: "var(--color-secondary-2)" }}>
              Reduce administrative workload by up to 70% with streamlined dashboards.
            </p>
          </div>
          <div className="md:order-2">
            <OptionalImage src="/loop7.jpg" alt="Buildings with dashboards" prompt="Line art of buildings with dashboard panels; minimal outlines; friendly look" className="media animate-fade-up" />
          </div>
        </div>
      </section>

      {/* Personal Branding */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '160ms' }}>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-2">
            <h2 className="section-title">Personal Branding</h2>
            <p className="section-subtitle">Portfolio sites that amplify your voice</p>
            <p>
              Showcase your identity with stunning portfolio websites — perfect for creators,
              artists, influencers, and professionals.
            </p>
            <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-2">
              <li><strong>Visual Storytelling</strong> — Galleries and media sections.</li>
              <li><strong>Achievement Highlights</strong> — Awards, press, and milestones.</li>
              <li><strong>Direct Engagement</strong> — Forms and social integration.</li>
            </ul>
          </div>
          <OptionalImage src="/loop8.jpg" alt="Portfolio homepage line art" prompt="Line art of a personal homepage with gallery frames and a signature; minimal, elegant" className="media" />
        </div>
      </section>

      {/* Local Businesses */}
      <section className="container-page section">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-2 md:order-1">
            <h2 className="section-title">Local Businesses</h2>
            <p className="section-subtitle">Crafting digital presence for local brands</p>
            <p>
              From jewelry stores to fashion boutiques, we help local businesses go digital with
              elegant websites and AI‑powered marketing tools.
            </p>
            <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-2">
              <li><strong>Product Catalogs</strong> — Beautiful showcases with filtering.</li>
              <li><strong>AI Marketing</strong> — Automated campaigns that reach the right customers.</li>
              <li><strong>Local SEO</strong> — Optimization to appear in local search results.</li>
            </ul>
          </div>
          <div className="md:order-2">
            <OptionalImage src="/loop9.jpg" alt="Boutique storefront with pin" prompt="Line art of a boutique storefront with location pin and growth arrow" className="media animate-fade-up" />
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="container-page section">
        <div className="card">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-2">
              <p className="kicker">Let’s Build Your Digital Future</p>
              <h2 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-montserrat)" }}>
                Start your project with LoopWar today
              </h2>
              <p>
                We’d love to collaborate and bring your ideas to life. Whether you’re starting from
                scratch or transforming an existing product, we’re ready to partner with you.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-sm" style={{ color: "var(--color-secondary-2)" }}>Email Us</div>
                <a className="underline" href="mailto:contact@loopwar.dev">contact@loopwar.dev</a>
                <span className="mx-2">·</span>
                <a className="underline" href="mailto:admin@loopwar.dev">admin@loopwar.dev</a>
              </div>
              <div>
                <div className="text-sm" style={{ color: "var(--color-secondary-2)" }}>Call Us</div>
                <a className="underline" href="tel:+916377362603">+91 63773 62603</a>
                <div className="text-xs" style={{ color: "var(--color-secondary-2)" }}>Mon–Sat, 9 AM – 7 PM IST</div>
              </div>
              <div>
                <div className="text-sm" style={{ color: "var(--color-secondary-2)" }}>Visit Our Website</div>
                <a className="underline" href="https://loopwar.dev" target="_blank" rel="noreferrer">https://loopwar.dev</a>
              </div>
              <div className="pt-2">
                <a className="btn" href="#contact">Start your project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure embed */}
  <section id="brochure" className="container-page pb-24 animate-fade-up" style={{ ['--delay' as any]: '180ms' }}>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Brochure
          </h2>
          <object
            data="/loopwar-final-brochure.pdf#view=fitH"
            type="application/pdf"
            className="w-full"
            style={{ height: "75vh", borderRadius: "1rem", border: "1px solid var(--color-border)", overflow: "hidden" }}
          >
            <p>
              Your browser doesn’t support inline PDFs. You can
              <a href="/loopwar-final-brochure.pdf" className="ml-1 underline" style={{ color: "var(--color-primary)" }}>
                download the brochure here
              </a>
              .
            </p>
          </object>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-page pb-10 text-sm" style={{ color: "var(--color-secondary-2)" }}>
        © {new Date().getFullYear()} Loopwar
      </footer>
    </div>
  );
}
