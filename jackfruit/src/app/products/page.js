import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopularProducts from "@/components/PopularProducts";
export default function Products() {
  return (

       <>
      <Navbar />

       <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-3">
          All Products
        </h1>

         <p className="text-center text-gray-500 mb-10">
          Browse all our summer essentials.
        </p>


 <PopularProducts limit={null} title={false} />
      </div>

         <Footer />
    </>
  );
}