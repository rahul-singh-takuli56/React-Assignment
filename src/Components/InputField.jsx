import React from "react";

function InputField({ handleChange, value, title, name }) {
  return (
    <div>
      <select className="bg-green-500 font-bold text-white p-2 hover:scale-110 transition-all duration-300 rounded-md">
        onChange={handleChange}
        <option>{value}</option>
      </select>
    </div>
  );
}

export default InputField;
