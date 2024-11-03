import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Menu from "@/components/Menu";

// Sample product data (you can replace this with actual data)
const products = [
  {
    id: 1,
    title: "Solar Panel 300W",
    description: "High efficiency solar panel with durable design.",
    imageUrl: "/logo.jpg",
    link: "https://example.com/product1",
  },
  {
    id: 2,
    title: "Solar Inverter",
    description: "Reliable inverter for converting solar power.",
    imageUrl: "/logo.jpg",
    link: "https://example.com/product2",
  },
  {
    id: 3,
    title: "Battery Storage",
    description: "Store excess solar energy for later use.",
    imageUrl: "/logo.jpg",
    link: "https://example.com/product3",
  },
  // Add more products as needed
];

export default function ThreeDCardDemo() {
  return (
    <>
      <div className="flex flex-col  bg-gradient-to-b from-[#fef3c7] to-[#fcd34d] bg-opacity-90
  bg-cover bg-center text-black">
        <Menu />
        <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {products.map((product) => (
            <CardContainer
              key={product.id}
              className="inter-var w-auto h-auto "
            >
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] p-6">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {product.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {product.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={product.imageUrl}
                    height="400"
                    width="400"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={product.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={product.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-black"
                  >
                    Buy now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}
