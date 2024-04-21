import { useTour } from "@reactour/tour";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { setIsOpen } = useTour();
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid First-step">
          <Link className="navbar-brand " to="/">
            NewsPulse
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item Second-step">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item Third-step">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item Fourth-step">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="Fifth-step nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="Sixth-step nav-item ">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item Seventh-step">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item Eighth-step">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <button onClick={() => setIsOpen(true)}>Open Tour</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
