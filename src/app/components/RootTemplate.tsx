"use client"
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import UserContext from '@/contexts/UserProvider';
import SocketContext from '@/contexts/SocketContext';
import { useFetchData } from '@/utils/dataFetch';
import { noRedirectURLs } from '@/utils/utils';
import ValidateUser from './ValidateUser';
import { usePathname, useRouter } from 'next/navigation';



const RootTemplate = ({
    children
}:{
    children: React.ReactNode
}) => {

    //@ts-ignore
    const { user,  isLoading:auth0IsLoading } = useUser();
    const pathname = usePathname()
    const router = useRouter()
    const {data, isLoading} = useFetchData({
        url: "/api/user/validate",
        method: "POST",
        body: {
            email: user?.email
        }
    }, Boolean(user))

    const loading = React.useMemo(()=>{
        return isLoading || auth0IsLoading
    },[isLoading, auth0IsLoading])

    if(!loading){
        if(!user && !noRedirectURLs.includes(pathname)) {
            router.push("/api/auth/login")
            return
        }
        if(data && data.errorMessage) throw new Error(data.errorMessage)
        if(data && !data?.result.validated) {
            return <ValidateUser/>
        }
    }

    if(pathname === "/signup") return children

    return <UserContext>
        <SocketContext>
            {!isLoading && children}
        </SocketContext>
    </UserContext>
}

export default RootTemplate