import React from "react";

function Material({ handleChange }) {
  return (
    <div className="mx-2">
      <select
        className="bg-green-500 font-semibold text-white p-2 hover:scale-110 transition-all duration-300 rounded-md"
        onChange={handleChange}
      >
        <option value="">Material</option>
        <option value="Wool">Woolen</option>
        <option value="Cotton">Cotton</option>
        <option value="polyster">Polyster</option>
        <option value="electronics">Joot</option>
      </select>
    </div>
  );
}

export default Material;
