"use client";

import { motion } from "framer-motion";
import { GiCupcake } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";

const features = [
  {
    title: "Freshly Baked",
    description:
      "All our cakes are baked fresh daily using premium quality ingredients.",
    icon: GiCupcake,
  },
  {
    title: "Custom Designs",
    description:
      "Get cakes designed exactly how you want for birthdays, weddings, and events.",
    icon: MdDesignServices,
  },
  {
    title: "Fast Delivery",
    description:
      "On-time and safe delivery so your celebrations are never delayed.",
    icon: FaTruckFast,
  },
  {
    title: "Affordable Prices",
    description:
      "Premium taste at reasonable prices with exciting offers.",
    icon: BiSolidOffer,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
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
            Why Choose <span className="text-[#EC4899]">SweetCakes</span>?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We focus on quality, taste, and customer satisfaction to make every
            celebration special.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-pink-50 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="text-5xl text-[#EC4899]" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}