import React from "react";

export default function SectionItem(props) {
  return (
    <div className="container section-container">
      <div className="heading-wrapper">
        <h2 className="main-heading">{props.mainHeading}</h2>
        <h3 className="sub-heading">{props.subHeading}</h3>
      </div>
      {props.children}
    </div>
  );
}

// set default props
