import { UserSignupSchema } from "@/types/User";
import { Auth0Client } from "@auth0/nextjs-auth0/server"


export const auth0 = new Auth0Client({
    domain: process.env.AUTH0_ISSUER_BASE_URL,
    clientId: process.env.AUTH0_CLIENT_ID,
    appBaseUrl: process.env.AUTH0_BASE_URL
})


export const signuUpUserToAuth0 = async (body: UserSignupSchema)=>{
    if(!body.fName || !body.email || !body.password) return new Promise((resolve, reject)=>reject(new Error("Please provide all the required information")))
    
    const params = {
        client_id: process.env.AUTH0_CLIENT_ID,
        email: body.email,
        password: body.password,
        connection: "Username-Password-Authentication",
        name: body.fName,
    }

    return await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/dbconnections/signup`,{
        method: "POST",
        body: JSON.stringify(params),
        headers: { 'content-type': 'application/json' }
    }).then(res=>res.json())
}



export const signupWithEmailPassword = async (body: UserSignupSchema) =>{
    if(!body.fName || !body.email || !body.password) {
        throw new Error("Please provide all the required information")
     }
    return await signuUpUserToAuth0(body);     
}

