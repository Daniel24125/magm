import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import UserContext from '@/contexts/UserProvider';
import { useRouter } from 'next/router'
import { noRedirectURLs } from '../../../utils/utils';

const RootTemplate = ({
    children
}:{
    children: React.ReactNode
}) => {
    const { user, error, isLoading } = useUser();
    const router = useRouter()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    if(!user && !noRedirectURLs.includes(router.asPath)) {
        router.push("/api/auth/login")
        return
    }
    if(router.asPath === "/signup") return children

    return <UserContext>
        
        {children}
    </UserContext>
}

export default RootTemplate