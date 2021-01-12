import React from "react";
import { IconContext } from "react-icons";

export default function PitchCard(props) {
  return (
    <div className="card-container pitch-card">
      <div className="pitch-card-content-container ">
        <div className="pitch-card-icon-container">
          <IconContext.Provider
            value={{
              className: "pitch-card-icon",
            }}
          >
            {props.icon}
          </IconContext.Provider>
        </div>

        <div className="card-content-text">
          <h2>{props.cardTitle}</h2>
          {props.children}
        </div>
      </div>
    </div>
  );
}
