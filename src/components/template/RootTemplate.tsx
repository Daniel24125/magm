import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router'
import { noRedirectURLs } from '../../../utils/utils';
import { useFetchData } from '../../../utils/dataFetch';
import UserContext from '@/contexts/UserProvider';
import { Toaster } from '../ui/toaster';
import Topbar from './Topbar';
import Navigation from './Navigation';
import { LoadingContextProvider } from '@/contexts/LoadingContext';
import { useErrorBoundary } from 'react-error-boundary';
import PageContext from '@/contexts/PageContext';

const RootTemplate = ({
    children
}:{
    children: React.ReactNode
}) => {
    const navSize = 280
    const topbarSize = 70
    //@ts-ignore
    const {isLoading, setIsLoading} = React.useContext(LoadingContextProvider)
    const { user,  isLoading:auth0IsLoading } = useUser();

    const router = useRouter()

    const {data} = useFetchData({
        url: "/api/user/validate",
        method: "POST",
        body: {
            email: user?.email
        }
    }, Boolean(user))


    console.log(isLoading, data)

    if(!isLoading && !auth0IsLoading){
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
        <PageContext>
            <div className='h-screen flex overflow-hidden'>
                <Navigation size={navSize}/>
                <main className='w-full h-full overflow-auto px-6'>
                    <Topbar size={topbarSize}/>
                    {!isLoading && children}
                </main>
            </div>
        </PageContext>
        <Toaster/>
    </UserContext>
}

export default RootTemplate