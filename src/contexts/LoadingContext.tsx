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
        <div className={`fixed w-screen h-screen bg-white transition-all duration-1000 top-0 left-0 flex flex-col justify-center items-center ${isLoading? "opacity-100 z-50": "opacity-0 -z-10"}`}>
            <div className={`loadingWrapper flex justify-center items-center`}>
                <p><span></span></p>
                <p><span></span></p>
            </div>
        </div>
        {children}
    </LoadingContextProvider.Provider>
}

export default LoadingContext