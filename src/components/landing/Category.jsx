"use client";

import { motion } from "framer-motion";
import { Cake, Gift, Heart, Coffee } from "lucide-react";

const categories = [
  {
    title: "Birthday Cakes",
    description: "Colorful & fun designs for all ages",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=400&fit=crop",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Wedding Cakes",
    description: "Elegant multi-tier masterpieces",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cupcakes",
    description: "Perfect for parties & events",
    icon: Cake,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=400&fit=crop",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Pastries",
    description: "Delicious treats & desserts",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Category() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
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
            Explore Our <span className="text-pink-600">Categories</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From birthdays to weddings, we have the perfect cake for every occasion
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <IconComponent className="text-6xl drop-shadow-lg" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 text-center drop-shadow-md">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-center opacity-90 drop-shadow-md">
                    {category.description}
                  </p>

                  {/* View Button (appears on hover) */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-4 px-6 py-2 bg-white text-gray-800 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:shadow-xl"
                  >
                    View All
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}