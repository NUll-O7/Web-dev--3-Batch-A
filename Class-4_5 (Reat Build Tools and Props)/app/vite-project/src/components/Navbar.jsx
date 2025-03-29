import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function UpdateLogin() {
    setIsLoggedIn(true);
  }

  function signout() {
    setIsLoggedIn(false);
  }

  console.log(isLoggedIn);

  return (
    <div className="navbar">
      <div className="navbar-logo">Amazon</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-links">
        <a href="#deals" className="nav-link">
          Today's Deals
        </a>
        <a href="#cart" className="nav-link">
          Cart
        </a>
        {isLoggedIn ? (
          <div>Mark</div>
        ) : (
          <button onClick={UpdateLogin} className="nav-login-button">
            Sign in
          </button>
        )}

        <button onClick={signout} className="nav-login-button">
            Sign Out
          </button>
      </div>
    </div>
  );
}

export default Navbar;
