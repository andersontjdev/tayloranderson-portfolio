export default function CocktailCodexPrivacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="text-sm text-gray-500 mb-6">
              <p>Effective Date: July 4, 2024</p>
              <p>Last Updated: June 24, 2025</p>
            </div>
            <p className="text-lg text-gray-600">
              This Privacy Policy describes how Cocktail Codex collects, uses, and protects your information when you use our mobile application.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Information You Provide
              </h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• <strong>Favorites:</strong> Cocktail recipes you mark as favorites are stored locally on your device</li>
                <li>• <strong>Preferences:</strong> App settings such as measurement units (metric/imperial) and theme preferences are stored locally</li>
                <li>• <strong>Search History:</strong> Recent searches to improve your app experience (stored locally on your device)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatically Collected Information
              </h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• <strong>Usage Analytics:</strong> Anonymous app usage statistics to help us improve the app</li>
                <li>• <strong>Crash Reports:</strong> Technical information when the app encounters errors</li>
                <li>• <strong>Device Information:</strong> Basic device information for compatibility and performance optimization</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Provide and maintain the Cocktail Codex app functionality</li>
                <li>• Store your favorites and preferences locally on your device</li>
                <li>• Improve app performance and fix bugs</li>
                <li>• Analyze usage patterns to enhance user experience</li>
                <li>• Download cocktail recipe data and app content from our servers</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Storage and Security
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  <strong>Local Storage:</strong> Your favorites, preferences, and search history are 
                  stored locally on your device using CoreData. This data never leaves your device 
                  and remains completely private to you.
                </p>
                <p>
                  <strong>Recipe Data:</strong> We use Firebase to download cocktail recipes, categories, 
                  and app content to your device. We do not upload any of your personal data, 
                  favorites, or preferences to our servers.
                </p>
                <p>
                  <strong>Security Measures:</strong> We implement appropriate technical and 
                  organizational measures to protect any data we collect through analytics services.
                </p>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information Sharing
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
                </p>
                <p>
                  We may share anonymized, aggregated usage statistics with analytics services 
                  (Firebase Analytics) to help us understand how users interact with our app. 
                  This data cannot be used to identify individual users and does not include 
                  your favorites, preferences, or search history.
                </p>
                <p>
                  We may disclose information if required by law or to protect the rights, 
                  property, or safety of our users or others.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-Party Services
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Cocktail Codex uses the following third-party services:
                </p>
                <ul className="space-y-2">
                  <li>• <strong>Firebase:</strong> For downloading app content and collecting anonymous analytics</li>
                  <li>• <strong>Apple App Store:</strong> For app distribution</li>
                </ul>
                <p>
                  These services have their own privacy policies, and we encourage you to review them.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights and Choices
              </h2>
              <ul className="text-gray-600 space-y-2">
                <li>• <strong>Access:</strong> You can view your favorites and preferences within the app</li>
                <li>• <strong>Delete:</strong> You can delete your favorites and reset app data at any time through the app or by deleting the app</li>
                <li>• <strong>Local Control:</strong> Since your data is stored locally, you have complete control over your information</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-600">
                Cocktail Codex is intended for users aged 21 and over (or the legal drinking age 
                in your jurisdiction). We do not knowingly collect personal information from 
                children under 13. If we become aware that we have collected personal information 
                from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the Last Updated 
                date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <div className="text-gray-600">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p><strong>Email:</strong> studio@tayloranderson.dev</p>
                  <p><strong>Website:</strong> tayloranderson.dev/cocktailcodex</p>
                  <p><strong>Developer:</strong> Taylor Anderson</p>
                </div>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              This privacy policy was last updated on June 24, 2025. 
              By using Cocktail Codex, you agree to the collection and use of 
              information in accordance with this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}