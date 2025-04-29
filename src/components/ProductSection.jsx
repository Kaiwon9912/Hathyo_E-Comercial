import React from "react";

import { productData } from "../data/productData";
import ProductCard from "./ProductCard";
import Promotions from "./Promotions";

const ProductSection = () => {
  return (
    <section className="px-4 bg-primary py-8 flex space-around items-start gap-6 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productData.map((product, index) => {
          const safeProduct = {
            ...product,
            image: product.image || "/src/assets/images/default-product.jpg", // default fallback
          };
          return (
            <ProductCard
              key={index}
              product={safeProduct}
            />
          );
        })}
      </div>
      
    </section>
  );
};

export default ProductSection;
