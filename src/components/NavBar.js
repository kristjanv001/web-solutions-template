import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar-wrapper">
      <div className="container container-navbar">
        <div className="site-title">
          <h1 className="site-title-heading">
            <NavLink to="/">John Doe</NavLink>{" "}
          </h1>
          <p className="site-title-subheading">Web Solutions</p>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active-navlink" exact={true} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-navlink" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-navlink" to="/why">
                Why
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-navlink" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
