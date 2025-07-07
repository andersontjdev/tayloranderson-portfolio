import Link from "next/link";
import Image from "next/image";

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
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Discover Cocktails Like Never Before
          </h2>
          
          {/* Discover & Recipe Cards */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Discover new cocktails and browse classic to modern creations
              </h3>
              <p className="text-gray-600 mb-6">
                Explore our curated collection of cocktails with beautiful recipe cards 
                and easy-to-follow instructions. Each recipe includes detailed descriptions 
                and flavor profiles to help you find the perfect drink.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  Daily Featured
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  Recipe Cards
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  Flavor Tags
                </span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/discover-whiskey.jpg"
                  alt="Cocktail Codex Discover Screen with Whiskey Sour"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/margarita-recipe.jpg"
                  alt="Margarita Recipe with Ingredients"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Smart Search */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Smart search across cocktails, ingredients, and categories
              </h3>
              <p className="text-gray-600 mb-6">
                Find exactly what you&apos;re looking for with our intelligent search. 
                Filter by cocktail names, specific ingredients, or browse by categories. 
                Perfect for finding drinks based on what you have at home.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Smart Filters
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Ingredient Search
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Quick Results
                </span>
              </div>
            </div>
            <div className="md:order-1 flex justify-center">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/search-results.jpg"
                  alt="Smart Search Results for Vodka Cocktails"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Measurements & Featured */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Metric and Imperial measurements available
              </h3>
              <p className="text-gray-600 mb-6">
                Switch seamlessly between metric and imperial measurements with 
                automatic conversion. Whether you prefer milliliters or ounces, 
                the app adapts to your preference instantly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Auto Convert
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Global Units
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Precise Ratios
                </span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/measurements.jpg"
                  alt="Recipe with Metric and Imperial Measurements"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/featured-cocktails.jpg"
                  alt="Curated Featured Cocktails List"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Dark Mode & Favorites */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Curate your own cocktail collection with one tap
              </h3>
              <p className="text-gray-600 mb-6">
                Save your favorite cocktails for quick access and enjoy a gorgeous 
                dark appearance for night-time mixing. Build your personal collection 
                and access it anytime, anywhere.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  One-Tap Save
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Dark Mode
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Quick Access
                </span>
              </div>
            </div>
            <div className="md:order-1 flex justify-center space-x-4">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/dark-mode.jpg"
                  alt="Dark Mode Interface"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/favorites.jpg"
                  alt="Favorites Collection Grid"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Browse flavor categories to find your perfect cocktail
              </h3>
              <p className="text-gray-600 mb-6">
                Explore cocktails by flavor profiles including Strong, Sweet, Bitter, 
                Fruity, Creamy, and Sour. Each category is beautifully illustrated 
                to help you discover new drinks that match your taste preferences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Flavor Profiles
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Visual Browse
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Taste Match
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/categories.jpg"
                  alt="Flavor Categories Grid"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t">
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