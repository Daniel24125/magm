import React from "react"

export const useEventListener = (
    eventType: string, 
    callback: any, 
    element: any 
) =>{
    const callbackRef = React.useRef(callback)

    React.useEffect(()=>{
        callbackRef.current = callback
    }, [callback])

    React.useEffect(()=>{
        if(element){
            const handler = (e: any) =>callbackRef.current(e)
            element.addEventListener(eventType, handler)
            return ()=> element.removeEventListener(eventType, handler)
        }
    }, [eventType, element])
}