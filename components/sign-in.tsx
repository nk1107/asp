import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { handleSignIn } from "@/lib/handleSignIn";
import { CiLogin } from "react-icons/ci";

interface SignInProps {
  className?: string; // Define the type for the className prop
}

export default function SignIn({ className }: SignInProps) {
  return (
    <form
      action={handleSignIn}
      className={cn("inline-block", className)} // Merge dynamic className
    >
      <div className="flex items-center">
        <Button type="submit" className={cn(className,'bg-transparent ')}>
          Sign in
        <CiLogin/>
        </Button>
      </div>
    </form>
  );
}
