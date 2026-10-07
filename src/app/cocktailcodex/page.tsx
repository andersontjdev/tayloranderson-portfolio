import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cocktail Codex - Cocktail Recipe App for iPhone and iPad",
  description:
    "Cocktail Codex is a SwiftUI cocktail app for iPhone and iPad. Track your bar, see what you can make right now, rate every drink, and discover your palate.",
  openGraph: {
    title: "Cocktail Codex - Cocktail Recipe App for iPhone and iPad",
    description:
      "Track your bar, see what you can make right now, rate every drink, and discover your palate.",
    type: "website",
  },
};

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
      "Search by cocktail name, ingredient, or flavor category and get results instantly.",
  },
  {
    icon: "🍸",
    title: "My Bar",
    description:
      "Track the bottles you own and see every cocktail you can make right now, plus the ones you are one ingredient away from.",
  },
  {
    icon: "⭐",
    title: "Ratings & Notes",
    description:
      "Rate any cocktail with a tap, and add private tasting notes to build your own review journal.",
  },
  {
    icon: "📊",
    title: "Your Palate",
    description:
      "Insights drawn from the cocktails you have rated, from your rating spread to your most explored spirit.",
  },
  {
    icon: "🗂️",
    title: "Collections",
    description:
      "Save favorites and build your own collections for any occasion.",
  },
  {
    icon: "☁️",
    title: "iCloud Sync",
    description:
      "Favorites, ratings, collections, and My Bar stay in step across your iPhone and iPad.",
  },
  {
    icon: "📏",
    title: "Measurement Conversion",
    description:
      "Switch between metric and imperial measurements with automatic conversion.",
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    description:
      "A gorgeous dark appearance that is easy on the eyes for late-night mixing.",
  },
  {
    icon: "🎨",
    title: "Beautiful Design",
    description:
      "A modern SwiftUI interface with layouts built for both iPhone and iPad.",
  },
];

const freeFeatures: string[] = [
  "The full recipe library, search, and flavor categories",
  "Favorites and star ratings",
  "Metric and imperial conversion",
  "My Bar for up to 5 ingredients",
  "Up to 3 custom collections",
  "iCloud sync and dark mode",
];

const proFeatures: string[] = [
  "My Bar with unlimited ingredients",
  "Unlimited custom collections",
  "Private tasting notes on any cocktail",
  "Your Palate insights from your ratings",
];

const techStack: string[] = [
  "Swift 6",
  "SwiftUI",
  "CoreData",
  "CloudKit",
  "StoreKit 2",
  "Combine",
  "Firebase",
  "Swift Testing",
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
              A modern SwiftUI cocktail companion for iPhone and iPad. Track the
              bottles you own, see what you can make right now, rate and
              remember every drink, and discover your palate.
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

          {/* Discover & Search */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Discover classic and modern cocktails, and search by name,
                ingredient, or category
              </h3>
              <p className="text-gray-600 mb-6">
                Explore a curated collection with beautiful recipe cards and a
                new Cocktail of the Day. Smart search finds exactly what you are
                after, whether that is a drink by name, everything you can make
                with gin, or something sweet, strong, or refreshing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  Cocktail of the Day
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  Ingredient Search
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  Flavor Categories
                </span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/discover.jpg"
                  alt="Cocktail Codex Discover screen with the Cocktail of the Day"
                  width={414}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/search.jpg"
                  alt="Search results for gin cocktails"
                  width={414}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* My Bar & Make Now */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Mix with what you have
              </h3>
              <p className="text-gray-600 mb-6">
                Tick off the spirits, liqueurs, and mixers you own and My Bar
                shows every cocktail you can make right now, plus the ones you
                are just one ingredient away from. Start with up to 5
                ingredients for free, or track your whole bar with Pro.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Make Now
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  One Ingredient Away
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Assume the Basics
                </span>
              </div>
            </div>
            <div className="md:order-1 flex justify-center space-x-4">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/my-bar.jpg"
                  alt="My Bar showing owned ingredients and cocktails you can make now"
                  width={414}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/make-now.jpg"
                  alt="Make Now list of cocktails you can make with your bar"
                  width={414}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Ingredient checks & measurements */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Know exactly what you are missing
              </h3>
              <p className="text-gray-600 mb-6">
                Every recipe is checked against your bar, with a tick beside each
                ingredient you own and a one-tap add for anything you are
                missing. Step-by-step instructions and automatic metric or
                imperial conversion keep you mixing with confidence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Ingredient Checks
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Metric &amp; Imperial
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Step-by-Step Method
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/ingredient-check.jpg"
                  alt="Espresso Martini recipe with ingredients checked against My Bar"
                  width={414}
                  height={692}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Ratings & Your Palate */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Rate every cocktail and discover your palate
              </h3>
              <p className="text-gray-600 mb-6">
                Rate any cocktail with a tap, free. With Pro you can also keep
                private tasting notes, and see Your Palate: insights drawn from
                everything you have rated, from your rating spread to your most
                explored spirit.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Free Star Ratings
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Tasting Notes (Pro)
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Your Palate (Pro)
                </span>
              </div>
            </div>
            <div className="md:order-1 flex justify-center space-x-4">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/reviews.jpg"
                  alt="Reviews list with star ratings and tasting notes"
                  width={414}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/your-palate.jpg"
                  alt="Your Palate insights with rating spread and most explored spirit"
                  width={414}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Collections, sync & dark mode */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Collections, iCloud sync, and a gorgeous dark mode
              </h3>
              <p className="text-gray-600 mb-6">
                Save your favorites and build your own collections for any
                occasion, with three free and unlimited with Pro. iCloud keeps
                everything in step across your iPhone and iPad, and dark mode
                makes late-night mixing easy on the eyes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Custom Collections
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  iCloud Sync
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Dark Mode
                </span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/dark-discover.jpg"
                  alt="Discover screen in dark mode"
                  width={414}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/screenshots/dark-my-bar.jpg"
                  alt="My Bar in dark mode"
                  width={414}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free & Pro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Free to explore, Pro to go deeper
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Cocktail Codex is free to download. Cocktail Codex Pro is available
            as a monthly or annual subscription, or a one-time Lifetime
            purchase.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Free</h3>
              <ul className="text-gray-600 space-y-3">
                {freeFeatures.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cocktail Codex Pro
              </h3>
              <ul className="text-gray-600 space-y-3">
                {proFeatures.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center max-w-2xl mx-auto">
            Prices are shown in the App Store in your local currency.
            Subscriptions renew automatically unless cancelled at least 24 hours
            before the end of the current period, and can be managed in your
            Apple Account settings.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
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

      {/* Legal Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center space-x-6">
          <Link
            href="/cocktailcodex/privacy"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Privacy Policy
          </Link>
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-blue-600 hover:text-blue-700 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </div>
      </section>
    </div>
  );
}
