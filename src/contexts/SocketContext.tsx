import { SocketOptionsSchema } from '@/types/Socket';
import React from 'react'



export const SocketContextProvider = React.createContext<{
    socketOptions: SocketOptionsSchema | null,
    setSocketOptions: any
} | null>({
    socketOptions: {
        socket: null
    },
    setSocketOptions: null
});

const SocketContext = ({children}: {children: React.ReactNode}) => {
    const [socketOptions, setSocketOptions] = React.useState({
        socket: null
    })
   
    
    React.useEffect(()=>{
        
        const socket = new WebSocket(process.env.NEXT_PUBLIC_BACKEND_API_URL as string);

        socket.addEventListener("open", ()=>{
            console.log("Socket connected!")
            setSocketOptions({
                //@ts-ignore
                socket: socket
            })
            socket.send(JSON.stringify({
                "cmd": "identification", 
                "data": "next"
            }))
        })

        socket.addEventListener("message", (data: any)=>{
            console.log("Message Received: ", data)
            
        })

        socket.addEventListener("close", (data: any)=>{
            console.log("Connection closed!")
        })
    },[])
    return (<SocketContextProvider.Provider value={{socketOptions, setSocketOptions}}>
        {children}
    </SocketContextProvider.Provider>
  )
}


export default SocketContext

