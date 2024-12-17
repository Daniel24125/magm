"use client"
import React from 'react'
import SocketContext from '@/contexts/SocketContext';
import LoadingContext from '@/contexts/LoadingContext';
import AuthenticationValidation from './AuthenticationValidation';



const RootTemplate = ({
    children
}:{
    children: React.ReactNode
}) => {

    return <LoadingContext>
        <AuthenticationValidation>
            <SocketContext>
                {children}
            </SocketContext>
        </AuthenticationValidation>
    </LoadingContext>
}

export default RootTemplate