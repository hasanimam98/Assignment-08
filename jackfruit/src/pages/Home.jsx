import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 const topProducts = products.slice(0, 3);

   return (
    <div className="max-w-6xl mx-auto px-4">

         {products.length === 0 ? (
        <p className="text-center mt-10">Loading...</p>
      ) : (
        <section className="mt-20 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Popular Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 mx-auto object-cover"
                />
                <h3 className="font-semibold mt-3">
                  {product.name}
                </h3>

                <p className="text-gray-500">
                  {product.category}
                </p>

                <p className="font-bold text-green-600 mt-2">
                  ${product.price}
                </p>
                 <p className="text-yellow-500">
                  ⭐ {product.rating}
                </p>
                 <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  View Details
                </button>
                </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}