import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DestinationCard from "../components/DestinationCard";

import "./Saved.css";

function Saved() {
const [savedDestinations, setSavedDestinations] =
useState([]);

useEffect(() => {
const saved = localStorage.getItem(
"savedDestinations"
);

```
if (saved) {
  setSavedDestinations(JSON.parse(saved));
}
```

}, []);

return ( <main className="saved-page">


  <section className="saved-header">

    <p className="section-label">
      YOUR COLLECTION
    </p>

    <h1>
      TRAVEL
      <br />
      WISHLIST
    </h1>

  </section>

  <section className="saved-content">

    {savedDestinations.length > 0 ? (

      <div className="saved-grid">

        {savedDestinations.map(
          (destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          )
        )}

      </div>

    ) : (

      <div className="saved-empty">

        <h2>The world is waiting for you.</h2>

        <p>
          Start saving destinations for your
          next adventure.
        </p>

        <Link to="/explore">
          EXPLORE DESTINATIONS →
        </Link>

      </div>

    )}

  </section>

</main>


);
}

export default Saved;
