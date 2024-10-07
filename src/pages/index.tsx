import React from "react"
import { Button } from "@/components/ui/button";
import { PageContextProvider, TPageParamsSchema } from "@/contexts/PageContext";
import { useRouter } from "next/router";
import { SocketContextProvider } from "@/contexts/SocketContext";



export default function Home() {
  const router = useRouter()
  //@ts-ignore
  const {updatePageParams} = React.useContext(PageContextProvider)
  //@ts-ignore
  const {socketOptions} = React.useContext(SocketContextProvider);

  React.useEffect(()=>{
    updatePageParams({title: "Dashboard"})
    
  },[])

  return (
    <div>
      AUTHENTICATED
      <Button onClick={()=>{
        if(socketOptions.socket) {
          socketOptions.socket.send(JSON.stringify({
            msg: "HELLO"
          }))
        }
      }}>Connect to socket</Button>
    </div>
  );
}
