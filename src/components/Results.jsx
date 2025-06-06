// ResultsDisplay.jsx
import { useState, useEffect } from 'react';

const ResultsDisplay = () => {
  const [result, setResult] = useState(''); // Fetch the result via API in production

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get("http://localhost:5001/results");
        console.log("Results:", response.data); // Show fetched results
      } catch (error) {
        console.error("Error while fetching results:", error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-6 text-center font-bold">Prediction Result</h2>
        <p className="text-lg">{result || "Loading results..."}</p>
      </div>
    </div>
  );
};

export default ResultsDisplay;