import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { handleSignOut } from "@/lib/handleSignOut";

interface SignOutProps {
  className?: string; // Define the type for the className prop
}

export function SignOut({ className }: SignOutProps) {
  return (
    <form
      action={handleSignOut}
      className={cn("inline-block", className)} // Merge dynamic className
    >
      <Button type="submit" className={cn(className)}>
        Sign Out
      </Button>
    </form>
  );
}
