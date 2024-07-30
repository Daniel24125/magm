import { useEventListener } from '@/lib/customHooks';
import { SocketOptionsSchema } from '@/types/Socket';
import React from 'react'
import { io } from 'socket.io-client';



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
        const socket = io(process.env.NEXT_PUBLIC_BACKEND_API_URL as string, { transports: ['websocket'], autoConnect: false });
        setSocketOptions({
            //@ts-ignore
            socket
        })
        socket.on("connect", ()=>{
            console.log("Connected to the server!")
        })
        
        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
            
          });
        socket.on('disconnect', ()=>{
            console.log("Disconnected to the server!")
        });
    },[])
    return (<SocketContextProvider.Provider value={{socketOptions, setSocketOptions}}>
        {children}
    </SocketContextProvider.Provider>
  )
}


export default SocketContext



// const socket = new WebSocket(process.env.NEXT_PUBLIC_BACKEND_API_URL as string);

//         socket.addEventListener("open", ()=>{
//             console.log("Socket connected!")
//             setSocketOptions({
//                 //@ts-ignore
//                 socket: socket
//             })
//             socket.send(JSON.stringify({
//                 "cmd": "nir_status", 
//                 "data": "user"
//             }))
//         })

//         socket.addEventListener("message", (data: any)=>{
//             console.log("Message Received: ", data)
            
//         })

//         socket.addEventListener("close", (data: any)=>{
//             console.log("Connection closed!")
//         })