import { UserSignupSchema } from "@/types/User";
import { asyncRequestFetcher } from "../../utils/dataFetch";
import { SaveToMongoDB } from "./mongoDB";
import User from "@/models/User";
import { NextApiResponse } from "next";

// var request = require("request");

// export const getUserManagementAPIToken = async ()=>{
//     const params = {
//         "client_id": process.env.NEXT_PUBLIC_AUTH0_MTM_CLIENT_ID,
//         "client_secret": process.env.NEXT_PUBLIC_AUTH0_MTM_CLIENT_SECRET,
//         "audience":"https://dev-e1nzp8b5k2q30umh.us.auth0.com/api/v2/",
//         "grant_type":"client_credentials"
//     }
//     let options = { 
//         method: 'POST',
//         url: `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify(params)
//     }

//     return new Promise((resolve, reject)=>{
//         request(options,  (error:any, response:any, body:any)=> {
//           if (error || !body) reject(error)
//             resolve(JSON.parse(body))
//         });
//     })
// }


export const signuUpUserToAuth0 = async (body: UserSignupSchema)=>{
    if(!body.fName || !body.email || !body.password) return new Promise((resolve, reject)=>reject(new Error("Please provide all the required information")))
    
    const params = {
        client_id: process.env.AUTH0_CLIENT_ID,
        email: body.email,
        password: body.password,
        connection: "Username-Password-Authentication",
        name: body.fName,
    }

    
    return asyncRequestFetcher({
        url: `${process.env.AUTH0_ISSUER_BASE_URL}/dbconnections/signup`,
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(params)
    })
}



export const signupWithEmailPassword = async (body: UserSignupSchema) =>{
    if(!body.fName || !body.email || !body.password) {
        throw new Error("Please provide all the required information")
     }
     await signuUpUserToAuth0(body);     
}