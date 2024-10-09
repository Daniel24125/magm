import { SocketOptionsSchema } from '@/types/Socket';
import React from 'react'
import { io } from "socket.io-client";



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
        const socket = io(process.env.NEXT_PUBLIC_BACKEND_API_URL as string, {
            reconnectionDelayMax: 10000
          });

        socket.on("connect", ()=>{
            console.log("Connected!")
            setSocketOptions({
                //@ts-ignore
                socket: socket
            })
            socket.emit("cmd", {
                "data": "next"
            })
        })

        socket.on("disconnect", ()=>{
            console.log("Disconnected!")
        })
        // socket.addEventListener("open", ()=>{
        //     console.log("Socket connected!")
        //     setSocketOptions({
        //         //@ts-ignore
        //         socket: socket
        //     })
        //     socket.send(JSON.stringify({
        //         "cmd": "identification", 
        //         "data": "next"
        //     }))
        // })


        // socket.addEventListener("message", (data: any)=>{
        //     console.log("Message Received: ", data )
            
        // })

        // socket.addEventListener("close", (data: any)=>{
        //     console.log("Connection closed!",data)
        // })

     
            
    },[])
    return (<SocketContextProvider.Provider value={{socketOptions, setSocketOptions}}>
        {children}
    </SocketContextProvider.Provider>
  )
}


export default SocketContext

