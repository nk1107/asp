import { Home, ShoppingCart, Phone, Store } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import SignIn from "@/components/sign-in"; // Adjust the import path for SignIn and SignOut
 // Adjust the import path for SignIn and SignOut
import { auth } from "@/auth"; // Adjust the import path for your authentication logic
import { SignOut } from "./sign-out";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Store,
  },
  {
    title: "Products",
    url: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Phone,
  },
];

export async function AppSidebar() {
  const session = await auth(); // Fetch session state

  return (
    <Sidebar className="bg-black text-white">
      <SidebarContent className="bg-black text-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="bg-black text-white">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="text-white">
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex text-xl items-center space-x-2 text-white hover:text-gray-300"
                    >
                      <item.icon className="text-white text-xl" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Authentication Section */}
      <SidebarFooter className="flex items-center justify-center py-4 bg-black text-white">
        {session ? (
          <SignOut className="text-lg hover:text-[#fde287]" />
        ) : (
          <SignIn className="text-lg hover:text-[#fde287]" />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
