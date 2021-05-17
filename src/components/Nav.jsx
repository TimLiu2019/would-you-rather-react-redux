import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="nav-item nav-link "
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new"
            activeClassName="active"
            className="nav-item nav-link "
          >
            New Question
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
