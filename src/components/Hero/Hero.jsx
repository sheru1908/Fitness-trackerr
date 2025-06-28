import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// New Background Image
const BgStyle = {
  backgroundImage: `url(https://wallpapercave.com/wp/wp12424948.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <div id="home" style={BgStyle} className="relative text-white">
      {/* Glass Overlay */}
      <div className="bg-black/70 backdrop-blur-sm w-full min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-6">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-pink-200 text-xl font-medium tracking-wide"
          >
            💪Empower Your Fitness Mindset
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            🔥Transform Your Strength, <br />
            <span className="text-pink-200">Elevate Your Life</span>
          </motion.h1>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg text-gray-300"
          >
            “Fuel your ambition with discipline and consistency.”
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link to="/db/dashboard">
              <button className="px-8 py-3 rounded-full bg-pink-400 text-black font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-200/50 transition-all duration-300">
              👆Unleash the Beast
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
