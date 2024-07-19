import type { NextApiRequest, NextApiResponse } from 'next'
import { signupWithEmailPassword } from '../../../lib/auht0'
import { SaveToMongoDB } from '@/lib/mongoDB'
import User from '@/models/User'
 
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const {body} = req 
            const {signupMethod} = body
            
            delete body.signupMethod

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