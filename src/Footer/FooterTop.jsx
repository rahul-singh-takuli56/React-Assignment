import React from "react";
import FoterCard from "./FoterCard";

function FooterTop() {
  return (
    <div className="h-72 bg-green-100">
      <h1 className="pl-[550px] text-4xl font-semibold pt-8">
        4 Reason To Buy From Us
      </h1>
      <div className="grid grid-cols-4 gap-2 px-20 py-10">
        <FoterCard
          icon={
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_640.png"
              alt="image"
            />
          }
          heading="Free Shipping"
          desc="Free shipping for order above ₹500 across India."
        />
        <FoterCard
          icon={
            <img
              src="https://cdn.pixabay.com/photo/2012/04/11/10/44/rewind-27431_1280.png"
              alt="image"
            />
          }
          heading="Returns"
          desc="Hassle free 7 days return."
        />
        <FoterCard
          icon={
            <img src="https://t3.ftcdn.net/jpg/00/37/17/72/360_F_37177208_QEUKoKDIT9VXqeto9EZf3FKwEmo91mDI.jpg" />
          }
          heading="Assured quality & value"
          desc="Our efficient supply chain brings you value without compromising on quality."
        />
        <FoterCard
          icon={
            <img src="https://cdn1.vectorstock.com/i/1000x1000/81/50/customer-care-service-and-support-icon-vector-14678150.jpg" />
          }
          heading="Customer Service"
          desc="A customer first service culture is core to our company values."
        />
      </div>
    </div>
  );
}

export default FooterTop;
