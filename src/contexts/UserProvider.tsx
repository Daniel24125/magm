import { IUserSchema } from '@/types/User'
import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'
import { useFetchData } from '../../utils/dataFetch'
import { LoadingContextProvider } from './LoadingContext'

export const UserContextProvider = React.createContext<{
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
    //@ts-ignore
    const {isLoading} = React.useContext(LoadingContextProvider)

    // const {data} = useFetchData({
    //     url: "/api/user",
    //     method: "POST",
    //     body: {
    //         email: user?.email
    //     }
    // }, true)
    


    // React.useEffect(()=>{
    //     if(!isLoading){

    //     }
    // }, [isLoading])


    return (<UserContextProvider.Provider value={{user, setUser}}>
        {children}
    </UserContextProvider.Provider>
    )
}

export default UserContext