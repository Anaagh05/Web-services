import React from "react";

// Self-contained portfolio component for Anaagh.
// Fixed issue: removed dependency on external Card/Button UI components
// (e.g. `@/components/ui/card`) which were causing the runtime error.
// This file provides small local Card / Button components and inline SVG icons
// so it can run without those custom imports.

const GlobeIcon = ({ className = "w-10 h-10 mb-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM2 12h20M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PaletteIcon = ({ className = "w-10 h-10 mb-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C7 3 3 7 3 12s4 6 9 6c1.5 0 2.75-1.5 2.75-3.25 0-1.25-1-1.75-1.75-2 0 0-1.75-.5-1.75-2 0-1.25 1.75-2.75 3.5-2.75S18 7 18 5.5C18 4 15 3 12 3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VideoIcon = ({ className = "w-10 h-10 mb-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 7l-7 5 7 5V7zM1 5h14v14H1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = ({ className = "w-10 h-10 mb-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.3L6.16 20l1.16-6.77L2 9.24l6.9-1L12 2l3.1 6.24L22 9.24l-5.32 4.0L17.84 20z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19 19 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.62.34 1.2.66 1.72a1 1 0 0 1-.17 1.11L8.91 8.91a16 16 0 0 0 6.18 6.18l1.33-1.33a1 1 0 0 1 1.11-.17c.52.32 1.1.54 1.72.66a1 1 0 0 1 .75 1V22z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8l9 6 9-6M21 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Lightweight local UI wrappers (replace missing external UI libs)
function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

function Button({ children, href, onClick, className = "", ...props }) {
  const base = "inline-block rounded-2xl px-6 py-3 text-lg font-medium shadow-md";
  if (href) {
    return (
      <a href={href} className={`${base} ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function AnaaghPortfolio() {
  const services = [
    {
      title: "Website Development",
      Icon: GlobeIcon,
      description:
        "Modern, responsive, and SEO-optimized websites tailored to your business needs.",
    },
    {
      title: "Graphic Design",
      Icon: PaletteIcon,
      description: "Creative and professional designs that make your brand stand out.",
    },
    {
      title: "Video Making",
      Icon: VideoIcon,
      description: "Engaging videos to showcase your products, services, or story.",
    },
    {
      title: "Free Basic Numerological Insight",
      Icon: StarIcon,
      description: "A unique touch – receive a basic numerological analysis with your project.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex flex-col justify-between">
      <main className="max-w-4xl mx-auto text-center">
        {/* Logo (use /public/ or static path). If your image is named differently place it in /public and update the path below) */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
            {/* Using a plain <img> tag keeps this file portable without next/image config */}
            <img
              src="/WhatsApp Image 2025-09-07 at 14.34.01_37aa9444.jpg"
              alt="Anaagh Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                // fallback: replace with simple initials if image not found
                e.currentTarget.style.display = "none";
              }}
            />
            {/* If image fails to load, show initials */}
            <div className="absolute text-xl font-bold text-indigo-700">Anaagh</div>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">Anaagh</h1>
        <p className="text-lg text-gray-600 mb-10">
          Crafting Digital Experiences with Creativity and Precision
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div
                key={index}
                className="transform transition-transform duration-300 hover:-translate-y-2"
              >
                <Card>
                  <CardContent className="flex flex-col items-center text-center">
                    <div className="text-indigo-500 mb-2">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          {/* Opens user's email client with a prefilled subject */}
          <Button
            href={
              "mailto:anaagh05@gmail.com?subject=Website%20Inquiry%20from%20Anaagh%20Portfolio&body=Hi%20Anaagh,%0A%0AI%20would%20like%20to%20talk%20about%20your%20services.%20Please%20get%20in%20touch.%0A%0AThanks,"
            }
            className="bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Get in Touch
          </Button>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-700">
        <div className="flex flex-col items-center space-y-2">
          <a href="tel:+918360530045" className="flex items-center space-x-2">
            <PhoneIcon className="w-5 h-5 text-indigo-600" />
            <span>+91 83605 30045</span>
          </a>

          <a href="mailto:anaagh05@gmail.com" className="flex items-center space-x-2">
            <MailIcon className="w-5 h-5 text-indigo-600" />
            <span>anaagh05@gmail.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
