import React from 'react'

import { useRouter } from 'next/router';
import { Button } from './ui/button';
import { useErrorBoundary } from 'react-error-boundary';

interface TError extends Error {
    variant: "sm" | "md" | "lg" 
}


const ErrorComponent = ({error}: {error: TError}) => {
    switch (error.variant) {
        case "sm":
            
            break;
        case "md":
        
        break;
        default:
            return <LargeErrorComponent error={error}/>        
    }
}



const LargeErrorComponent = ({error}: {error: TError})=>{
    const {resetBoundary} = useErrorBoundary();

    return  <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
        <h1 className='text-9xl font-bold text-primary'>Oops!</h1>

        <h4 className='text-xl font-bold'>Something went wrong!</h4>
        <h6 className='w-80 text-center'>{error.message}</h6>
        <Button onClick={()=>resetBoundary()}>Retry</Button>

    </div>
}

export default ErrorComponent