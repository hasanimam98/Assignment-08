"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const PopularProducts = ({ limit = 4, title = true }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        if (limit) {
          setProducts(data.slice(0, limit));
        } else {
          setProducts(data);
        }
      });

      }, [limit]);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">

      {title && (
        <>
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-3">
            Popular Products
          </h2>

          <p className="text-center text-gray-500 mb-10">
            Discover our best-selling summer essentials.
          </p>
        </>
      )}

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default PopularProducts;