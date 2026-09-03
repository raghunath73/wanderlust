import { useState } from "react";
import { Menu, X, Search, Heart } from "lucide-react";
import "./Navbar.css";

function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

function toggleMenu() {
setIsMenuOpen(!isMenuOpen);
}

return ( <nav className="navbar">
{/* Logo */} <div className="logo">
WANDERLUST </div>


  {/* Desktop Navigation */}
  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/explore">Explore</a>
    <a href="/planner">Plan a Trip</a>
    <a href="/saved">Saved</a>
  </div>

  {/* Right Side Icons */}
  <div className="nav-actions">
    <button className="icon-button" aria-label="Search">
      <Search size={20} />
    </button>

    <button className="icon-button saved-button" aria-label="Saved places">
      <Heart size={20} />
    </button>

    {/* Mobile Menu Button */}
    <button
      className="menu-button"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
    </button>
  </div>

  {/* Mobile Navigation */}
  {isMenuOpen && (
    <div className="mobile-menu">
      <a href="/" onClick={toggleMenu}>
        Home
      </a>

      <a href="/explore" onClick={toggleMenu}>
        Explore
      </a>

      <a href="/planner" onClick={toggleMenu}>
        Plan a Trip
      </a>

      <a href="/saved" onClick={toggleMenu}>
        Saved Places
      </a>
    </div>
  )}
</nav>


);
}

export default Navbar;
