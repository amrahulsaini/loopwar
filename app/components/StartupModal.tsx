"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StartupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show modal after a short delay when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClaim = () => {
    setIsOpen(false);
    router.push("/cloudsols");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="modal-container pointer-events-auto animate-scale-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Content */}
          <div className="text-center space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L10.163 5.38197L15 6.12139L11.5 9.52786L12.326 14.3541L8 12.082L3.674 14.3541L4.5 9.52786L1 6.12139L5.837 5.38197L8 1Z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-semibold text-orange-800">Limited Time Offer</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                Exclusive Startup Discount
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-md mx-auto">
                Get our best VPS & cloud server pricing—built to help your startup scale from day one.
              </p>
            </div>

            {/* Visual element */}
            <div className="py-6">
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
                <div className="text-left">
                  <div className="text-sm text-gray-600 font-medium">Starting from</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold" style={{ color: "var(--color-primary)" }}>₹299</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>
                <div className="w-px h-12 bg-indigo-200" />
                <div className="text-left">
                  <div className="text-sm text-gray-600 font-medium">Save up to</div>
                  <div className="text-4xl font-bold text-green-600">40%</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleClaim}
                className="claim-offer-btn"
              >
                <span>Claim Offer Now</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="text-sm text-gray-500">
                ⚡ Instant setup • 💳 No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-container {
          background: linear-gradient(135deg, #fefefe 0%, #f8f8f8 100%);
          border-radius: 1.5rem;
          padding: 2.5rem;
          max-width: 540px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 
                      0 0 0 1px rgba(0, 0, 0, 0.05);
        }

        .claim-offer-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
          font-family: var(--font-montserrat);
        }

        .claim-offer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
        }

        .claim-offer-btn:active {
          transform: translateY(0);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 640px) {
          .modal-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
