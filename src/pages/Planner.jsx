import { useState } from "react";
import { LoaderCircle, Sparkles } from "lucide-react";

import { generateItinerary } from "../services/geminiService";

import "./Planner.css";

function Planner() {
const [formData, setFormData] = useState({
destination: "",
days: "5",
budget: "Medium",
travelStyle: "Culture",
});

const [itinerary, setItinerary] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

function handleChange(event) {
const { name, value } = event.target;


setFormData((previous) => ({
  ...previous,
  [name]: value,
}));


}

async function handleSubmit(event) {
event.preventDefault();


if (!formData.destination.trim()) {
  setError("Please enter a destination.");

  return;
}

setLoading(true);

setError("");

setItinerary("");

try {
  const result =
    await generateItinerary(formData);

  setItinerary(result);

} catch (error) {
  setError(
    "Unable to generate your itinerary. Please try again."
  );
} finally {
  setLoading(false);
}


}

return ( <main className="planner-page">


  <section className="planner-hero">

    <p className="section-label">
      AI TRAVEL PLANNER
    </p>

    <h1>
      YOUR NEXT
      <br />
      ADVENTURE,
      <br />
      PLANNED.
    </h1>

    <p>
      Tell us where you want to go and let AI
      create your personalized journey.
    </p>

  </section>


  <section className="planner-content">

    {/* FORM */}

    <form
      className="planner-form"
      onSubmit={handleSubmit}
    >

      <div className="form-group">

        <label>
          WHERE DO YOU WANT TO GO?
        </label>

        <input
          type="text"
          name="destination"
          placeholder="Tokyo, Paris, Bali..."
          value={formData.destination}
          onChange={handleChange}
        />

      </div>


      <div className="form-row">

        <div className="form-group">

          <label>
            HOW MANY DAYS?
          </label>

          <select
            name="days"
            value={formData.days}
            onChange={handleChange}
          >

            <option value="2">
              2 Days
            </option>

            <option value="3">
              3 Days
            </option>

            <option value="5">
              5 Days
            </option>

            <option value="7">
              7 Days
            </option>

            <option value="10">
              10 Days
            </option>

          </select>

        </div>


        <div className="form-group">

          <label>
            YOUR BUDGET
          </label>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >

            <option value="Budget">
              Budget
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Luxury">
              Luxury
            </option>

          </select>

        </div>

      </div>


      <div className="form-group">

        <label>
          TRAVEL STYLE
        </label>

        <select
          name="travelStyle"
          value={formData.travelStyle}
          onChange={handleChange}
        >

          <option value="Culture">
            Culture & History
          </option>

          <option value="Adventure">
            Adventure
          </option>

          <option value="Relaxation">
            Relaxation
          </option>

          <option value="Food">
            Food & Cuisine
          </option>

          <option value="Nature">
            Nature
          </option>

          <option value="Nightlife">
            Nightlife
          </option>

        </select>

      </div>


      <button
        type="submit"
        className="generate-button"
        disabled={loading}
      >

        {loading ? (
          <>
            <LoaderCircle
              className="spinner"
              size={20}
            />

            PLANNING YOUR TRIP...
          </>
        ) : (
          <>
            <Sparkles size={20} />

            GENERATE MY TRIP
          </>
        )}

      </button>

    </form>


    {/* ERROR */}

    {error && (
      <div className="planner-error">
        {error}
      </div>
    )}


    {/* AI RESULT */}

    {itinerary && (

      <section className="itinerary-result">

        <div className="itinerary-title">

          <Sparkles size={22} />

          <div>
            <p className="section-label">
              YOUR AI ITINERARY
            </p>

            <h2>
              {formData.destination}
            </h2>
          </div>

        </div>


        <div className="itinerary-content">
          {itinerary}
        </div>

      </section>

    )}

  </section>

</main>


);
}

export default Planner;
