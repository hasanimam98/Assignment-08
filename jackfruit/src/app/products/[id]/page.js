import Link from "next/link";
import { notFound } from "next/navigation";

async function getProducts() {
  const res = await fetch("http://localhost:3000/products.json", {
    cache: "no-store",
  });

  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const products = await getProducts();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    notFound();
  }

   return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full"
        />

        <div>
          <h1 className="text-5xl font-bold mb-5">
            {product.name}
          </h1>

          <p className="text-xl mb-4">
            Brand: {product.brand}
          </p>


             <p className="text-orange-500 text-3xl font-bold mb-4">
            ${product.price}
          </p>

          <p className="mb-4">
            ⭐ {product.rating}
          </p>

           <p className="text-gray-600">
            {product.description}
          </p>

          <div className="mt-6">
  <button className="btn btn-warning">
    Buy Now
  </button>

<Link href="/products" className="btn btn-outline ml-3">
  Back
</Link>
</div>

        </div>

      </div>
    </div>
  );
}