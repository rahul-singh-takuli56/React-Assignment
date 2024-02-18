import React from "react";

function FoterCard({ heading, desc, icon }) {
  return (
    <div>
      {icon}
      <h1>{heading}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default FoterCard;
