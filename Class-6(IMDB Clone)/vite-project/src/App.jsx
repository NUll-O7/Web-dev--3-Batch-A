import "./App.css";
import Movies from "./components/Movies";
import NavBar from "./components/Navbar";
import Recommendation from "./components/Recommendation";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/recommend" element={<Recommendation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
