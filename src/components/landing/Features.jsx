"use client";

import { motion } from "framer-motion";
import CakeCard from "@/components/itemCard/CakeCard";

export default function FeaturedCakes({ onQuickView }) {
  const featuredCakes = [
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
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured <span className="text-pink-600">Cakes</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our most loved cakes, freshly baked and specially curated for you.
          </p>
        </motion.div>

        {/* Cake Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CakeCard
                cake={cake}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
