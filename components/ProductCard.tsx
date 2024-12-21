import Image from "next/image";
import React from "react";

interface ProductProps {
  name: string;
  imageUrl: string;
  description: string;
  price: string;
  specs: string;
}

export const ProductCard = ({ name, imageUrl, description, price, specs }: ProductProps) => {
  return (
    <div className="border border-gray-300 rounded-lg  shadow-lg p-4 h-96 w-auto flex flex-colshadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white">
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={200}
        className="object-cover w-full h-24"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="text-sm text-gray-800 mt-2">Specs: {specs}</div>
        <div className="text-lg font-semibold text-green-600 mt-4">₹{price}</div>
      </div>
    </div>
  );
};
