import Link from "next/link";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🔍",
    title: "Smart Search",
    description:
      "Search by cocktail name, ingredients, or flavor profiles with intelligent filtering.",
  },
  {
    icon: "❤️",
    title: "Favorites",
    description:
      "Save your favorite cocktails for quick access with a simple tap.",
  },
  {
    icon: "📏",
    title: "Measurement Conversion",
    description:
      "Switch between metric and imperial measurements with automatic conversion.",
  },
  {
    icon: "🎨",
    title: "Beautiful Design",
    description:
      "Modern SwiftUI interface that works perfectly on iPhone and iPad.",
  },
  {
    icon: "📱",
    title: "Responsive",
    description:
      "Optimized layouts for all device sizes with seamless navigation.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable",
    description:
      "Built with Swift 6 and modern concurrency for optimal performance.",
  },
];

const techStack: string[] = [
  "Swift 6",
  "SwiftUI",
  "CoreData",
  "Firebase",
  "Combine",
  "XCTest",
  "Crashlytics",
  "Analytics",
];

export default function CocktailCodex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Cocktail Codex
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A modern SwiftUI cocktail recipe app featuring smart search,
              favorites, measurement conversion, and a beautiful, responsive
              design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/au/app/cocktail-codex/id6502745040"
                className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>

              <a
                href="#features"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-white hover:shadow-sm transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-auto">
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <span className="text-gray-500">iPhone Screenshot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="bg-orange-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Built with Modern iOS Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Link */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/cocktailcodex/privacy"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Privacy Policy
          </Link>
        </div>
      </section>
    </div>
  );
}
