import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./DestinationCard.css";

function DestinationCard({ destination, index }) {
return (
<motion.article
className="destination-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{
duration: 0.7,
delay: index * 0.1,
}}
>
<Link
to={`/destination/${destination.id}`}
className="destination-link"
> <div className="destination-image-container">

      <img
        src={destination.image}
        alt={`${destination.name}, ${destination.country}`}
        className="destination-image"
      />

      <div className="destination-overlay"></div>

      <div className="destination-number">
        {String(index + 1).padStart(2, "0")}
      </div>

    </div>

    <div className="destination-info">

      <div className="destination-top">

        <span className="destination-country">
          {destination.country}
        </span>

        <span className="destination-category">
          {destination.category}
        </span>

      </div>

      <h3>{destination.name}</h3>

      <p>{destination.description}</p>

      <div className="destination-explore-button">
        EXPLORE
        <ArrowUpRight size={18} />
      </div>

    </div>
  </Link>
</motion.article>


);
}

export default DestinationCard;
