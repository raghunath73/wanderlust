import { useParams, Link } from "react-router-dom";
import {
ArrowLeft,
MapPin,
Calendar,
Wallet,
Clock,
} from "lucide-react";

import destinations from "../data/destinations";
import Weather from "../components/Weather";
import FamousPlaces from "../components/FamousPlaces";
import "./DestinationDetails.css";

function DestinationDetails() {
const { id } = useParams();

const destination = destinations.find(
(item) => item.id === Number(id)
);

if (!destination) {
return ( <div className="not-found"> <h1>Destination not found.</h1> <Link to="/explore">BACK TO EXPLORE</Link> </div>
);
}

return ( <main className="destination-details">


  <section
    className="destination-hero"
    style={{
      backgroundImage: `url(${destination.image})`,
    }}
  >

    <div className="destination-hero-overlay"></div>

    <div className="destination-hero-content">

      <Link to="/explore" className="back-button">
        <ArrowLeft size={18} />
        BACK
      </Link>

      <p>{destination.country}</p>

      <h1>{destination.name}</h1>

      <span>{destination.category}</span>

    </div>

  </section>

  <section className="destination-about">

    <div className="about-heading">

      <p className="section-label">
        DISCOVER
      </p>

      <h2>
        MORE THAN A
        <br />
        DESTINATION
      </h2>

    </div>

    <div className="about-content">

      <p className="about-description">
        {destination.description}
        {" "}
        Discover the culture, landscapes, food, and
        unforgettable experiences that make this place
        special.
      </p>

    </div>

  </section>

  <section className="quick-info">

    <div>
      <Calendar />
      <span>BEST TIME</span>
      <strong>Mar — May</strong>
    </div>

    <div>
      <Clock />
      <span>RECOMMENDED</span>
      <strong>4 — 7 Days</strong>
    </div>

    <div>
      <Wallet />
      <span>TRAVEL STYLE</span>
      <strong>{destination.category}</strong>
    </div>

    <div>
      <MapPin />
      <span>LOCATION</span>
      <strong>{destination.country}</strong>
    </div>

  </section>

  <section className="places-section">

    <p className="section-label">
      DON'T MISS
    </p>

    <h2>
      PLACES WORTH
      <br />
      DISCOVERING
    </h2>
    <Weather city={destination.name} />
    <FamousPlaces places={destination.famousPlaces} />

  </section>

</main>


);
}

export default DestinationDetails;
