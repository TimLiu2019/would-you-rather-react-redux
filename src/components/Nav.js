import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ user }) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          {user && (
            <NavLink
              to="/dashboard"
              exact
              activeClassName="active"
              className="nav-item nav-link "
            >
              Home
            </NavLink>
          )}
        </li>
        <li>
          {user && (
            <NavLink
              to="/add"
              activeClassName="active"
              className="nav-item nav-link "
            >
              New Question
            </NavLink>
          )}
        </li>
        <li>
          {user && (
            <NavLink
              to="/leaderboard"
              activeClassName="active"
              className="nav-item nav-link "
            >
              Leader Board
            </NavLink>
          )}
        </li>
        {user && <li className="nav-user">Hello, {user.name}</li>}
        <li>
          {user && (
            <img
              src={user.avatarURL}
              alt={`Avatar of ${user.name}`}
              className="nav-avatar"
            />
          )}
        </li>
        <li>
          {user && (
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to="/logout"
            >
              Logout
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser]
  };
}

export default connect(mapStateToProps)(Nav);
