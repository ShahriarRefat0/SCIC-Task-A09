import Image from "next/image";

const cakes = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    price: 1200,
    offerPrice: 950,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800&q=80",
    description: "Rich chocolate cake with creamy truffle frosting.",
  },
  {
    id: 2,
    name: "Strawberry Cream Cake",
    price: 1000,
    offerPrice: 850,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80",
    description: "Fresh strawberry layers with smooth cream.",
  },
  {
    id: 3,
    name: "Vanilla Celebration Cake",
    price: 900,
    offerPrice: 750,
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1599785209707-28c9c0a0e7c3?auto=format&fit=crop&w=800&q=80",
    description: "Classic vanilla cake for every celebration.",
  },
  {
    id: 4,
    name: "Red Velvet Cake",
    price: 1300,
    offerPrice: 1100,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=80",
    description: "Soft red velvet with cream cheese frosting.",
  },
];

export default async function CakeDetailsPage({ params }) {
  const resolvedParams = await params; // ✅ await params first
  const id = Number(resolvedParams.id); // ✅ convert string → number

  const cake = cakes.find((c) => c.id === id);
  console.log("details", cake);

  if (!cake) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Cake not found 🍰</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative h-[400px]">
            <Image
              src={cake.image}
              alt={cake.name}
              fill
              className="object-cover"
              priority
            />

            {cake.discount && (
              <div className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {cake.discount}% OFF
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800">
              {cake.name}
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              {cake.description}
            </p>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-4xl font-bold text-pink-600">
                ৳{cake.offerPrice}
              </span>
              <span className="text-xl text-gray-400 line-through">
                ৳{cake.price}
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
              <button className="flex-1 bg-pink-600 text-white py-4 rounded-full font-medium hover:bg-pink-700 transition">
                Add to Cart 🛒
              </button>

              <a
                href="/cakes"
                className="flex-1 text-center border border-gray-300 py-4 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Back to Cakes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
