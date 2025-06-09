import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import Features from "../components/Features";
import Registration from "../components/Registration";
import Login from "../components/Login";
import Footer from "../components/Footer";
import bgImage from '../assets/bg.png';

const Homee = () => {
  const [justRegistered, setJustRegistered] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* White overlay with opacity */}
      <div
        className="absolute inset-0 bg-white"
        style={{ opacity: 0, zIndex: 0 }}
      ></div>

      <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white/70 flex flex-col">
        <Navbar />
        
        {justRegistered ? (
          <Login />
        ) : (
          <>
            <HeroSection />
            <Features />
            <Registration onRegisterSuccess={() => setJustRegistered(true)} />
          </>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Homee;
