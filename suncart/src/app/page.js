import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
      <SummerTips />
      <TopBrands />
      <Footer />
    </>
  );
}