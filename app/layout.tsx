import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Montserrat } from 'next/font/google';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Menu from "@/components/Menu";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Optional: Define a CSS variable
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="">
        <SidebarProvider>
          <div className="w-full">
            <div className="md:hidden">
              <AppSidebar />
            </div>
            <main className="overflow-x-hidden">
              <SidebarTrigger className="md:hidden" />
              <div className="flex justify-center mt-4">
                <div className="hidden md:block w-[90%] max-w-5xl rounded-lg  shadow-md">
                  <Menu />
                </div>
              </div>
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
