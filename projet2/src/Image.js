import React from "react";
import product from "./product";

function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      style={{ maxWidth: "200px", borderRadius: "10px" }}
    />
  );
}

export default Image;