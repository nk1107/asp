import { auth } from "@/auth";
import { SignOut } from "@/components/sign-out";
import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default async function Dashboard() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <BackgroundBeamsWithCollision className="h-screen">
      <div className=" flex flex-col min-h-screen bg-cover bg-center text-white">
        {/* Menubar */}
        <Menubar className="w-[50%] mx-auto my-10 bg-black rounded-lg text-white flex items-center">
          {/* Logo Image */}
          <img
            src="/logo.jpg" // Update with your logo path
            alt="Aviral Solar Power Logo"
            className="h-8 w-auto mr-4 p-1 rounded-lg" // Adjust height and margin as needed
          />
          <MenubarMenu>
            <MenubarTrigger className="bg-black">
              <Link href="/about" className="hover:text-gray-400">
                Home
              </Link>{" "}
              {/* Wrap in Link */}
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
              <Link href="/about" className="hover:text-gray-400">
                Contact
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <div className="absolute right-7">
            <SignOut />
          </div>
        </Menubar>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center flex-grow pt-14 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Welcome to Aviral Solar Power
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-center mb-8 animate-fade-in-up transition-opacity delay-200">
            Harnessing the Sun’s Energy to Light Up Your World ☀️
          </p>
          <button className="px-6 py-3 bg-white rounded-full text-[#260101] font-semibold text-lg transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Welcome Message - Fixed at Bottom */}
        <p className="absolute bottom-0 left-0 right-0 text-gray-200 text-sm text-center py-4">
          Hi, {session.user?.name}! Let's make the world a better place.🌏
        </p>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
