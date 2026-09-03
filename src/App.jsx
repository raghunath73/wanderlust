import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import DestinationDetails from "./pages/DestinationDetails";
import Planner from "./pages/Planner";
import Saved from "./pages/Saved";

function App() {
return (
<> <Navbar />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />
    <Route
      path="/destination/:id"
      element={<DestinationDetails />}
    />
    <Route path="/planner" element={<Planner />} />
    <Route path="/saved" element={<Saved />} />
  </Routes>
</>


);
}

export default App;
