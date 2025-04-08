import logo from "./logo.svg";
import "./App.css";
import Books from "./components/Books";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { lazy, Suspense } from "react"; // Lazy Import

const About = lazy(() => import("./components/About"));
const Home = lazy(() => import("./components/Home"));
const Contact = lazy(() => import("./components/Contact"));


function App() {
  return (
    <div className="App">
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
