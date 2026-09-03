import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({
apiKey: API_KEY,
});

const MODEL = "gemini-3.7-flash";

export async function askTravelAssistant(message) {
if (!API_KEY) {
throw new Error(
"Gemini API key is missing. Check your .env file."
);
}

try {
const response = await ai.models.generateContent({
model: MODEL,


  contents: `


You are Wanderlust AI, a friendly and intelligent travel assistant.

Your job is to help users with:

* Travel destinations
* Famous places
* Best time to visit
* Budget travel
* Food recommendations
* Travel tips
* Cultural experiences
* Adventure activities
* Travel planning

Answer in a friendly, clear, and helpful way.

Use headings and bullet points when useful.

User question:

${message}
`,
});


return response.text;


} catch (error) {
console.error("Gemini Error:", error);


throw new Error(
  "Unable to get a response from the AI assistant."
);


}
}

export async function generateItinerary(tripData) {
if (!API_KEY) {
throw new Error(
"Gemini API key is missing. Check your .env file."
);
}

const {
destination,
days,
budget,
travelStyle,
} = tripData;

try {
const response = await ai.models.generateContent({
model: MODEL,


  contents: `


You are an expert AI travel planner.

Create a detailed and practical travel itinerary.

TRIP DETAILS:

Destination: ${destination}

Number of Days: ${days}

Budget: ${budget}

Travel Style: ${travelStyle}

Create a day-by-day itinerary.

Use this exact structure:

TRIP OVERVIEW

Brief introduction about the trip.

DAY 1 — Title

Morning:

* Activity

Afternoon:

* Activity

Evening:

* Activity

Estimated Budget:

* Budget information

Repeat this structure for every day.

At the end include:

TRAVEL TIPS

* Tip 1
* Tip 2
* Tip 3

Keep the plan realistic, enjoyable, and suitable for the user's budget and travel style.
`,
});


return response.text;


} catch (error) {
console.error("Itinerary Error:", error);


throw new Error(
  "Unable to generate your travel itinerary."
);


}
}
