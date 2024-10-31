// "use client"; // Ensure this is at the top of your file
import Image from "next/image";
import React from "react";
import { auth } from "@/auth";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ParallaxScrollDemo from "@/components/projects";
import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { SignOut } from "@/components/sign-out";
import Link from "next/link";
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/logo.png"
              alt="Macbook mockup from Aceternity UI"
              height="50" // Adjust height to half
              width="50" // Adjust width accordingly if needed
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

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

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} /> // Adjust card height
  ));

  return (
    <div className="w-full py-10 h-full ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  text-neutral-400 font-sans">
        Get to know ASP.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// The main component for the About page
export default async function AboutPage() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;
  return (
    <div className=" h-screen bg-gradient-to-b from-[#260101] to-black bg-opacity-70">
      <div className="flex flex-col min-h-screen bg-cover bg-center text-white">
      {/* Menubar */}
      <Menubar className="w-[50%] mx-auto my-10 bg-black rounded-lg text-white flex items-center justify-between">
        {/* Logo Image */}
        <img
          src="/logo.jpg" // Update with your logo path
          alt="Aviral Solar Power Logo"
          className="h-8 w-auto mr-4 p-1 rounded-lg" // Adjust height and margin as needed
        />

        <div className="flex-grow flex justify-center space-x-4">
          <MenubarMenu>
            <MenubarTrigger className="bg-black">
              <Link href="/dashboard" className="hover:text-gray-400">
                Home
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="bg-black">
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger className="bg-black">
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        </div>
        <div className="absolute right-7">
          <SignOut />
        </div>
      </Menubar>
        

      <AppleCardsCarouselDemo />
      <ParallaxScrollDemo />
      </div>

      
    </div>
  );
}
