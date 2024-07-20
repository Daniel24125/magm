import type { NextApiRequest, NextApiResponse } from 'next'
import {  UserAlreadyExists } from '@/lib/mongoDB'
import User from '@/models/User'
 
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const {body} = req 
            const userExists = await UserAlreadyExists({
                GenericModel: User, 
                data: body
            })
            res.json({
                result: {
                    validated: userExists
                },
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