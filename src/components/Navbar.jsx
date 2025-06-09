import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 flex justify-between h-16">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        EyeCare AI
      </h1>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={() => {
            const section = document.getElementById('features');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          Features
        </button>

        <button
          type="button"
          onClick={() => {
            const section = document.getElementById('about');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          About
        </button>

        <button
          type="button"
          onClick={() => {
            const section = document.getElementById('contact');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          Contact
        </button>


      </div>
    </div>
  </nav>
);

export default Navbar;