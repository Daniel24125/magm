import { UserSchema } from '@/types/User'
import React from 'react'

const UserContextProvider = React.createContext<{
    user: UserSchema | null, 
    setUser: any
}>({
    user: {
        isLoading: true, 
    fName: null, 
    lName: null, 
    email: null, 
    projects: [],
    defaultProjectSettings: null,
    accountSettings: null
    }, 
    setUser: null
})

const UserProvider = ({
    children
}:{
    children: React.ReactNode
}) => {
    const [user, setUser] = React.useState<UserSchema | null>(null)



    return (<UserContextProvider.Provider value={{user, setUser}}>
        {children}
    </UserContextProvider.Provider>
    )
}

export default UserProvider