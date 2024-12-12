import { SocketOptionsSchema } from '@/types/Socket';
import React from 'react'



export const SocketContextProvider = React.createContext<{
    socket: SocketOptionsSchema | null
} | null>({
    socket: null
});

const SocketContext = ({children}: {children: React.ReactNode}) => {
    const [socket, setSocket] = React.useState<SocketOptionsSchema>(null)
   
    
    React.useEffect(()=>{
        const connection = new WebSocket(process.env.NEXT_PUBLIC_BACKEND_API_URL as string);

        connection.onopen = () => {
            setSocket(connection)
            console.log("Connection Open")
        };
        
        connection.onmessage = (event) => {
            console.log('Received message:', JSON.parse(event.data));
        };

        connection.onclose = ()=>{
            console.log("Connection closed.")
        }

    },[])
    
    return (<SocketContextProvider.Provider value={{socket}}>
        {children}
    </SocketContextProvider.Provider>
  )
}


export default SocketContext

