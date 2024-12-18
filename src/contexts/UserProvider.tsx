
import { getUser } from '@/actions/getUser'
import { useParseActionResponse } from '@/hooks/customHooks'
import { IUserSchema } from '@/types/User'
import React from 'react'

interface IUserContextType {
    user: IUserSchema | null, 
    setUser: React.Dispatch<React.SetStateAction<IUserSchema | null>>
}

export const UserContextProvider = React.createContext<IUserContextType>({
    user: null, 
    setUser: ()=>{}
})

const UserContext = ({
    children
}:{
    children: React.ReactNode
}) => {
    const [user, setUser] = React.useState<IUserSchema | null>(null)
    useParseActionResponse(getUser, (result)=>setUser(result)) 

    return (<UserContextProvider.Provider value={{user, setUser}}>
        {children}
    </UserContextProvider.Provider>
    )
}

export default UserContext