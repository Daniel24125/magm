import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router'
import { noRedirectURLs } from '../../../utils/utils';
import { useFetchData } from '../../../utils/dataFetch';
import UserContext from '@/contexts/UserProvider';
import { Toaster } from '../ui/toaster';
import LoadingComponent from '../LoadingComponent';

const RootTemplate = ({
    children
}:{
    children: React.ReactNode
}) => {
    const { user, error, isLoading } = useUser();
    const router = useRouter()

    const {data, isLoading:isFetching} = useFetchData({
        url: "/api/user/validate",
        method: "POST",
        body: {
            email: user?.email
        }
    }, Boolean(user))

    const loading = React.useMemo(()=> isLoading || isFetching, [isLoading, isFetching])

    if(!loading){
        if (error) return <div>{error.message}</div>
        if(!user && !noRedirectURLs.includes(router.asPath)) {
            router.push("/api/auth/login")
            return
        }
        if(router.asPath === "/signup") return children
        if(!data?.result.validated) {
            router.push("/user/completeProfile")
        }
    }

    return <UserContext>
        <LoadingComponent isLoading={isLoading || isFetching}/>
        {!loading && children}
        <Toaster/>
    </UserContext>
}

export default RootTemplate