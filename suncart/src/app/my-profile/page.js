import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MyProfile() {
  return (
    <>

    <Navbar />

      <section className="min-h-screen bg-orange-50 py-16 px-4">
        <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-8 text-center">

          <img
            src="https://i.pravatar.cc/200?img=12"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500"
          />


          <h1 className="text-3xl font-bold mt-5">
            Hasan Imam
          </h1>

          <p className="text-gray-500">
            HImam@example.com
          </p>


           <div className="divider"></div>

          <div className="space-y-3 text-left">

            <p>
              <span className="font-semibold">
                Phone:
              </span>{" "}
              +1 (234) 567-890
            </p>

            <p>
              <span className="font-semibold">
                Address:
              </span>{" "}
              New York, USA
            </p>

            <p>
              <span className="font-semibold">
                Favorite Brand:
              </span>{" "}
              Nike
            </p>

            <p>
              <span className="font-semibold">
                Member Since:
              </span>{" "}
              2026
            </p>

               </div>

          <button className="btn btn-warning w-full mt-8">
            Edit Profile
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}