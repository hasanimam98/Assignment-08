import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Navbar />


      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Login
          </h1>


             <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />

             <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />

             <button className="btn btn-warning w-full">
              Login
            </button>
          </form>


             <p className="text-center mt-6">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-orange-500 font-semibold"
            >
              Register
            </Link>


               </p>
        </div>
      </div>

      <Footer />
    </>
  );
}