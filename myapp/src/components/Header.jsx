import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header() {
  const {isAuth} = useSelector((store)=>store.userList)
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <Link
            className="navbar-brand text-white fw-bold ms-3"
            to="/dashboard"
          >
            Weather App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNav"
          >
            {isAuth ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    Dashboard
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <Link to="/login">
                  <button className="btn btn-success text-white fw-bold me-5">
                    Login
                  </button>
                </Link>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
