import React from "react";

function Price({ handlePriceRangeChange }) {
  return (
    <div className="mx-2">
      <select
        className="bg-zinc-100 font-semibold text-black p-2 hover:scale-110 transition-all duration-300 rounded-md"
        onChange={handlePriceRangeChange}
      >
        <option value=" ">Price</option>
        <option value="100">Less than 100</option>
        <option value="200">Less than 200</option>
        <option value="300">Less than 300</option>
        <option value="400">Less than 400</option>
        <option value="500">Less than 500</option>
      </select>
    </div>
  );
}

export default Price;
