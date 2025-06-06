import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homee from './components/Homee';
import Login from './components/Login';
import Results from './components/Results';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;