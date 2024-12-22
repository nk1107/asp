import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface SignOutProps {
  className?: string; // Define the type for the className prop
}

export function SignOut({ className }: SignOutProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
      className={cn("inline-block", className)} // Merge dynamic className
    >
      <Button type="submit" className={cn(className)}>
        Sign Out
      </Button>
    </form>
  );
}
