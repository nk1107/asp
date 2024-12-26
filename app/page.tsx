import { auth } from "@/auth";
import Menu from "@/components/Menu";
import SignIn from "@/components/sign-in";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  // if (!session) return <div>Not authenticated</div>;

  return (
    <BackgroundBeamsWithCollision className="h-screen">
      {/* Menubar */}
      
      <div
        className=" min-h-screen "
      >

        <div className="flex flex-col items-center justify-center mt-64">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black animate-fade-in-up">
              Welcome to Aviral Solar Power
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-center mb-8 text-gray-700 animate-fade-in-up transition-opacity delay-200">
              Harnessing the Sun’s Energy to Light Up Your World ☀️
            </p>
            <Link href="/about">
              <button className="px-6 py-3 bg-black text-white rounded-full font-semibold text-lg transition-transform transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>


        {/* Welcome Message - Fixed at Bottom */}
        {session ? (
          <p className="absolute bottom-0 left-0 right-0 text-gray-600 text-sm text-center py-4">
            Hi, {session.user?.name}! Let's make the world a better place. 🌏
          </p>
        ) : (
          <p className="absolute bottom-0 left-0 right-0 text-gray-600 text-sm text-center py-4">
            Welcome, guest! Sign in to start your journey. 🚀
          </p>
        )}
      </div>
    </BackgroundBeamsWithCollision>
  );
}