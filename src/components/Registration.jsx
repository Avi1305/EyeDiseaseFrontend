import { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login'; //  Import your login component
//import bgImage from '../assets/bg.png';

const Registration = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [justRegistered, setJustRegistered] = useState(false); // ✅ flag to show login

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
        console.log(response.data.message);
        setJustRegistered(true); // ✅ show login form
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data.error || 'Something went wrong');
    }
  };

  return (
    // <div
    //   className="min-h-screen flex flex-col relative"
    //   style={{
    //     backgroundImage: url(${bgImage}),
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat"
    //   }}
    // >
    //   {/* White overlay with opacity */}
    //   <div
    //     className="absolute inset-0 bg-white"
    //     style={{ opacity: 0.25, zIndex: 0 }}
    //   ></div>

    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />

      {justRegistered ? (
        <div className="flex justify-center py-16">
          <LoginForm />
        </div>
      ) : (
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
                    required
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500
             focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="Please enter a valid email address."
                  />

                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500
             focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$"
                    title="Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
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
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => navigate('/login')}
                      className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200"
                    >
                      Log in
                    </button>
                  </p>
                </div>

              </form>
            </div>

            {/* Right: About Us */}
            <div id="about" className="flex items-center justify-center min-h-screen ">
              <div className="w-full max-w-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg ">
                <h2 className="text-4xl font-bold mb-6 text-center">ABOUT US</h2>

                <p className="text-lg leading-relaxed text-center">
                  Our <strong>Eye Disease Prediction System</strong> leverages <strong>advanced AI</strong> to help identify eye conditions, enabling early detection and better patient outcomes.
                </p>

                <p className="text-lg leading-relaxed text-center mt-4">
                  <strong>By bridging advanced AI with healthcare</strong>, we empower professionals to make <strong>informed decisions</strong>, enhance <strong>early detection</strong>, and contribute to <strong>better patient outcomes</strong>.
                </p>

                {/* <div className="mt-6 flex justify-center">
                    
                    <img src="C:\Users\vaish\Downloads\Project_react_app\Project_react_app\eye_disease_prediction\frontend\src\assets\about.png" alt="Eye Disease Prediction" className="w-32 h-32 rounded-lg shadow-lg border-4 border-white" />
                  </div>

                  <div className="mt-8 flex justify-center">
                   
                  </div> */}

              </div>


            </div>
          </div>
        </section>
      )}


    </div>

  );
};

export default Registration;