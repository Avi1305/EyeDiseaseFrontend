import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/bg.png";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://eyediseasebackend.onrender.com/api/users/login", formData);
      if (response.status === 200) {
        navigate("/upload");
      }
    } catch (err) {
      setError(err.response?.data.error || "Login failed");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay (optional for better readability) */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0" />

      {/* Content */}
      <Navbar />

      <div className="flex-grow flex items-center justify-center z-10 relative px-4 py-20">
        <div className="max-w-md w-full bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Welcome Back</h2>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50 hover:bg-white"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50 hover:bg-white"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 hover:shadow-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {loading && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
            </div>
          )}

          <p className="text-gray-600 text-sm text-center">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
