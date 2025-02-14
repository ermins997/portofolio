"use client"
import { useEffect } from "react";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Testimional from "@/components/Testimonial";
import Footer from "@/components/Footer";


const Home = () => {

  useEffect(() =>{
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, [])
  return (
    <>
     <Hero />
     <FixedMenu />
     <Services />
     <About />
     <Journey />
     <Work />
     <Testimional />
     <Contact />
     <Footer />
   {/*<div className="h-[3000px]"></div> */} 
    </>
  )
}

export default Home;