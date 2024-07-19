import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  return (
    <main>
      AUTHENTICATED
      <Button onClick={()=>router.push("/api/auth/logout")}>Logout</Button>
    </main>
  );
}
