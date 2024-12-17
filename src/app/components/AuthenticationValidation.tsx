"use client"
import { LoadingContextProvider } from '@/contexts/LoadingContext';
import { noRedirectURLs } from '@/utils/utils';
import { usePathname,useRouter} from 'next/navigation';
import React from 'react'
import UserValidation from './UserValidation';
import { useUser } from '@auth0/nextjs-auth0';

const AuthenticationValidation = ({children}:{children: React.ReactNode}) => {
    const { user,  isLoading } = useUser();
    const {setIsLoading} = React.useContext(LoadingContextProvider)
    const pathname = usePathname()
    const router = useRouter()

    
    React.useEffect(()=>{
        setIsLoading(isLoading)
    },[isLoading])

    React.useEffect(()=>{
        if(!user && !noRedirectURLs.includes(pathname)) {
            router.push("/auth/login")
        }
    },[user])
    
    return user && <UserValidation>
        {children}
    </UserValidation>
}

export default AuthenticationValidation