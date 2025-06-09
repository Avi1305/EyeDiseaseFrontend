import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800/95 backdrop-blur-md text-white py-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">EyeCare AI</h3>
          <p className="text-gray-400">
            Advanced eye disease prediction using artificial intelligence.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div id="contact">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: eyecareai2025@.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: Hinjewadi, Pune</li>
          </ul>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} EyeCare AI. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer