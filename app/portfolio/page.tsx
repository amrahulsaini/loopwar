"use client";

import { useState, useEffect } from "react";
import OptionalImage from "../components/OptionalImage";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"startups" | "freelance">("startups");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const startups = [
    {
      id: 1,
      name: "MyAIDiary",
      url: "https://myaidiary.me",
      description: "Your intelligent daily companion for journaling. Write daily notes and let AI help you enhance your thoughts, organize memories, and gain insights from your entries.",
      features: ["AI-Powered Writing Assistant", "Daily Note Management", "Smart Content Enhancement", "Personal Growth Tracking"],
      color: "#667eea",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      name: "Xirevoa",
      url: "https://xirevoa.com",
      description: "Transform your ideas into stunning visuals. Create professional images using our extensive library of built-in templates with an intuitive, powerful editor.",
      features: ["Template Library", "Drag & Drop Editor", "Professional Export", "Real-time Preview"],
      color: "#f093fb",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const freelanceProjects = [
    {
      id: 1,
      name: "Sahara Multispeciality Hospital",
      url: "https://www.saharamultispecialityhospital.com",
      description: "Comprehensive healthcare website featuring appointment booking, department information, and patient resources.",
      category: "Healthcare",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      name: "CaseBuddy",
      url: "https://casebuddy.co.in",
      description: "Advanced legal case management platform designed to streamline workflow for legal professionals.",
      category: "Legal Tech",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      name: "Mridang",
      url: "https://mridang.co.in",
      description: "Cultural platform celebrating traditional music and arts with modern digital experiences.",
      category: "Culture & Arts",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative container-page section">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-shape shape-1" style={{ top: "10%", left: "10%" }}></div>
          <div className="floating-shape shape-2" style={{ top: "60%", right: "15%" }}></div>
          <div className="floating-shape shape-3" style={{ bottom: "20%", left: "20%" }}></div>
          <div className="pulse-circle" style={{ top: "30%", right: "30%" }}></div>
          <div className="pulse-circle" style={{ bottom: "40%", left: "40%", animationDelay: "1s" }}></div>
        </div>

        <div className={`relative z-10 text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Our Portfolio
            </h1>
            <div className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "200ms" }}>
            Discover our innovative startups and successful client projects
          </p>
        </div>
      </section>

      {/* Tab Navigation with Smooth Transitions */}
      <section className="container-page section">
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-4 p-2 rounded-2xl border-2 border-gray-300 bg-white/50 backdrop-blur-sm shadow-lg">
            <button
              onClick={() => setActiveTab("startups")}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform ${
                activeTab === "startups"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white scale-105 shadow-xl"
                  : "bg-transparent text-gray-700 hover:bg-gray-100 hover:scale-105"
              }`}
            >
              🚀 Our Startups
            </button>
            <button
              onClick={() => setActiveTab("freelance")}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform ${
                activeTab === "freelance"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white scale-105 shadow-xl"
                  : "bg-transparent text-gray-700 hover:bg-gray-100 hover:scale-105"
              }`}
            >
              💼 Client Projects
            </button>
          </div>
        </div>

        {/* Startups Section */}
        <div
          className={`transition-all duration-700 ${
            activeTab === "startups"
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-10 scale-95 absolute pointer-events-none"
          }`}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {startups.map((startup, index) => (
              <div
                key={startup.id}
                onMouseEnter={() => setHoveredCard(startup.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-3xl border-2 transition-all duration-700 transform ${
                  hoveredCard === startup.id
                    ? "scale-105 shadow-2xl border-transparent -translate-y-2"
                    : "scale-100 shadow-lg border-gray-200 hover:shadow-xl"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  background: hoveredCard === startup.id 
                    ? `linear-gradient(135deg, ${startup.color}15, ${startup.color}05)`
                    : "white"
                }}
              >
                {/* Animated Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${startup.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
                     style={{ padding: "2px" }}>
                  <div className="h-full w-full bg-white rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Animated Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${startup.gradient} flex items-center justify-center text-3xl font-bold text-white shadow-lg transform transition-all duration-500 ${
                      hoveredCard === startup.id ? "rotate-12 scale-110" : "rotate-0 scale-100"
                    }`}>
                      {startup.name.charAt(0)}
                    </div>
                    <div className={`transition-all duration-500 ${hoveredCard === startup.id ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}>
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className={`text-3xl font-bold mb-2 transition-all duration-500 ${
                      hoveredCard === startup.id ? "bg-gradient-to-r bg-clip-text text-transparent " + startup.gradient : "text-gray-900"
                    }`}>
                      {startup.name}
                    </h3>
                    <a
                      href={startup.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                    >
                      {startup.url.replace("https://", "")}
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {startup.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {startup.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 transition-all duration-500`}
                        style={{
                          transitionDelay: hoveredCard === startup.id ? `${idx * 50}ms` : "0ms",
                          transform: hoveredCard === startup.id ? "translateX(0)" : "translateX(-10px)",
                          opacity: hoveredCard === startup.id ? 1 : 0.7
                        }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${startup.gradient} transition-all duration-300 ${
                          hoveredCard === startup.id ? "scale-150" : "scale-100"
                        }`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={startup.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform ${
                      hoveredCard === startup.id
                        ? `bg-gradient-to-r ${startup.gradient} text-white shadow-lg scale-105`
                        : "bg-gray-100 text-gray-700 scale-100"
                    }`}
                  >
                    Visit {startup.name}
                    <svg className={`w-5 h-5 transition-transform duration-500 ${hoveredCard === startup.id ? "translate-x-1" : ""}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r ${startup.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-1000`}></div>
                <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r ${startup.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-1000`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance Projects Section */}
        <div
          className={`transition-all duration-700 ${
            activeTab === "freelance"
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 -translate-x-10 scale-95 absolute pointer-events-none"
          }`}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {freelanceProjects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCard(project.id + 100)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform ${
                  hoveredCard === project.id + 100
                    ? "scale-105 shadow-2xl -translate-y-3"
                    : "scale-100 shadow-lg hover:shadow-xl"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-700 ${
                  hoveredCard === project.id + 100 ? "scale-110" : "scale-100"
                }`}></div>

                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>

                {/* Content */}
                <div className="relative p-8 space-y-4 text-white min-h-[320px] flex flex-col justify-between">
                  {/* Category Badge */}
                  <div className="inline-flex">
                    <span className={`px-4 py-2 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md transition-all duration-500 ${
                      hoveredCard === project.id + 100 ? "bg-white/30 scale-110" : "scale-100"
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-2xl font-bold transition-all duration-500 ${
                      hoveredCard === project.id + 100 ? "translate-x-2" : "translate-x-0"
                    }`}>
                      {project.name}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-gray-900 transition-all duration-500 transform ${
                      hoveredCard === project.id + 100 ? "translate-x-2 shadow-xl" : "translate-x-0"
                    } hover:scale-105`}
                  >
                    View Project
                    <svg className={`w-5 h-5 transition-transform duration-500 ${hoveredCard === project.id + 100 ? "translate-x-1" : ""}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 border-4 border-white/20 rounded-3xl transition-all duration-700 ${
                  hoveredCard === project.id + 100 ? "border-white/40 scale-105" : "scale-100"
                }`}></div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-700 rounded-3xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`container-page section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 text-center text-white shadow-2xl">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="cta-pattern"></div>
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold animate-bounce-slow">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-95">
              Let's collaborate and bring your ideas to life with cutting-edge technology
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Start a Project
              </a>
              <a
                href="mailto:contact@loopwar.com"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transform transition-all duration-300 hover:scale-110"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .floating-shape {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
          animation: float 6s ease-in-out infinite;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          animation-delay: 1s;
          animation-duration: 7s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          animation-delay: 2s;
          animation-duration: 8s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        .pulse-circle {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .cta-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px);
          animation: pattern-move 20s linear infinite;
        }

        @keyframes pattern-move {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(70px) translateY(70px);
          }
        }
      `}</style>
    </div>
  );
}
