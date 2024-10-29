import { auth } from "@/auth";
import { SignOut } from "@/components/sign-out";

export default async function Dashboard() {
    const session = await auth()
    if(!session) return <div>Not authenticated</div>
    return (
      <div>
        
        dashboard
        {session.user?.email}
        <SignOut/>
      </div>
    );
  }