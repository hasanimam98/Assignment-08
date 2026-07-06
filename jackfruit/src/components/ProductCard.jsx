import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
        <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
        />
      </figure>
       <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
         <p>Brand: {product.brand}</p>

          <p className="text-orange-500 font-bold">
          ${product.price}
        </p>

            <p>⭐ {product.rating}</p>
<Link href={`/products/${product.id}`}>
             <button className="btn btn-warning mt-3">
          View Details
        </button>
        </Link>
         </div>
    </div>
  );
};
export default ProductCard;