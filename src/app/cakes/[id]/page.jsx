import Image from "next/image";
import { MdShoppingBag } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
const cakes = [
  {
    "id": 1,
    "name": "Chocolate Truffle Cake",
    "price": 1200,
    "offerPrice": 950,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "description": "Rich chocolate cake with creamy truffle frosting and chocolate shavings.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 2,
    "name": "Red Velvet Delight",
    "price": 1500,
    "offerPrice": 1200,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80",
    "description": "Classic red velvet cake with cream cheese frosting and a hint of cocoa.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 3,
    "name": "Vanilla Dream Cake",
    "price": 900,
    "offerPrice": 720,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1588195538326-c5b1e5b80647?auto=format&fit=crop&w=800&q=80",
    "description": "Light and fluffy vanilla sponge cake with buttercream frosting.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 4,
    "name": "Strawberry Shortcake",
    "price": 1300,
    "offerPrice": 975,
    "discount": 25,
    "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    "description": "Fresh strawberries layered with whipped cream and vanilla sponge.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 5,
    "name": "Black Forest Cake",
    "price": 1400,
    "offerPrice": 1120,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
    "description": "Classic Black Forest with chocolate sponge, cherries, and whipped cream.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 6,
    "name": "Elegant Wedding Cake",
    "price": 8500,
    "offerPrice": 7650,
    "discount": 10,
    "image": "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80",
    "description": "Three-tier elegant wedding cake with white fondant and floral decorations.",
    "category": "Wedding",
    "weight": "5kg",
    "servings": "50-60 people"
  },
  {
    "id": 7,
    "name": "Rainbow Cake",
    "price": 1600,
    "offerPrice": 1280,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1562440499-64c9a4d07742?auto=format&fit=crop&w=800&q=80",
    "description": "Colorful rainbow layers with vanilla cream frosting, perfect for kids.",
    "category": "Birthday",
    "weight": "1.5kg",
    "servings": "10-12 people"
  },
  {
    "id": 8,
    "name": "Tiramisu Cake",
    "price": 1700,
    "offerPrice": 1360,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    "description": "Italian classic with coffee-soaked ladyfingers and mascarpone cream.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 9,
    "name": "Chocolate Cupcakes (12 pcs)",
    "price": 600,
    "offerPrice": 450,
    "discount": 25,
    "image": "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80",
    "description": "Dozen chocolate cupcakes with swirled buttercream frosting.",
    "category": "Cupcakes",
    "weight": "600g",
    "servings": "12 pieces"
  },
  {
    "id": 10,
    "name": "Vanilla Cupcakes (12 pcs)",
    "price": 550,
    "offerPrice": 440,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=80",
    "description": "Classic vanilla cupcakes with colorful frosting and sprinkles.",
    "category": "Cupcakes",
    "weight": "600g",
    "servings": "12 pieces"
  },
  {
    "id": 11,
    "name": "Oreo Cheesecake",
    "price": 1800,
    "offerPrice": 1440,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=800&q=80",
    "description": "Creamy cheesecake with Oreo cookie crust and topping.",
    "category": "Pastries",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 12,
    "name": "Butterscotch Cake",
    "price": 1100,
    "offerPrice": 880,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
    "description": "Smooth butterscotch cake with caramel drizzle and crunchy toppings.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 13,
    "name": "Pineapple Cake",
    "price": 1000,
    "offerPrice": 800,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?auto=format&fit=crop&w=800&q=80",
    "description": "Tropical pineapple cake with fresh pineapple chunks and whipped cream.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 14,
    "name": "Blueberry Cheesecake",
    "price": 1900,
    "offerPrice": 1520,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=80",
    "description": "Rich cheesecake topped with fresh blueberry compote.",
    "category": "Pastries",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 15,
    "name": "Mango Mousse Cake",
    "price": 1600,
    "offerPrice": 1200,
    "discount": 25,
    "image": "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80",
    "description": "Light and airy mango mousse cake with fresh mango pieces.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 16,
    "name": "Ferrero Rocher Cake",
    "price": 2200,
    "offerPrice": 1760,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=800&q=80",
    "description": "Luxurious chocolate hazelnut cake decorated with Ferrero Rocher chocolates.",
    "category": "Birthday",
    "weight": "1.5kg",
    "servings": "10-12 people"
  },
  {
    "id": 17,
    "name": "Carrot Cake",
    "price": 1250,
    "offerPrice": 1000,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1621303837197-1414f2fae8e3?auto=format&fit=crop&w=800&q=80",
    "description": "Moist carrot cake with cream cheese frosting and walnut toppings.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 18,
    "name": "Coffee Walnut Cake",
    "price": 1350,
    "offerPrice": 1080,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=800&q=80",
    "description": "Rich coffee-flavored cake with crunchy walnuts and coffee buttercream.",
    "category": "Birthday",
    "weight": "1kg",
    "servings": "8-10 people"
  },
  {
    "id": 19,
    "name": "Unicorn Cake",
    "price": 2500,
    "offerPrice": 2000,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "description": "Magical unicorn-themed cake with colorful frosting, horn, and ears.",
    "category": "Birthday",
    "weight": "2kg",
    "servings": "15-18 people"
  },
  {
    "id": 20,
    "name": "Fruit Tart Assortment",
    "price": 800,
    "offerPrice": 640,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "description": "Assorted mini fruit tarts with custard filling and fresh seasonal fruits.",
    "category": "Pastries",
    "weight": "500g",
    "servings": "6-8 pieces"
  }
];
export default async function CakeDetailsPage({ params }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  const cake = cakes.find((c) => c.id === id);
  console.log("details", cake);

  if (!cake) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-2xl font-semibold">Cake not found 🍰</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Image */}
          <div className="relative h-[430px]">
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
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {cake.name}
              </h1>

              <p className="mt-4 text-gray-600 text-lg">
                {cake.description}
              </p>

              {/* Meta Info */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-pink-100 text-pink-700 rounded-xl py-2 text-center">
                  <p className="text-sm font-medium">Category</p>
                  <p className="font-semibold">{cake.category}</p>
                </div>

                <div className="bg-pink-100 text-pink-700 rounded-xl py-2 text-center">
                  <p className="text-sm font-medium">Weight</p>
                  <p className="font-semibold">{cake.weight}</p>
                </div>

                <div className="bg-pink-100 text-pink-700 rounded-xl py-2 text-center">
                  <p className="text-sm font-medium">Servings</p>
                  <p className="font-semibold">{cake.servings}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-4xl font-bold text-pink-600">
                  ৳{cake.offerPrice}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ৳{cake.price}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-4 rounded-full font-medium hover:bg-pink-700 transition">
                <MdShoppingBag size={20} />
                <span>Add to Cart</span>
              </button>

              <Link
                href="/cakes"
                className="flex-1 flex items-center justify-center gap-2 border text-gray-700 border-gray-300 py-4 rounded-full font-medium hover:bg-gray-100 transition"
              >
                <GoArrowLeft size={22} />
                <span>Back to Cakes</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
