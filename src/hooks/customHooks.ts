import React from "react"
import { useToast } from "./use-toast"

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

export const useParseActionResponse = (
    action: (params?:any) => Promise<any>, 
    setState: React.Dispatch<React.SetStateAction<any>>,
    actionParams?: any,
)=>{
    const { toast } = useToast()
    React.useEffect(()=>{
        const callServerAction = async ()=>{
            const result = await action(actionParams)
            const parsedResult = JSON.parse(result)
            if(parsedResult.errorMessage) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: parsedResult.errorMessage,
                    duration: 3000
                })
            }else{
                setState(parsedResult)
            }
        }
        callServerAction()
    },[])

}