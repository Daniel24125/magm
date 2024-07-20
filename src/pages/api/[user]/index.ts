import type { NextApiRequest, NextApiResponse } from 'next'
import { signupWithEmailPassword } from '../../../lib/auht0'
import { SaveToMongoDB, UserAlreadyExists } from '@/lib/mongoDB'
import User from '@/models/User'
 
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const {body} = req 
            const {signupMethod} = body
            
            delete body.signupMethod

            const userExists = await UserAlreadyExists({
                GenericModel: User, 
                data: body
            })

            if(userExists){
                console.log("USER ALREADY EXISTS")
                res.json({
                    result: null,
                    errorMessage: null
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