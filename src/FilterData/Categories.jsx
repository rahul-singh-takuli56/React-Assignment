import React from "react";

function Categories({ handleChange }) {
  return (
    <div className="mx-2">
      <select
        className="bg-green-500 font-semibold text-white p-2 hover:scale-110 transition-all duration-300 rounded-md"
        onChange={handleChange}
      >
        <option value=" ">category</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="Sold Out">Sold Out</option>
      </select>
    </div>
  );
}

export default Categories;
