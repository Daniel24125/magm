import { useEventListener } from '@/lib/customHooks'
import React, { useContext } from 'react'

const LoadingComponent = ({
    isLoading = false
}:{
    isLoading?: boolean
}) => {


    return (<div className={`fixed bg-white transition-all duration-1000 top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-50  ${isLoading? "opacity-100": "opacity-0 -z-10"} `}>
        <div className={`loadingWrapper flex  justify-center items-center`}>
            <p><span></span></p>
            <p><span></span></p>
        </div>
    </div>
    )
}

export default LoadingComponent