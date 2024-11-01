import { SocketOptionsSchema } from '@/types/Socket';
import { time } from 'console';
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
    // React.useEffect(()=>{
    //     const socket = io("ws://localhost:8000", {
    //         reconnectionDelayMax: 10000
    //       });

    //     socket.on("connect", ()=>{
    //         console.log("Connected!")
    //         setSocketOptions({
    //             //@ts-ignore
    //             socket: socket
    //         })
    //         socket.emit("identification", "next")

    //     })
        
    //     socket.on("test", (data)=>{
    //         console.log("TEST: ", data)
    //     })

    //     socket.on("device_update", (data)=>{
    //         console.log("DEVICE STATUS: ", data)
    //     })
    //     socket.on("disconnect", ()=>{
    //         console.log("Disconnected!")
    //     })
        
    // },[])
    
    React.useEffect(()=>{
        const socket = new WebSocket(process.env.NEXT_PUBLIC_BACKEND_API_URL as string);

        socket.onopen = () => {
            // socket.send(encodeURIComponent("He"))
            // socket.send(JSON.stringify({
            //     cmd: "start_experiment", 
            //     data: "nextjs"
            // }));
            console.log("Connection Open")
            // setTimeout(()=>{
            //     socket.send("He")
            // },5000)
        };
        
        socket.onmessage = (event) => {
            console.log('Received message:', event.data);
        };

        socket.onclose = ()=>{
            console.log("Connection closed.")
        }
    },[])
    
    return (<SocketContextProvider.Provider value={{socketOptions, setSocketOptions}}>
        {children}
    </SocketContextProvider.Provider>
  )
}


export default SocketContext

