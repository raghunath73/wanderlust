import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import "./Hero.css";

function Hero() {
return ( <section className="hero">


  {/* Background Image */}
  <div className="hero-background"></div>

  {/* Dark Overlay */}
  <div className="hero-overlay"></div>

  {/* Hero Content */}
  <div className="hero-content">

    <motion.p
      className="hero-label"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      BEYOND THE MAP
    </motion.p>

    <motion.h1
      className="hero-title"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      EXPLORE THE
      <br />
      WORLD DIFFERENTLY
    </motion.h1>

    <motion.p
      className="hero-description"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Discover extraordinary destinations, hidden places, and
      unforgettable experiences around the world.
    </motion.p>

    <motion.div
      className="hero-buttons"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <button className="primary-button">
        EXPLORE DESTINATIONS
        <ArrowRight size={18} />
      </button>

      <button className="secondary-button">
        <Play size={16} fill="currentColor" />
        PLAN YOUR TRIP
      </button>
    </motion.div>
  </div>

  {/* Bottom Scroll Indicator */}
  <motion.div
    className="scroll-indicator"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.5 }}
  >
    <span>SCROLL TO EXPLORE</span>

    <ChevronDown size={18} className="scroll-icon" />
  </motion.div>

</section>


);
}

export default Hero;
