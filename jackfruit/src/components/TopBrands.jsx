import BrandCard from "./BrandCard";

const brands = [

      {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    description: "Premium Summer Sportswear",
  },

   {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    description: "Comfortable Summer Collection",
  },

  {
    id: 3,
    name: "Puma",
    logo: "/brands/Puma-Logo-1.png",
    description: "Fashion Meets Comfort",
  },

  {
    id: 4,
    name: "Ray-Ban",
    logo: "/brands/Ray-Ban-Emblem.png",
    description: "Premium Sunglasses",
  },
  ];

const TopBrands = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-orange-500">
        Top Brands
      </h2>

      <p className="text-center text-gray-500 mt-3 mb-10">
        Trusted brands for your summer lifestyle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}

         </div>
    </section>
  );
};

export default TopBrands;