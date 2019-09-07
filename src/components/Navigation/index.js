import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-brand">Herolo Weather Task</div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="nav-link">
              <NavLink to="/">Home</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <NavLink to="/favorites">Favorites</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
