import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/bg.png';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setError('');
    setPrediction(null);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image first!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("https://ml-flask-server-ql8y.onrender.com/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log("Prediction response:", response.data);
      setPrediction(response.data);
    } catch (error) {
      console.error("Error while predicting:", error);
      setError("Something went wrong! Please try again.");
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
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0" />

      <Navbar />

      <div className="flex-grow flex items-center justify-center relative z-10 px-4 py-20">
        <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Upload Image</h2>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
          >
            Upload Image
          </button>

          {loading && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
            </div>
          )}

          {prediction && !loading && (
            <div className="mt-6 p-6 bg-white shadow-lg rounded-lg text-center">
              <h2 className="text-xl font-semibold text-gray-800">Prediction Result</h2>
              <p className="text-gray-600 mt-2">
                Disease:{" "}
                <span className="text-red-500 font-bold">{prediction.disease}</span>
              </p>
              <img src={`https://ml-flask-server-ql8y.onrender.com/uploads/${prediction.filePath.split('/').pop()}`} 
                alt="Uploaded Image" 

                className="mt-4 rounded-lg border border-gray-300 w-64 h-64 object-cover mx-auto transition-transform duration-300 hover:scale-105"
              />

            </div>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ImageUpload;
