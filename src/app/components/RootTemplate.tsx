"use client"
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import UserContext from '@/contexts/UserProvider';
import SocketContext from '@/contexts/SocketContext';
import { useFetchData } from '@/utils/dataFetch';
import { noRedirectURLs } from '@/utils/utils';
import ValidateUser from './UserValidation';
import { usePathname, useRouter } from 'next/navigation';



const RootTemplate = ({
    children
}:{
    children: React.ReactNode
}) => {


    return <UserContext>
        {/* <SocketContext> */}
            {children}
        {/* </SocketContext> */}
    </UserContext>
}

export default RootTemplate