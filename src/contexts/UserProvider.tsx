import { IUserSchema } from '@/types/User'
import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'
import { useFetchData } from '../../utils/dataFetch'

export const UserContextProvider = React.createContext<{
    user: IUserSchema | null, 
    setUser: any
} | null>(null)

const UserContext = ({
    children
}:{
    children: React.ReactNode
}) => {
    const {user: auth0User} = useUser()
    const [user, setUser] = React.useState<IUserSchema | null>(null)
    //@ts-ignore

    
    const {data, isLoading} = useFetchData({
        url: "/api/user",
        method: "POST",
        body: {
            email: auth0User?.email
        }
    }, Boolean(auth0User))
    


    React.useEffect(()=>{
        if(!isLoading && data){
            setUser((prev: any)=>{
                return {
                    ...prev, 
                    isAuthenticated: Boolean(auth0User),
                    picture: auth0User ? auth0User.picture : null,
                    ...data.result
                }
            })
        }
    }, [isLoading])


    return (<UserContextProvider.Provider value={{user, setUser}}>
        {children}
    </UserContextProvider.Provider>
    )
}

export default UserContext