import { IUserSchema } from '@/types/User'
import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'
import { useFetchData } from '../../utils/dataFetch'

const UserContextProvider = React.createContext<{
    user: IUserSchema | null, 
    setUser: any
} | null>(null)

const UserContext = ({
    children
}:{
    children: React.ReactNode
}) => {
    const {user: auth0User, isLoading: auht0IsLoading} = useUser()
    const [user, setUser] = React.useState<IUserSchema | null>(null)
    




    return (<UserContextProvider.Provider value={{user, setUser}}>
        {children}
    </UserContextProvider.Provider>
    )
}

export default UserContext