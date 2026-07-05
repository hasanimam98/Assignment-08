export default function MyProfile() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        My Profile
      </h1>

           <div className="bg-white shadow-md rounded-xl p-6 text-center">

              <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

         <h2 className="text-2xl font-semibold">
          John Doe
        </h2>

         <p className="text-gray-500 mt-1">
          johndoe@example.com
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          
          <div className="p-4 bg-orange-50 rounded-lg">
            <p className="text-gray-500">Total Orders</p>
            <h3 className="text-xl font-bold">24</h3>
          </div>


           <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-gray-500">Completed</p>
            <h3 className="text-xl font-bold">18</h3>
          </div>


          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-gray-500">Pending</p>
            <h3 className="text-xl font-bold">6</h3>
          </div>


             </div>
      </div>
    </div>
  );
}