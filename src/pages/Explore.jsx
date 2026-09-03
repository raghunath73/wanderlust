import { useState } from "react";
import { Search, X } from "lucide-react";

import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

import "./Explore.css";

function Explore() {
const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const categories = [
"All",
"Culture",
"City",
"Nature",
"Adventure",
"Beach",
];

const filteredDestinations = destinations.filter((destination) => {
const matchesSearch =
destination.name
.toLowerCase()
.includes(searchTerm.toLowerCase()) ||
destination.country
.toLowerCase()
.includes(searchTerm.toLowerCase());


const matchesCategory =
  selectedCategory === "All" ||
  destination.category === selectedCategory;

return matchesSearch && matchesCategory;


});

function clearFilters() {
setSearchTerm("");
setSelectedCategory("All");
}

return ( <main className="explore-page">

```
  <section className="explore-hero">

    <p className="section-label">
      FIND YOUR NEXT STORY
    </p>

    <h1>
      EXPLORE THE
      <br />
      WORLD
    </h1>

    <p>
      Search extraordinary destinations and find
      your next unforgettable journey.
    </p>

  </section>

  <section className="explore-content">

    {/* SEARCH */}

    <div className="search-box">

      <Search size={20} />

      <input
        type="text"
        placeholder="Where do you want to go?"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}

    </div>

    {/* FILTERS */}

    <div className="filter-section">

      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>

    {/* RESULTS */}

    <div className="results-header">

      <p>
        {filteredDestinations.length} destinations found
      </p>

      {(searchTerm || selectedCategory !== "All") && (
        <button onClick={clearFilters}>
          Clear filters
        </button>
      )}

    </div>

    {/* GRID */}

    {filteredDestinations.length > 0 ? (

      <div className="explore-grid">

        {filteredDestinations.map((destination, index) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            index={index}
          />
        ))}

      </div>

    ) : (

      <div className="empty-state">

        <h2>No destinations found.</h2>

        <p>
          Try searching for something else.
        </p>

        <button onClick={clearFilters}>
          RESET FILTERS
        </button>

      </div>

    )}

  </section>

</main>


);
}

export default Explore;
