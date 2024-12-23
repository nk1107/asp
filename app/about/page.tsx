"use client"; // Ensure this is at the top of your file
import Image from "next/image";
import React from "react";
import { auth } from "@/auth";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ParallaxScrollDemo from "@/components/projects";
import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { SignOut } from "@/components/sign-out";
import Link from "next/link";
import Menu from "@/components/Menu";


const data = [
  {
    category: "Innovative Solutions",
    title:
      "Leading the way in solar technology to provide sustainable energy solutions.",
  },
  {
    category: "Expert Team",
    title:
      "Our certified professionals ensure high-quality installations and exceptional service.",
  },
  {
    category: "Customer-Centric Approach",
    title:
      "We prioritize our clients, tailoring solutions to meet individual energy needs.",
  },
  {
    category: "Eco-Friendly Impact",
    title:
      "Committed to reducing carbon footprints and promoting renewable energy for a cleaner planet.",
  },
  {
    category: "Energy Independence",
    title:
      "Empowering homeowners and businesses to harness solar energy and reduce reliance on traditional power sources.",
  },
  {
    category: "Cost Savings",
    title:
      "Helping you save on energy bills with efficient solar systems designed to maximize savings.",
  },
  {
    category: "Comprehensive Services",
    title:
      "From consultation to installation and maintenance, we offer a complete solar experience.",
  },
  {
    category: "Local Expertise",
    title:
      "Proudly serving our community with reliable solar energy solutions tailored to our environment.",
  },
  {
    category: "Quality Assurance",
    title:
      "We use only top-tier materials and technology to ensure long-lasting performance.",
  },
  {
    category: "Future-Forward Vision",
    title:
      "Dedicated to driving the transition to renewable energy for a sustainable future.",
  },
];

function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} /> // Adjust card height
  ));

  return (
    <div className="w-full py-10 h-full ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  text-black font-sans">
        Get to know ASP.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// The main component for the About page
export default function AboutPage() {
  // const session = await auth();
  // if (!session) return <div>Not authenticated</div>;
  return (
    <div className="flex flex-col  bg-gradient-to-b from-[#fef3c7] to-[#fcd34d] bg-opacity-90
  bg-cover bg-center text-black"> 
        
      <Menu/>
      <AppleCardsCarouselDemo />
      <ParallaxScrollDemo />
    </div>

      
    
  );
}
