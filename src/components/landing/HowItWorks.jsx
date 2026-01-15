"use client";

import { motion } from "framer-motion";
import { Search, PenTool, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Browse & Choose",
    description:
      "Explore our wide selection of cakes, cupcakes, and pastries. Filter by occasion, flavor, and design to find your perfect match.",
    icon: Search,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    number: "02",
    title: "Customize Your Order",
    description:
      "Personalize your cake with custom messages, special designs, flavors, and sizes. Make it truly unique for your celebration.",
    icon: PenTool,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    number: "03",
    title: "Place Your Order",
    description:
      "Add to cart, choose your delivery date and time, then complete your purchase securely with multiple payment options.",
    icon: ShoppingCart,
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    number: "04",
    title: "Fast Delivery",
    description:
      "Sit back and relax! We'll bake your cake fresh and deliver it safely to your doorstep right on time for your celebration.",
    icon: Truck,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">🎂</div>
        <div className="absolute bottom-20 right-10 text-8xl">🧁</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">🍰</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How <span className="text-pink-600">It Works</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ordering your perfect cake is simple! Follow these 4 easy steps and enjoy delicious cakes delivered to your door.
          </p>
        </motion.div>

        {/* Steps Grid - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 via-purple-200 to-green-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      {/* Number Badge */}
                      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`${step.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mt-6 mb-4`}
                      >
                        <IconComponent className={step.iconColor} size={32} />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Steps Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-6"
              >
                {/* Timeline Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-pink-200 to-purple-200 -translate-x-1/2" />
                )}

                {/* Number Circle */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10`}>
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  {/* Icon */}
                  <div className={`${step.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 inline-flex`}>
                    <IconComponent className={step.iconColor} size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-3"
          >
            Start Ordering Now
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}