# 🌍 WANDERLUST — AI Travel Planner

> **Explore the world. Plan smarter. Travel better.**

Wanderlust is a modern AI-powered travel planning web application that helps users discover amazing destinations, explore famous places, check live weather, save favorite locations, and generate personalized travel itineraries using Artificial Intelligence.

---

## ✨ Features

### 🌎 Explore Destinations

Discover beautiful destinations from around the world with detailed information and stunning visuals.

### 🔍 Search & Filter

Easily search for destinations and filter them based on different travel categories and interests.

### 📍 Destination Details

Each destination includes:

* Country and location information
* Destination description
* Travel category
* Quick travel information
* Famous places to visit

### 🏛️ Famous Places

Explore popular attractions and must-visit locations for every destination.

### 🌤️ Live Weather

Get current weather information for destinations, including:

* Temperature
* Feels-like temperature
* Humidity
* Wind speed
* Weather conditions

### ❤️ Save Destinations

Save your favorite destinations and create your personal travel wishlist.

Saved destinations are stored using **LocalStorage**, so they remain available even after refreshing the browser.

### 🤖 Wanderlust AI Assistant

Ask the AI assistant questions about:

* Travel destinations
* Famous places
* Best time to visit
* Budget travel
* Food recommendations
* Travel tips
* Cultural experiences
* Adventure activities

### 🗺️ AI Trip Planner

Generate a personalized day-by-day travel itinerary based on:

* 📍 Destination
* 📅 Number of days
* 💰 Budget
* 🎒 Travel style

### 📱 Responsive Design

The application is designed to work smoothly on:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

---

# 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Routing

* React Router DOM

### Icons

* Lucide React

### AI Integration

* Google Gemini API
* `@google/genai`

### Weather

* OpenWeather API

### Storage

* Browser LocalStorage

### Build Tool

* Vite

---

# 📂 Project Structure

```text
wanderlust/
│
├── public/
│   └── favicon.png
│
├── src/
│   │
│   ├── components/
│   │   ├── DestinationCard.jsx
│   │   ├── FamousPlaces.jsx
│   │   ├── Navbar.jsx
│   │   ├── SaveDestinationButton.jsx
│   │   ├── TravelChatbot.jsx
│   │   └── Weather.jsx
│   │
│   ├── data/
│   │   └── destinations.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── DestinationDetails.jsx
│   │   ├── Planner.jsx
│   │   └── Saved.jsx
│   │
│   ├── services/
│   │   ├── geminiService.js
│   │   └── weatherService.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

# 🚀 Installation and Setup

Follow these steps to install and run the project on your computer.

## 1️⃣ Prerequisites

Make sure you have the following installed:

* **Node.js**
* **npm**

You can check whether they are installed by running:

```bash
node -v
npm -v
```

---

## 2️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/wanderlust.git
```

---

## 3️⃣ Navigate to the Project Folder

```bash
cd wanderlust
```

---

## 4️⃣ Install Dependencies

Run:

```bash
npm install
```

This will install all required project dependencies.

---

## 5️⃣ Install Required Packages

If they are not already included in your project, install:

### React Router

```bash
npm install react-router-dom
```

### Lucide Icons

```bash
npm install lucide-react
```

### Google Gemini AI SDK

```bash
npm install @google/genai
```

---

# 🔑 Environment Variables

Create a `.env` file in the **root folder** of your project.

Your project structure should look like this:

```text
wanderlust/
│
├── .env
├── package.json
├── src/
└── public/
```

Add your API keys:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

⚠️ **Important:** Never share your API keys publicly.

Make sure your `.gitignore` contains:

```text
.env
node_modules
dist
```

---

# ▶️ Running the Application

After installing all dependencies and adding your API keys, start the development server:

```bash
npm run dev
```

You will see something similar to:

```text
VITE ready

➜ Local: http://localhost:5173/
```

Open the local URL in your browser:

```text
http://localhost:5173/
```

🎉 Your **Wanderlust AI Travel Planner** is now running!

---

# 🏗️ Build for Production

To create a production build, run:

```bash
npm run build
```

This will create a:

```text
dist/
```

folder containing the optimized production version of the application.

To preview the production build locally:

```bash
npm run preview
```

---

# 🤖 AI Travel Assistant

The Wanderlust AI Assistant allows users to ask travel-related questions.

### Example Questions

```text
What are the best places to visit in Tokyo?

Is Bali good for a honeymoon?

What is the best time to visit Paris?

How much budget do I need for Iceland?

What are some adventure activities in New York?
```

---

# 🗺️ AI Trip Planner

Users can enter their travel preferences:

```text
Destination: Tokyo

Days: 5

Budget: Medium

Travel Style: Culture
```

The AI generates a personalized day-by-day itinerary.

### Example

```text
DAY 1 — Discover Traditional Tokyo

Morning:
• Visit Senso-ji Temple

Afternoon:
• Explore Asakusa

Evening:
• Visit Tokyo Skytree

Estimated Budget:
• Medium
```

---

# ❤️ Saved Destinations

Users can save destinations by clicking the **Save Destination** button.

Saved destinations are stored using:

```text
LocalStorage
```

This allows users to keep their travel wishlist even after refreshing the website.

---

# 🌤️ Weather Integration

Wanderlust uses the OpenWeather API to display weather information for destinations.

The weather section provides:

* 🌡️ Temperature
* 🤔 Feels-like temperature
* 💧 Humidity
* 💨 Wind speed
* ☁️ Weather conditions

---

# 📸 Screenshots

You can add screenshots of your project here:

```text
screenshots/
│
├── home.png
├── explore.png
├── destination.png
├── planner.png
└── chatbot.png
```

Then display them in the README:

```markdown
![Home Page](https://github.com/raghunath73/wanderlust/blob/main/screenshots/home.png)
```

---

# 🎯 Future Improvements

Some features that can be added in the future:

* 🌍 More destinations
* 🗺️ Interactive maps
* ✈️ Flight search integration
* 🏨 Hotel recommendations
* 💰 Currency converter
* 📍 User location detection
* 🔐 User authentication
* ☁️ Cloud database
* 👥 User accounts
* 🌐 Multi-language support
* ⭐ Destination ratings and reviews

---

# 🧠 What I Learned

Through this project, I gained experience with:

* React component architecture
* React Router
* React Hooks
* API integration
* Environment variables
* Gemini AI integration
* Weather API integration
* LocalStorage
* Responsive web design
* Error handling
* Loading states
* Building reusable components

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "Add new feature"
```

5. Push your branch:

```bash
git push origin feature/new-feature
```

6. Create a Pull Request.

---

# 👨‍💻 Author

## **Surya Teja**

Developer passionate about:

> 🌍 Technology • 🤖 Artificial Intelligence • 💻 Web Development • 🚀 Building Creative Digital Experiences

---

# 📄 License

This project is created for **educational and personal use**.

---

# 🌍 WANDERLUST

## **The world is too big to stay in one place.**

### ✈️ Explore. Discover. Experience.

⭐ If you like this project, consider giving it a star on GitHub!
