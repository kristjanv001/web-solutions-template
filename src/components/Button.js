import React from "react";

export default function Button(props) {
  return <button className="btn">{props.children}</button>;
}

// this should take in props:
// - class (e.g. btn-accent)
// - text
