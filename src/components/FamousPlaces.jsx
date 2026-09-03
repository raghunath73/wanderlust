import { Clock } from "lucide-react";
import "./FamousPlaces.css";

function FamousPlaces({ places }) {
return ( <div className="famous-places-grid">
{places.map((place, index) => ( <article className="place-card" key={index}> <div className="place-image-container"> <img src={place.image} alt={place.name} />


        <div className="place-image-overlay">
          <span>{place.category}</span>
        </div>
      </div>

      <div className="place-content">
        <h3>{place.name}</h3>

        <p>{place.description}</p>

        <div className="place-duration">
          <Clock size={16} />
          {place.duration}
        </div>
      </div>
    </article>
  ))}
</div>


);
}

export default FamousPlaces;
