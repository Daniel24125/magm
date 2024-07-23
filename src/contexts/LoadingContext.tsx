import LoadingComponent from '@/components/LoadingComponent'
import React from 'react'

export const LoadingContextProvider = React.createContext<{
    isLoading: boolean, 
    setIsLoading: any 
} | null>(null)

const LoadingContext = ({
    children
}:{
    children: React.ReactNode
}) => {
    const [isLoading, setIsLoading] = React.useState(true)
    
    
    return (
        <LoadingContextProvider.Provider value={{isLoading, setIsLoading}}>
            <LoadingComponent isLoading={isLoading}/>
            {children}
        </LoadingContextProvider.Provider>
    )
}

export default LoadingContext