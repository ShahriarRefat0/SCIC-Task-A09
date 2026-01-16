"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdShoppingBag } from "react-icons/md";
import { HiEye } from "react-icons/hi";
// import eye from '../../../public/Eye.gif';
// import shop from '../../../public/Cart V5.svg'
export default function CakeCard({
  cake
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 z-10 bg-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
        {cake?.discount}% OFF
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={cake?.image}
          alt={cake?.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {cake?.name}
        </h3>

        {/* Price */}
        <div className="mt-2 flex items-center gap-3">
          <span className="text-xl font-bold text-pink-600">
            ৳{cake?.offerPrice}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ৳{cake?.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-2 flex items-start gap-3">
          <Link href={`/cakes/${cake?.id}`}
            
            className="bg-[#EC4899] cursor-pointer p-3 rounded-xl cursor-pinter  hover:border-[#EC4899] border hover:bg-white hover:text-[#EC4899] transition">
            <HiEye  size={20}/>
          </Link>

          <button className="bg-[#EC4899] cursor-pointer p-3 rounded-xl cursor-pinter border hover:border-[#EC4899] hover:bg-white hover:text-[#EC4899]">
            <MdShoppingBag  size={20}/>
          </button>
        </div>
        {/* <div className="mt-2 flex items-start gap-3">
          <button className="bg-[#EC4899] p-3 rounded-xl cursor-pointer hover:border-[#EC4899] border hover:bg-white hover:text-[#EC4899] transition">
            <Image src={eye} alt="View" width={20} height={20} />
          </button>

          <button className="bg-[#EC4899] p-3 rounded-xl cursor-pointer border hover:border-[#EC4899] hover:bg-white hover:text-[#EC4899] transition">
            <Image src={shop} alt="Add to cart" width={20} height={20} />
          </button>
        </div> */}
      </div>
    </motion.div>
  );
}
