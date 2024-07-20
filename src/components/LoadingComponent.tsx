import React, { useContext } from 'react'

const LoadingComponent = ({
    isLoading = false
}:{
    isLoading?: boolean
}) => {
    console.log(isLoading)

    return (<div className={`fixed transition-all duration-700 top-0 left-0 w-screen h-screen flex flex-col justify-center items-center ${isLoading? "opacity-100": "opacity-0 -z-10"}`}>
        <div className={`loadingWrapper flex justify-center items-center ${!isLoading && "w-full h-full animate-none"}`}>
            <p><span></span></p>
            <p><span></span></p>

        </div>
    </div>
    )
}

export default LoadingComponent