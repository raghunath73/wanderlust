import destinations from "../data/destinations";
import DestinationCard from "./DestinationCard";
import "./FeaturedDestinations.css";

function FeaturedDestinations() {
return ( <section className="featured-destinations">


  <div className="featured-header">

    <div>
      <p className="section-label">
        CURATED FOR YOU
      </p>

      <h2>
        DESTINATIONS WORTH
        <br />
        GETTING LOST IN
      </h2>
    </div>

    <p className="featured-description">
      Some places change the way you see the world.
      Start your next story somewhere extraordinary.
    </p>

  </div>

  <div className="destinations-grid">
    {destinations.map((destination, index) => (
      <DestinationCard
        key={destination.id}
        destination={destination}
        index={index}
      />
    ))}
  </div>

</section>


);
}

export default FeaturedDestinations;
