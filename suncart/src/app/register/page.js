import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Register() {
  return (
    <>

     <Navbar />

      <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
            Register
          </h1>

             <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />

              <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            

                <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
            />


  <button className="btn btn-warning w-full">
              Register
            </button>

          </form>



           <p className="text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-orange-500 font-semibold"
            >
              Login
            </Link>

            </p>

        </div>
      </div>

      <Footer />
    </>

  );
}