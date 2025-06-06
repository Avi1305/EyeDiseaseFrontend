import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
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

  console.log("Submitting Form Data:", formData); // ✅ Check if data exists

  if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
    setError("All fields are required");
    return;
  }

  try {
    const response = await axios.post("http://localhost:5001/api/users/register", formData);
    if (response.status === 201) {
      console.log(response.data.message);
      navigate('/login'); // ✅ Navigate to login on successful registration
      
    }
  } catch (err) {
    console.error("Error in Registration:", err); // ✅ Log full error details
    setError(err.response?.data?.message || "Something went wrong");
  }
};




  return (



    <section id="register" className="py-20 bg-gradient-to-b from-blue-50/50 to-white/70 z-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center z-1">
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

                autoComplete='email'
              />
              <input placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white" type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="current-password" />

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
                  className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200 cursor-pointer"
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



          </div>


        </div>
      </div>
    </section>
  )
};







export default Registration;
