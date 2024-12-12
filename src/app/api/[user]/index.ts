import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchUserInfo } from '@/lib/mongoDB'
 
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