import type { NextApiRequest, NextApiResponse } from 'next'
import { signupWithEmailPassword } from '../../../lib/auht0'
import { SaveToMongoDB, UserAlreadyExists } from '@/lib/mongoDB'
import User from '@/models/User'
 
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {body, method} = req 
    try {
        if (method === 'POST') {
            const {signupMethod} = body
            delete body.signupMethod


            const userExists = await UserAlreadyExists({
                GenericModel: User, 
                data: body
            })

            if(userExists){
                res.json({
                    result: null,
                    errorMessage: "The email you provided already exists"
                })
            }

            if(signupMethod === "email-password"){
                await signupWithEmailPassword(body)
            }
            
            const result = await SaveToMongoDB({
                GenericModel: User, 
                data: body,
            })

            res.json(result)
      
        }
        
    } catch (error:any) {
        res.json({
            result: null, 
            errorMessage: error.message
        })
    }
}