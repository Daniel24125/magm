"use client"
import { LoadingContextProvider } from '@/contexts/LoadingContext';
import { noRedirectURLs } from '@/utils/utils';
import { usePathname,useRouter} from 'next/navigation';
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0';
import PageContext from '@/contexts/PageContext';
import Topbar from './topbar';
import { Toaster } from '@/components/ui/toaster';
import Navigation from './navigation';
import UserContext from '@/contexts/UserProvider';

const AuthenticationValidation = ({children}:{children: React.ReactNode}) => {
    const { user,  isLoading:auth0Loading } = useUser();
    const {isLoading, setIsLoading} = React.useContext(LoadingContextProvider)
    const pathname = usePathname()
    const router = useRouter()
    
    React.useEffect(()=>{
        setIsLoading(auth0Loading)
    },[auth0Loading])

    React.useEffect(()=>{
        if(!isLoading && !user && !noRedirectURLs.includes(pathname)) {
            router.push("/auth/login")
        }
    },[user, isLoading])
    
    return user && !isLoading && <UserContext>
        <PageContext>
            <div className='h-screen flex overflow-hidden'>
                <Navigation />
                <main className='w-full h-full overflow-auto px-6'>
                    <Topbar />
                    {children}
                </main>
            </div>
            <Toaster/>
        </PageContext>
    </UserContext>
}

export default AuthenticationValidation