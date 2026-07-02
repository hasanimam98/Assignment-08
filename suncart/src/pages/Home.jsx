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
    <div>
         <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProducts.map((product) => (
  <div
    key={product.id}
    className="bg-white shadow rounded-xl p-4 text-center"
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
  </div>
))}
        </div>
      </section>
    </div>
  );
}