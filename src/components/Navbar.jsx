import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Heart } from "lucide-react";
import "./Navbar.css";

function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

function closeMenu() {
setIsMenuOpen(false);
}

return ( <nav className="navbar">


  <Link to="/" className="logo">
    WANDERLUST
  </Link>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/explore">Explore</Link>
    <Link to="/planner">Plan a Trip</Link>
    <Link to="/saved">Saved</Link>
  </div>

  <div className="nav-actions">

    <Link to="/explore" className="icon-button" aria-label="Search">
      <Search size={20} />
    </Link>

    <Link to="/saved" className="icon-button saved-button">
      <Heart size={20} />
    </Link>

    <button
      className="menu-button"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
    >
      {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
    </button>

  </div>

  {isMenuOpen && (
    <div className="mobile-menu">

      <Link to="/" onClick={closeMenu}>
        Home
      </Link>

      <Link to="/explore" onClick={closeMenu}>
        Explore
      </Link>

      <Link to="/planner" onClick={closeMenu}>
        Plan a Trip
      </Link>

      <Link to="/saved" onClick={closeMenu}>
        Saved Places
      </Link>

    </div>
  )}

</nav>


);
}

export default Navbar;
