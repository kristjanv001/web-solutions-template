import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container hero">
      <p className="hero-title">DEVELOPER</p>
      <p className="hero-name">John Doe</p>
      <h2 className="hero-main">Builds Fast and scalable websites</h2>

      <Link to="/projects">
        <button className="btn ">See Projects</button>
      </Link>
    </div>
  );
}

export default Hero;
