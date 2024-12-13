"use server"

import { signupWithEmailPassword } from '@/lib/auht0'
import { SaveToMongoDB, UserAlreadyExists } from '@/lib/mongoDB'
import User from '@/models/User'
import { sleep } from '@/utils/utils'
import { redirect, RedirectType } from 'next/navigation'



export const handleSignup = async (formData: FormData) =>{
    try {
        const userExists = await UserAlreadyExists(formData.get("email") as string)
        // await sleep(5000)
        if(userExists) throw Error("The email you provided is already registered.")
        const data = {
            email: formData.get("email") as string,
            fName: formData.get("fName") as string,
            password: formData.get("password") as string,
        }
        const response = await signupWithEmailPassword(data)
        if(response.statusCode === 400){
            throw Error("The email you provided is already registered.")
        }
        await SaveToMongoDB({
            GenericModel: User, 
            data
        })
       
    } catch (e) {
        console.log(e)
        return (e as Error).message
    }

}