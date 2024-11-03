
import { SignOut } from "@/components/sign-out";
import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
export default function Menu() {
    return(
        <>
        <div className="absolute left-7">
        <img
            src="/logo.jpg" // Update with your logo path
            alt="Aviral Solar Power Logo"
            className="h-16 w-auto  p-1 rounded-xl mt-9" // Adjust height and margin as needed
          />
        </div>
        
        <Menubar className="w-[50%] h-12 mx-auto my-10  rounded-lg shadow-md text-black flex items-center">
          {/* Logo Image */}
          
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/dashboard" className="hover:text-gray-600">
                Home
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/products" className="hover:text-gray-600">
                Products
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <div className="absolute right-7">
            <SignOut />
          </div>
        </Menubar>
        </>
    );
}