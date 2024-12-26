import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  // Mock product data - Replace with actual data fetching logic
  const product = {
    id: 1,
    title: "4KW Ongrid Solaystem",
    imageUrl: "/logo.jpg",
    link: "https://example.com/product1",
    price: "3,05,239",
    subsidy: "0",
    emi: "6,713",
    panels: 9,
    description:
      "This 4KW Ongrid Solar System is an efficient and eco-friendly solution for reducing your energy bills. Equipped with high-quality solar panels, this system seamlessly integrates with your existing power grid, providing clean energy.",
    warranty: "10 years on panels",
    installation: "Installation included",
    deliveryTime: "5-7 business days",
    features: [
      "High-efficiency solar panels with advanced technology",
      "Easy integration with existing electrical systems",
      "Durable and weather-resistant design",
      "Comprehensive after-sales support",
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Product Image */}
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full  h-64 object-cover rounded-lg"
            />
            {/* Read Reviews Link */}
            <Link href="/about">
              <Button
                 // Link to the reviews page (adjust as needed)
                className="absolute mt-4 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-full text-lg font-semibold hover:text-yellow-200 transition-all duration-300"
              >
                Read Reviews
              </Button>
            </Link>
          </div>
  
          {/* Right Section: Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="text-lg">
              <p className="mb-2">
                <strong>Price:</strong> ₹{product.price}
              </p>
              <p className="mb-2">
                <strong>Subsidy:</strong> ₹{product.subsidy}
              </p>
              <p className="mb-2">
                <strong>EMI:</strong> ₹{product.emi}/month
              </p>
              <p className="mb-2">
                <strong>Panels:</strong> {product.panels}
              </p>
              <p className="mb-2">
                <strong>Warranty:</strong> {product.warranty}
              </p>
              <p className="mb-4">
                <strong>Installation:</strong> {product.installation}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Features:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-gray-500">
              <strong>Delivery Time:</strong> {product.deliveryTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
}
