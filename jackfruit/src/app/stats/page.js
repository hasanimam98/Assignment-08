export default function Stats() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Dashboard Stats
      </h1>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-gray-500">Pending</h2>
          <p className="text-3xl font-bold mt-2 text-yellow-500">15</p>
        </div>

           <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-gray-500">Delivered</h2>
          <p className="text-3xl font-bold mt-2 text-green-500">105</p>
        </div>

          </div>
    </div>
  );
}