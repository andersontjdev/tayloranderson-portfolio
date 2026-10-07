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
              <p>Last Updated: October 7, 2026</p>
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
                Information You Create in the App
              </h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• <strong>Favorites:</strong> Cocktail recipes you mark as favorites</li>
                <li>• <strong>Ratings and Tasting Notes:</strong> Star ratings and any private notes you write about a cocktail</li>
                <li>• <strong>Collections:</strong> Custom collections you create and the cocktails in them</li>
                <li>• <strong>My Bar:</strong> The ingredients you add to keep track of what you own</li>
                <li>• <strong>Preferences:</strong> App settings such as measurement units, theme, and your My Bar options</li>
                <li>• <strong>Recent Searches:</strong> Your recent searches, stored only on your device</li>
              </ul>
              <p className="text-gray-600 mb-6">
                This information is stored on your device and, if you are signed in to iCloud, synced
                through your private iCloud account. See &quot;Data Storage and iCloud Sync&quot; below.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatically Collected Information
              </h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• <strong>Usage Analytics:</strong> Which features and screens you use, which cocktails you view, favorite, and rate, how many ingredients are in your bar, and when the Pro upgrade screen is shown</li>
                <li>• <strong>Search Text:</strong> The text of searches you run in the app, so we can see which recipes and ingredients people are looking for</li>
                <li>• <strong>Purchase Events:</strong> When you buy or restore Cocktail Codex Pro, our analytics service may record the product and price</li>
                <li>• <strong>Device and App Information:</strong> A random app-instance identifier, device model, iOS version, app version, and an approximate region derived from your IP address</li>
                <li>• <strong>Crash Reports:</strong> Technical information when the app crashes or encounters errors</li>
              </ul>
              <p className="text-gray-600">
                None of this information is linked to your name, email address, or Apple Account, and
                it is not used to advertise to you or to track you across other companies&apos; apps and
                websites. The text of your tasting notes is never sent to our analytics service.
              </p>
            </section>

            {/* How We Use Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Provide and maintain the Cocktail Codex app functionality</li>
                <li>• Store your favorites, ratings, notes, collections, My Bar, and preferences, and keep them in sync across your devices</li>
                <li>• Unlock Cocktail Codex Pro features after a purchase</li>
                <li>• Improve app performance and fix bugs</li>
                <li>• Analyze usage and search patterns to decide which features and recipes to improve or add</li>
                <li>• Download cocktail recipe data and app content from our servers</li>
              </ul>
            </section>

            {/* Data Storage and iCloud Sync */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Storage and iCloud Sync
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  <strong>On Your Device:</strong> Your favorites, ratings, tasting notes, collections,
                  My Bar ingredients, preferences, and recent searches are stored on your device using
                  CoreData. If you are not signed in to iCloud, this data stays on that device.
                </p>
                <p>
                  <strong>iCloud Sync:</strong> If you are signed in to iCloud, your favorites, ratings
                  and tasting notes, collections, My Bar ingredients, and settings are synced through
                  your private iCloud (CloudKit) database so they appear on your other devices. This
                  data lives in your own iCloud account and is protected by Apple. We cannot access it.
                  Recent searches are not synced.
                </p>
                <p>
                  <strong>Recipe Data:</strong> We use Firebase to download cocktail recipes, categories,
                  and app content to your device. We do not upload your favorites, ratings, notes,
                  collections, or My Bar ingredients to our servers.
                </p>
                <p>
                  <strong>Security Measures:</strong> We implement appropriate technical and
                  organizational measures to protect any data we collect through analytics services.
                </p>
              </div>
            </section>

            {/* Purchases */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Purchases
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Cocktail Codex Pro is offered as in-app purchases: a monthly or annual subscription,
                  or a one-time Lifetime purchase. All payments are processed by Apple. We never
                  receive or store your payment details.
                </p>
                <p>
                  The app receives transaction information from Apple (the product you purchased and
                  its purchase, renewal, and expiry dates) so it can unlock Pro features. Subscriptions
                  renew automatically until cancelled, and you can manage or cancel a subscription at
                  any time in your Apple Account settings.
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
                  We share usage analytics and crash reports with Firebase (Google) to help us
                  understand how people use the app and to fix problems. As described above, this
                  includes the text of searches you run. It is not linked to your identity and does
                  not include your tasting notes.
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
                  <li>• <strong>Firebase (Google):</strong> For downloading app content, usage analytics, and crash reporting</li>
                  <li>• <strong>Apple:</strong> For app distribution through the App Store, payment processing for in-app purchases and subscriptions, and iCloud (CloudKit) sync</li>
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
                <li>• <strong>Access:</strong> You can view your favorites, ratings, notes, collections, My Bar, and preferences within the app</li>
                <li>• <strong>Delete:</strong> You can remove your favorites, ratings, notes, collections, and My Bar ingredients within the app, or delete the app to remove the data stored on that device</li>
                <li>• <strong>iCloud Data:</strong> Data synced to iCloud can be managed or removed from your device&apos;s iCloud storage settings</li>
                <li>• <strong>Subscriptions:</strong> You can manage or cancel a subscription in your Apple Account settings</li>
                <li>• <strong>Questions:</strong> If you have questions about the analytics we collect, contact us using the details below</li>
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
              This privacy policy was last updated on October 7, 2026.
              By using Cocktail Codex, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
