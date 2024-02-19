import React, { useEffect, useState } from "react";
import Data from "../../public/data.json";

function ProductDetail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(Data);
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDetail;
