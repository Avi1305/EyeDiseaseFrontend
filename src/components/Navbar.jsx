import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();



  return(<div>
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 flex justify-between h-16">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        EyeCare AI
      </h1>
      <div className="flex items-center space-x-4">
    
       <button
              type="button"
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
             Features
            </button>
        <button
              type="button"
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
             About
            </button>
        <button
              type="button"
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
             Contact
            </button>    
       
      </div>
    </div>
  </nav>
  </div>)
  
  
  };

export default Navbar;
