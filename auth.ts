
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./db/db";

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email as string },
      });
      
      // If the user doesn't exist, create a new one
      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user.name as string,
            email: user.email as string,
          },
        });
      }

      return true; // Continue sign-in process
    },
  },
})