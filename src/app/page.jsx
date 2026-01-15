
'use client'
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import WhyChoose from "@/components/landing/WhyChoose";
import { useState } from "react";
import CakeDetailsModal from "./cakes/[id]/CakeDetails";
import CategoriesSection from "@/components/landing/Category";
import Category from "@/components/landing/Category";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import HowItWorks from "@/components/landing/HowItWorks";

export default function Home() {

  const [selectCake, setSelectCake] = useState(null);
  const [open, setOpen] = useState(false);


  return (
    <>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Features onQuickView={(cake) => {
          setSelectCake(cake);
          setOpen(true);
        }}></Features>
        <CakeDetailsModal
          cake={selectCake}
          isOpen={open}
          onClose={()=> setOpen(false)}
        ></CakeDetailsModal>
      </section>
      <section>
        <WhyChoose></WhyChoose>
      </section>
      <section>
        <Category></Category>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <CTA></CTA>
      </section>

      <section>
        <HowItWorks></HowItWorks>
      </section>



    </>
  );
}
