import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router'
import { noRedirectURLs } from '../../../utils/utils';
import { useFetchData } from '../../../utils/dataFetch';
import UserContext from '@/contexts/UserProvider';
import { Toaster } from '../ui/toaster';
import Topbar from './Topbar';
import Navigation from './Navigation';
import ValidateUser from '../design/ValidateUser';
import LoadingComponent from '../LoadingComponent';
import SocketContext from '@/contexts/SocketContext';


const RootTemplate = ({
    children
}:{
    children: React.ReactNode
}) => {

    //@ts-ignore
    const { user,  isLoading:auth0IsLoading } = useUser();

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
        if(!user && !noRedirectURLs.includes(router.asPath)) {
            router.push("/api/auth/login")
            return
        }
        if(data && !data?.result.validated) {
            return <ValidateUser/>
        }
    }else{
        return <LoadingComponent isLoading={loading}/>
    }
    
    if(router.asPath === "/signup") return children

    return <UserContext>
        <SocketContext>
            <>
                <div className='h-screen flex overflow-hidden'>
                    <Navigation />
                    <main className='w-full h-full overflow-auto px-6'>
                        <Topbar />
                        {!isLoading && children}
                    </main>
                </div>
                <Toaster/>
            </>
        </SocketContext>
    </UserContext>
}

export default RootTemplate