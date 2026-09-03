import { useEffect, useState } from "react";
import {
Thermometer,
Wind,
Droplets,
CloudSun,
} from "lucide-react";

import { getWeather } from "../services/weatherService";

import "./Weather.css";

function Weather({ city }) {
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

async function loadWeather() {
try {
setLoading(true);
setError("");


  const data = await getWeather(city);

  setWeather(data);
} catch (err) {
  setError("Weather is taking a little longer than expected.");
} finally {
  setLoading(false);
}


}

useEffect(() => {
loadWeather();
}, [city]);

if (loading) {
return ( <div className="weather-loading">
Loading weather... </div>
);
}

if (error) {
return ( <div className="weather-error"> <p>{error}</p>


    <button onClick={loadWeather}>
      TRY AGAIN
    </button>
  </div>
);


}

return ( <section className="weather-widget">


  <div className="weather-main">

    <CloudSun size={40} />

    <div>
      <p className="weather-location">
        {weather.name}
      </p>

      <h2>
        {Math.round(weather.main.temp)}°
      </h2>

      <p className="weather-description">
        {weather.weather[0].description}
      </p>
    </div>

  </div>

  <div className="weather-details">

    <div>
      <Thermometer size={18} />
      <span>Feels like</span>
      <strong>
        {Math.round(weather.main.feels_like)}°
      </strong>
    </div>

    <div>
      <Droplets size={18} />
      <span>Humidity</span>
      <strong>
        {weather.main.humidity}%
      </strong>
    </div>

    <div>
      <Wind size={18} />
      <span>Wind</span>
      <strong>
        {weather.wind.speed} m/s
      </strong>
    </div>

  </div>

</section>


);
}

export default Weather;
