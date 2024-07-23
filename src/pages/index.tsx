import React from "react"
import { Button } from "@/components/ui/button";
import { PageContextProvider, TPageParamsSchema } from "@/contexts/PageContext";
import { useRouter } from "next/router";



export default function Home() {
  const router = useRouter()
  //@ts-ignore
  const {updatePageParams} = React.useContext(PageContextProvider)
  
  React.useEffect(()=>{
    updatePageParams({title: "Dashboard"})
  },[])
  return (
    <div>
      AUTHENTICATED
      <Button onClick={()=>{
        router.push("/api/auth/logout")
      }}>Logout</Button>
    </div>
  );
}
