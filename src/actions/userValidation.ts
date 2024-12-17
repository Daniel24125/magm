"use server"

export type userSessionProfileTypes = {
    email: string;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updated_at: string;
    org_id: string;
  }
import { UserAlreadyExists } from "@/lib/mongoDB";
import { auth0 } from "@/lib/auht0"

export const validateUser = async ()=>{
    const userSession = await auth0.getSession()
    const user = userSession!.user as userSessionProfileTypes
    
    const userExists = await UserAlreadyExists(user.email)
    return {
        result: {
            validated: userExists
        },
        errorMessage: null
    }
    

}