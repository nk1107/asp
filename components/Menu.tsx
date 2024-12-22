import { auth } from "@/auth";
import { SignOut } from "@/components/sign-out";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import SignIn from "@/components/sign-in";
import Link from "next/link";

export default async function Menu() {
  const session = await auth();
  // if (!session) return <div>Not authenticated</div>;

  return (
    <div className="flex justify-center py-2">
      {/* Navbar Container */}
      <div className="flex items-center justify-between w-[80%] max-w-5xl bg-black text-white rounded-2xl px-6 py-2 mt-2">
        {/* Logo */}
        <Link href="/">
          <div>
            <img
              src="/logo.jpg" // Update with your logo path
              alt="Aviral Solar Power Logo"
              className="h-12 w-auto p-1 rounded-lg"
            />
          </div>
        </Link>

        {/* Menu */}
        <Menubar className="h-10 rounded-lg text-white items-center justify-center text-lg">
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/dashboard" className="hover:text-gray-400">
                Home
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/products" className="hover:text-gray-400">
                Products
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>

        {/* Authentication */}
        <div>
          {session ? (
            <SignOut className="text-lg" />
          ) : (
            <SignIn className="text-lg hover:text-[#fde287]" />
          )}
        </div>
      </div>
    </div>
  );
}
