import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";

// Sample product data (you can replace this with actual data)
const products = [
  {
    id: 1,
    title: "4KW Ongrid Solaystem",
    imageUrl: "/logo.jpg",
    link: "https://example.com/product1",
    price: "3,05,239",
    susbsidy: " 0",
    emi: "6,713",
    panels: 9,
  },
  {
    id: 2,
    title: "Solar Inverter",
    description: "Reliable inverter for converting solar power.",
    imageUrl: "/logo.jpg",
    link: "https://example.com/product2",
    price: " 3,05,239",
    susbsidy: " 0",
    emi: " 6,713",
    panels: 9,
  },
  {
    id: 3,
    title: "Battery Storage",
    description: "Store excess solar energy for later use.",
    imageUrl: "/logo.jpg",
    link: "https://example.com/product3",
    price: " 3,05,239",
    susbsidy: " 0",
    emi: " 6,713",
    panels: 9,
  },
  // Add more products as needed
];

export default function ThreeDCardDemo() {
  return (
    <>
      <div
        className="flex flex-col   bg-opacity-90
  bg-cover bg-center text-black"
      >
        <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-4 ">
          {products.map((product) => (
            <CardContainer key={product.id} className="inter-var w-72  ">
              <CardBody className="bg-gray-50 h-auto rounded-sm relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] p-6">
                <div className="flex justify-between items-center">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-black dark:text-white"
                  >
                    {product.title}
                  </CardItem>
                  <div>
                    <Button className="text-4xl">
                      <CiShoppingCart style={{ fontSize: "40px" }} />{" "}
                      {/* Font size set to 40px */}
                    </Button>
                  </div>
                </div>
                {/* <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  
                </CardItem> */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={product.imageUrl}
                    height="400"
                    width="400"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={product.title}
                  />
                </CardItem>
                <div className=" flex justify-between  mt-6">
                  <div className="">
                    <div className="font-bold text-xl">
                    ₹{product.price}
                      <p className="text-xs text-gray-600">(inclusive of GST)</p>

                    </div>
                    <div className="text-red-950 font-semibold mt-4 text-sm">
                      EMI: ₹{product.emi}/month
                    </div>

                    </div>
                  <div className=" text-sm">
                    <div>
                      susbsidy: ₹{product.susbsidy}
                    </div>
                    <div className="mt-1">
                      panels: {product.panels}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                  <Link href= {`/product/${product.id}`}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:text-yellow-300"
                    >
                    
                      View More
                    </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}
