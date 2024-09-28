import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Get unique brands from the products array
  const brands = ["All", ...new Set(PRODUCTS.map((product) => product.brand))];

  // Filter products based on selected brand
  const filteredProducts =
    selectedBrand === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.brand === selectedBrand);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shoes Store</h1>
      </div>

      <div className="brandFilterBar">
        {brands.map((brand) => (
          <button
            key={brand}
            className={`brandButton ${selectedBrand === brand ? "active" : ""}`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
