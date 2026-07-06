export default function Timeline() {
  const activities = [
    { id: 1, title: "Order Placed", time: "2 hours ago" },
    { id: 2, title: "Product Shipped", time: "1 day ago" },
    { id: 3, title: "Out for Delivery", time: "2 days ago" },
    { id: 4, title: "Delivered", time: "3 days ago" },
  ];

   return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Order Timeline
      </h1>

            <div className="border-l-2 border-gray-300 pl-6 space-y-8">
        {activities.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full"></div>

                <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}