import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/Navbar";
import Recommendation from "./components/Recommendation";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [watchlist , setWatchlist] = useState([])

  function handleAddToWatchList(movieObj){
     let updatedWatchList = [...watchlist , movieObj]
     setWatchlist(updatedWatchList)
     console.log(updatedWatchList)
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies handleAddtoWatchList={handleAddToWatchList} watchlist={watchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/recommend" element={<Recommendation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
