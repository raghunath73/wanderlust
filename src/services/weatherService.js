const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeather(city) {
const url =
`https://api.openweathermap.org/data/2.5/weather` +
`?q=${encodeURIComponent(city)}` +
`&appid=${API_KEY}` +
`&units=metric`;

const response = await fetch(url);

if (!response.ok) {
throw new Error("Unable to get weather data.");
}

return response.json();
}
