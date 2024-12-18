import React, { useState } from 'react'

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }


export const LoadingContextProvider = React.createContext<LoadingContextType>({
    isLoading: true,
    setIsLoading: () => {},
  });

const LoadingContext = ({children}: {children: React.ReactNode}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
   
   return <LoadingContextProvider.Provider value={{isLoading, setIsLoading}}>
        
        {children}
    </LoadingContextProvider.Provider>
}

export default LoadingContext