import React from "react";

function FoterCard({ heading, desc, icon }) {
  return (
    <div className="">
      <div className="h-[60px] w-[30px] pb-2">{icon}</div>
      <h1 className="text-black text-xl ">{heading}</h1>
      <p className="text-black text-sm font-thin">{desc}</p>
    </div>
  );
}
export default FoterCard;
