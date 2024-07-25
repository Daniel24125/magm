import type { NextApiRequest, NextApiResponse } from 'next'
import { signupWithEmailPassword } from '../../../lib/auht0'
import { FetchUserInfo, SaveToMongoDB, UserAlreadyExists } from '@/lib/mongoDB'
import User from '@/models/User'
 
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {body, method} = req 
    try {
        if (method === 'POST') {
            const {email} = body
            const result = await FetchUserInfo(email)

            res.json({
                result, 
                errorMessage: null
            })
      
        }
        
    } catch (error:any) {
        res.json({
            result: null, 
            errorMessage: error.message
        })
    }
}