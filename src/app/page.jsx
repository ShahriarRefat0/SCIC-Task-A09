
'use client'
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import WhyChoose from "@/components/landing/WhyChoose";
import Category from "@/components/landing/Category";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import HowItWorks from "@/components/landing/HowItWorks";

export default function Home() {


  return (
    <>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Features></Features>
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
