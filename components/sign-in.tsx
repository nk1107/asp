import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { handleSignIn } from "@/lib/handleSignIn";

interface SignInProps {
  className?: string; // Define the type for the className prop
}

export default function SignIn({ className }: SignInProps) {
  return (
    <form
      action={handleSignIn}
      className={cn("inline-block", className)} // Merge dynamic className
    >
      <Button type="submit" className={cn(className)}>
        Sign in
      </Button>
    </form>
  );
}
