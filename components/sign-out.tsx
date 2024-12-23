import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { handleSignOut } from "@/lib/handleSignOut";
import { IoLogOutSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

interface SignOutProps {
  className?: string; // Define the type for the className prop
}

export function SignOut({ className }: SignOutProps) {
  return (
    <form
      action={handleSignOut}
      className={cn("inline-block", className)} // Merge dynamic className
    >
      <div className="flex items-center">
        <Button type="submit" className={cn(className,'bg-transparent ')}>
          Sign Out
        <CiLogout />
        </Button>
      </div>

    </form>
  );
}
