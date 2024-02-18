import React from "react";
import FoterCard from "./FoterCard";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdAssignmentReturn } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";

function FooterTop() {
  return (
    <div className="h-80 bg-slate-400 text-black mx-2">
      <div className="items-center justify-between">
        <h1>4 Reason To Buy From Us</h1>
      </div>
      <div className="flex ">
        <FoterCard
          icon={<FaTruckArrowRight />}
          heading="Free Shipping"
          desc="Free shipping for order above ₹500 across India."
        />
        <FoterCard
          icon={<MdAssignmentReturn />}
          heading="RETURNS"
          desc="Hassle free 7 days return."
        />
        <FoterCard
          icon={<FaRegHandPointRight />}
          heading="ASSURED QUALITY & VALUE"
          desc="Our efficient supply chain brings you value without compromising on quality."
        />
        <FoterCard
          icon={<FcOnlineSupport />}
          heading="CUSTOMER SERVICE"
          desc="A customer first service culture is core to our company values."
        />
      </div>
    </div>
  );
}

export default FooterTop;
