import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="flex justify-around p-4 bg-blue-100">
    <Link to="/" className="text-blue-500"></Link>
    <Link to="/login" className="text-blue-500"></Link>
    <Link to="/upload" className="text-blue-500"></Link>
    <Link to="/results" className="text-blue-500"></Link>
  </nav>
);

export default Navigation;