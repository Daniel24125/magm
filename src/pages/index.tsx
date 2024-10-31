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

  const [experimentStarted, setExperimentStarted] = React.useState(false)

  React.useEffect(()=>{
    updatePageParams({title: "Dashboard"})
    
  },[])

  return (
    <div>
      AUTHENTICATED
      <Button onClick={()=>{
        if(socketOptions.socket) {
          socketOptions.socket.emit(experimentStarted ? "stop_experiment": "start_experiment", "helo")
          setExperimentStarted(prev=>!prev)
        }
      }}>Connect to socket</Button>
    </div>
  );
}
