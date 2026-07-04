const BrandCard = ({ brand }) => {
  return (

     <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
      <figure className="p-6">

        <img
          src={brand.logo}
          alt={brand.name}
          className="h-24 object-contain"
        />
      </figure>


       <div className="card-body text-center">
        <h2 className="text-xl font-bold">
          {brand.name}
        </h2>

        <p className="text-gray-500">
          {brand.description}
        </p>

         </div>
    </div>
  );
};


export default BrandCard;