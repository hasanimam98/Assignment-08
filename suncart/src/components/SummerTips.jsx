const tips = [
  {
    id: 1,
    title: "Stay Hydrated",
    description: "Drink plenty of water during hot summer days.",
    emoji: "💧",
  },
  {
    id: 2,
    title: "Wear Sunglasses",
    description: "Protect your eyes from harmful UV rays.",
    emoji: "🕶️",
  },

    {
    id: 3,
    title: "Use Sunscreen",
    description: "Apply sunscreen before going outside.",
    emoji: "☀️",
  },

  ];

  const SummerTips = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-orange-500">
        Summer Tips
      </h2>

       <p className="text-center text-gray-500 mt-3 mb-10">
        Stay safe and enjoy your summer with these simple tips.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >

            <div className="text-6xl mb-4">{tip.emoji}</div>

            <h3 className="text-2xl font-bold mb-3">
              {tip.title}
            </h3>

            <p className="text-gray-500">
              {tip.description}
            </p>
          </div>

             ))}
      </div>
    </section>

    );
};


export default SummerTips;