import React from "react";

function Items({ result }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{result}</div>
  );
}

export default Items;
