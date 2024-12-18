"use server"

import { auth0 } from "@/lib/auth0"
import { FetchUserInfo } from "@/lib/mongoDB"
import { parseErrorMessage } from "@/utils/utils"

export const getUser = async ()=> {
    try {
        // throw new Error("An error occured while fetching your user information. You need to be logged in to access this page.")
        const session = await auth0.getSession()
        if(session){
            const user = session.user
            const result = await FetchUserInfo(user.email as string)
         
            return JSON.stringify({
                ...result._doc,
                ...user
            })
        }

    } catch (error) {        
        return JSON.stringify({
            result: null, 
            errorMessage: parseErrorMessage(error as typeof Error | string)
        })
    }

}