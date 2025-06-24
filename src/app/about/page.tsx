export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  I am an iOS developer passionate about creating beautiful, user-focused 
                  applications using modern Swift and SwiftUI. I believe great apps should 
                  be both powerful and intuitive.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Currently, I am focused on building Cocktail Codex, a comprehensive 
                  cocktail recipe app that showcases modern iOS development practices 
                  including Swift 6, SwiftUI, CoreData, and Firebase integration.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Skills & Technologies</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">iOS Development</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Swift 6</li>
                      <li>SwiftUI</li>
                      <li>UIKit</li>
                      <li>CoreData</li>
                      <li>Combine</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Backend & Tools</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Firebase</li>
                      <li>Xcode</li>
                      <li>Git</li>
                      <li>TestFlight</li>
                      <li>App Store Connect</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <span className="text-gray-900 ml-2">Melbourne, Australia</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Focus:</span>
                    <span className="text-gray-900 ml-2">iOS Development</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Current Project:</span>
                    <span className="text-gray-900 ml-2">Cocktail Codex</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}