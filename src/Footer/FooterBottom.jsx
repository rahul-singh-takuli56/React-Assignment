import React from "react";

function FooterBottom() {
  return (
    <div className="h-60 bg-cyan-900">
      <div className="grid grid-cols-4 gap-4 text-white pl-20 pr-20 pt-20">
        <div>
          <h1>Contact Us</h1>
          <div className="py-3">
            <p className="hover:underline">
              <span>IND: </span>+91 9348958639
            </p>
            <p className="hover:underline">
              <span>USA: </span>+90 9348384539
            </p>
            <p className="hover:underline">
              <span>UAE: </span>+71 9348384539
            </p>
            <p className="hover:underline">
              <span>RUS: </span>+92 9348384521
            </p>
          </div>
        </div>
        <div>
          <h1> Follow Us </h1>
          <ul className="py-3">
            <li className="hover:underline">Instagram</li>
            <li className="hover:underline">Facebook</li>
            <li className="hover:underline">Twitter</li>
            <li className="hover:underline">YouTube</li>
          </ul>
        </div>
        <div>
          <h1>Address</h1>
          <div className="py-3">
            <p className="hover:underline">
              Suite 713 10810 Kaleigh Meadows, North India, DE 86139
            </p>
            <p className="hover:underline">GET DIRECTION</p>
          </div>
        </div>
        <div>
          Carrers
          <div className="py-3">
            <p className="hover:underline">Email us at : rahulsingh@123</p>
            <p className="hover:underline">Email us at : rahulsingh@123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
