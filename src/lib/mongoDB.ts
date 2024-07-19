import dbConnect from "./dbConnect"
import { TMongoFetcherSchema } from "@/types/MongoDB"

export const SaveToMongoDB = async ({
    GenericModel, 
    data
}: TMongoFetcherSchema)=>{        
    await dbConnect()
    const inst = new GenericModel(data) 
    await inst.save()
    return {
        result: inst, 
        errorMessage: null
    }
}