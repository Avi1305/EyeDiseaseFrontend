// Home.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError('');
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/register', formData);
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0 opacity-70"
        style={{
          backgroundImage: "url('../src/assets/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EyeCare AI
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
                <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
                <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-32 px-4 bg-gradient-to-br from-white/80 via-blue-50/50 to-indigo-50/50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Advanced Eye Disease <span className="text-indigo-600">Prediction</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Using cutting-edge AI technology to detect and predict eye diseases early.
                Protect your vision with our advanced diagnostic tools.
              </p>
              <button
                onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full
                           text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                Get Started
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/eye-scan.jpg"
                alt="AI Eye Scanning"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
                title: 'AI-Powered Analysis',
                description: 'Advanced machine learning algorithms for accurate disease prediction'
              }, {
                title: 'Quick Results',
                description: 'Get your results within minutes with detailed analysis'
              }, {
                title: 'Expert Support',
                description: '24/7 support from our team of eye care professionals'
              }].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Registration Section - Left Aligned */}
        <section id="register" className="py-20 bg-gradient-to-b from-blue-50/50 to-white/70">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Left: Form */}
            <div className="w-full md:w-1/2 md:pr-12">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 w-full max-w-md">
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                  <p className="text-gray-500">Join us in revolutionizing eye care</p>
                </div>

                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500
                               focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500
                               focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500
                               focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-4
                             rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700
                             transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Create Account
                </button>

                <div className="text-left">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => navigate('/login')}
                      className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                    >
                      Log in
                    </button>
                  </p>
                </div>
              </form>
            </div>

            {/* About us: Right Visual */}
              <div className="about-us-container bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg w-3/5 mx-auto">

              <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>

              <p className="text-lg leading-relaxed text-center">
                Welcome to our **Eye Disease Prediction System**, where technology meets healthcare. Using **cutting-edge deep learning and machine learning** models, we analyze eye images to detect conditions like **red eye, dry eye, crossed eye, blurred vision, Uveitis, Jaundiced, and cataracts** with remarkable accuracy.
              </p>

              <div className="mt-6 flex justify-center">
                <div className="bg-white text-black p-6 rounded-lg shadow-lg w-4/5">
                  <h3 className="text-2xl font-semibold text-center text-blue-700">How It Works</h3>
                  <ul className="list-disc list-inside text-lg mt-4">
                    <li>Upload your eye image and enter patient details.</li>
                    <li>Our CNN-powered model processes and refines the data.</li>
                    <li>Receive a prediction in real-time.</li>
                    <li>Accurate predictions backed by continuous learning.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-center">
                By bridging advanced AI with healthcare, we empower professionals to make informed decisions, enhance early detection, and contribute to better patient outcomes. Our system ensures secure handling of patient data, seamless medical integration, and ever-evolving prediction accuracy.
              </p>
             
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800/95 backdrop-blur-md text-white py-12">
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
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@eyecareai.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: Hinjewadi, Pune</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EyeCare AI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;

