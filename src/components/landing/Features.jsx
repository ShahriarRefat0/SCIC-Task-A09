"use client";

import { motion } from "framer-motion";
import CakeCard from "@/components/itemCard/CakeCard";

export default function FeaturedCakes({ onQuickView }) {
  const featuredCakes = [
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
