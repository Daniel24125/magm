import User from "@/models/User"
import dbConnect from "./dbConnect"
import { TMongoFunctionSchema } from "@/types/MongoDB"

export const SaveToMongoDB = async ({
    GenericModel, 
    data
}: TMongoFunctionSchema)=>{     
   
    await dbConnect()
    const inst = new GenericModel(data) 
    await inst.save()
    return {
        result: inst, 
        errorMessage: null
    }
}

export const FetchUserInfo = async (email: string)=>{
    await dbConnect()
    const user = await User.findOne({email})
    return user
    }

export const UserAlreadyExists = async (email: string)=>{
    await dbConnect()
    const user = await User.findOne({email})
    return Boolean(user)

}