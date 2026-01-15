"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Birthday Party Host",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "Ordered a custom birthday cake for my daughter and it was absolutely stunning! The design was exactly what we wanted and tasted amazing. Everyone at the party loved it!",
  },
  {
    name: "Rakib Hassan",
    role: "Wedding Client",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    text: "Our wedding cake was a masterpiece! SweetCakes delivered a beautiful 5-tier cake that exceeded our expectations. Professional service and incredible taste.",
  },
  {
    name: "Nusrat Jahan",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "I've ordered multiple times and they never disappoint. Fresh, delicious, and always delivered on time. Their chocolate cupcakes are to die for!",
  },
  {
    name: "Fahim Rahman",
    role: "Corporate Client",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    text: "Ordered 100+ cupcakes for our office event. The quality was consistent, presentation was perfect, and delivery was punctual. Highly recommend!",
  },
  {
    name: "Mehnaz Sultana",
    role: "Anniversary Celebration",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    text: "The custom anniversary cake was beautiful and romantic. Perfect taste, elegant design, and the team was so helpful with customization. Thank you!",
  },
  {
    name: "Imran Khan",
    role: "Baby Shower Host",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
    text: "Amazing service! The baby shower cake was adorable and delicious. Everyone asked where we got it from. Will definitely order again!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
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
            What Our <span className="text-pink-600">Customers Say</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-pink-200">
                  <Quote size={40} fill="currentColor" />
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-pink-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#EC4899"
                      className="text-pink-600"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex + itemsPerPage >= testimonials.length}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-all ${Math.floor(currentIndex / itemsPerPage) === i
                    ? "bg-pink-600 w-8"
                    : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}