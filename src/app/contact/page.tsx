'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create mailto link as fallback
      const subject = encodeURIComponent('Contact from Portfolio Website')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      const mailtoLink = `mailto:studio@tayloranderson.dev?subject=${subject}&body=${body}`
      
      // Open mailto link
      window.location.href = mailtoLink
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitStatus('success')
        setIsSubmitting(false)
      }, 1000)
      
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #9CA3AF !important;
          opacity: 1 !important;
        }
        
        input::-webkit-input-placeholder,
        textarea::-webkit-input-placeholder {
          color: #9CA3AF !important;
          opacity: 1 !important;
        }
        
        input::-moz-placeholder,
        textarea::-moz-placeholder {
          color: #9CA3AF !important;
          opacity: 1 !important;
        }
        
        input:-ms-input-placeholder,
        textarea:-ms-input-placeholder {
          color: #9CA3AF !important;
          opacity: 1 !important;
        }

        input,
        textarea {
          color: #1F2937 !important;
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 mb-8">
                  I am always interested in discussing iOS development, potential 
                  collaborations, or just chatting about great app design. Feel free 
                  to reach out!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href="mailto:studio@tayloranderson.dev" className="text-blue-600 hover:text-blue-700">
                        studio@tayloranderson.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-black rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Twitter</h3>
                      <a href="https://twitter.com/TaylorDevelops" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                        @TaylorDevelops
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-800 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-800 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-gray-800 placeholder-gray-400"
                      placeholder="Hi Taylor, I'd love to discuss..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 text-sm">
                        Thank you! Your email client should open with the message pre-filled.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm">
                        Something went wrong. Please try emailing me directly at studio@tayloranderson.dev
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}