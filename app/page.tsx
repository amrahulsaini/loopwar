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
              LoopWar Enterprises is a modern freelancing agency bringing together talented developers,
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

      {/* Strategic Partnerships */}
  <section className="container-page section animate-fade-up" style={{ ['--delay' as any]: '70ms' }}>
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="section-title">Strategic Partnerships</h2>
            <p className="section-subtitle">Powering innovation together</p>
            <p className="max-w-3xl mx-auto">
              LoopWar Enterprises works hand-in-hand with industry-leading platforms to deliver 
              comprehensive digital solutions. Our partnerships enable us to provide specialized 
              tools and services that drive real business outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* DinePlus */}
            <div className="card hover-lift">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
                    D+
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">DinePlus</h3>
                    <p className="text-sm" style={{ color: "var(--color-secondary-2)" }}>Complete Restaurant & Café Management</p>
                  </div>
                </div>
                
                <p>
                  Transform your food business with DinePlus — a comprehensive cloud-based POS system 
                  designed specifically for restaurants, cafés, cloud kitchens, and food chains. Built 
                  with the same excellence as industry leaders like Petpooja, DinePlus brings enterprise-grade 
                  features to businesses of all sizes.
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold">Complete Business Solutions:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Smart POS System</strong> — Lightning-fast billing with KOT management, table ordering, and split bills</li>
                    <li><strong>Kitchen Display System (KDS)</strong> — Real-time order tracking with automated kitchen workflows</li>
                    <li><strong>Inventory Management</strong> — Track stock levels, recipe costing, vendor management, and waste control</li>
                    <li><strong>Multi-Channel Ordering</strong> — Unified dashboard for dine-in, takeaway, delivery, and online orders</li>
                    <li><strong>CRM & Loyalty Programs</strong> — Customer database, automated rewards, and personalized promotions</li>
                    <li><strong>Delivery Integration</strong> — Seamless sync with Zomato, Swiggy, and your own delivery fleet</li>
                    <li><strong>Staff Management</strong> — Attendance tracking, shift scheduling, performance analytics, and payroll integration</li>
                    <li><strong>Financial Reporting</strong> — Comprehensive sales reports, profit margins, tax filing support, and expense tracking</li>
                    <li><strong>Menu Engineering</strong> — Dynamic pricing, combo offers, happy hours, and seasonal menu management</li>
                    <li><strong>QR Code Ordering</strong> — Contactless table ordering with digital menus and instant payment</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Advanced Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Multi-location management with centralized control</li>
                    <li>Real-time analytics and business intelligence dashboards</li>
                    <li>Automated GST compliance and invoice generation</li>
                    <li>Customer feedback and review management</li>
                    <li>Recipe management with ingredient tracking</li>
                    <li>Table reservation system with waitlist management</li>
                    <li>Integration with accounting software (Tally, QuickBooks)</li>
                    <li>24/7 cloud backup with offline mode support</li>
                  </ul>
                </div>

                <div className="p-3 rounded border" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-secondary)" }}>
                  <p className="text-sm">
                    <strong>Perfect for:</strong> Fine dining restaurants, quick-service restaurants (QSR), 
                    cafés, cloud kitchens, food courts, bakeries, bars & pubs, and multi-chain franchises.
                  </p>
                </div>

                <p className="text-sm" style={{ color: "var(--color-secondary-2)" }}>
                  DinePlus helps you reduce order errors by 95%, increase table turnover by 40%, 
                  save 15+ hours weekly on manual tasks, and boost customer retention through 
                  data-driven insights.
                </p>
              </div>
            </div>

            {/* Xirevo */}
            <div className="card hover-lift">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: "var(--color-accent)", color: "white" }}>
                    Xi
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Xirevo.com</h3>
                    <p className="text-sm" style={{ color: "var(--color-secondary-2)" }}>AI-Powered Visual Content Creation</p>
                  </div>
                </div>
                
                <p>
                  Revolutionize your visual content strategy with Xirevo — an advanced AI-powered platform 
                  offering thousands of pre-built templates for rapid image generation. Harness the power 
                  of state-of-the-art AI models to create stunning visuals in seconds, not hours.
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold">Comprehensive Template Library:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Marketing & Advertising</strong> — Social media posts, banner ads, product showcases, promotional graphics</li>
                    <li><strong>Brand Identity</strong> — Logo variations, brand assets, style guides, color palettes, typography systems</li>
                    <li><strong>E-Commerce</strong> — Product mockups, lifestyle shots, packaging designs, seasonal campaigns</li>
                    <li><strong>Social Media</strong> — Instagram stories, Facebook covers, LinkedIn posts, Twitter headers, TikTok thumbnails</li>
                    <li><strong>Business Materials</strong> — Presentation slides, infographics, reports, newsletters, business cards</li>
                    <li><strong>Food & Hospitality</strong> — Menu designs, food photography styles, restaurant promotions, event posters</li>
                    <li><strong>Real Estate</strong> — Property showcases, virtual staging, brochures, signage, floor plans</li>
                    <li><strong>Fashion & Lifestyle</strong> — Lookbooks, catalog layouts, mood boards, editorial spreads</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">AI-Powered Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Fast AI Models</strong> — Generate high-quality images in 2-5 seconds using cutting-edge Stable Diffusion, DALL-E, and Midjourney-grade models</li>
                    <li><strong>Smart Templates</strong> — Industry-specific templates with AI-optimized prompts for consistent results</li>
                    <li><strong>Style Transfer</strong> — Apply brand aesthetics across all generated content automatically</li>
                    <li><strong>Batch Generation</strong> — Create hundreds of variations simultaneously for A/B testing</li>
                    <li><strong>Auto-Optimization</strong> — AI automatically adjusts composition, lighting, and colors for maximum impact</li>
                    <li><strong>Background Removal & Replacement</strong> — Intelligent object detection and scene composition</li>
                    <li><strong>Text-to-Image</strong> — Transform detailed descriptions into pixel-perfect visuals</li>
                    <li><strong>Image Enhancement</strong> — Upscale to 4K, remove noise, fix lighting, and restore details</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Professional Workflow Tools:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Brand kit management with saved colors, fonts, and logos</li>
                    <li>Template customization with drag-and-drop editor</li>
                    <li>Multi-format export (PNG, JPG, SVG, PDF) with size optimization</li>
                    <li>Team collaboration with shared workspaces and version control</li>
                    <li>Scheduled content generation for social media calendars</li>
                    <li>API access for seamless integration with your existing tools</li>
                    <li>Asset library with unlimited cloud storage</li>
                    <li>Analytics dashboard tracking engagement and performance</li>
                  </ul>
                </div>

                <div className="p-3 rounded border" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-secondary)" }}>
                  <p className="text-sm">
                    <strong>Perfect for:</strong> Digital marketing agencies, e-commerce brands, social media managers, 
                    content creators, real estate firms, restaurants, startups, and enterprises needing 
                    high-volume visual content production.
                  </p>
                </div>

                <p className="text-sm" style={{ color: "var(--color-secondary-2)" }}>
                  Xirevo reduces content creation time by 90%, cuts design costs by 80%, and enables 
                  businesses to produce 10x more visual content. With over 5,000+ templates and 
                  growing daily, you'll never run out of creative possibilities.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
            <p className="text-lg">
              These partnerships empower LoopWar Enterprises to deliver end-to-end solutions — from building 
              your digital presence to managing your operations and creating stunning visual content. 
              Together, we're redefining what's possible in the digital economy.
            </p>
          </div>
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
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="/contact" className="hover:underline">Contact Us</a>
          <span>•</span>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <span>•</span>
          <a href="/refund" className="hover:underline">Refund Policy</a>
          <span>•</span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="text-center">
          © {new Date().getFullYear()} Loopwar
        </div>
      </footer>
    </div>
  );
}
