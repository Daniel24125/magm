import FormComponent from '@/components/FormComponent'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'
import React from 'react'

const ValidateUser = () => {
    const {user} = useUser()
    const router = useRouter()
    const { toast } = useToast()

    const handleToastClose = (successToast: any)=> {
        router.push("/")
        successToast.dismiss()
    }

    return (
        <div className='fixed top-0 left-0 bg-white w-screen h-screen flex justify-center items-center'>
            <div className='w-[clamp(300px,90vw,400px)] p-6 border-[1px] rounded-md'>
                
                <h1 className='font-bold text-3xl mb-3'>Complete your profile</h1>
                <h6 className='text-slate-400 text-xs mb-5 '>We just need a last bit of information to complete your account profile</h6>
                <FormComponent
                    fetcherConfig={{
                        url: "/api/user/signup",
                        method: "POST",
                        body: {
                            email: user?.email
                        }
                    }}
                    successFn={()=>{
                        const successToast = toast({
                            title: "Profile Update",
                            description: "Your profile was successfully updated!",
                            action: <Button onClick={()=>handleToastClose(successToast)}>Close</Button>
                          })
                          setTimeout(()=>{
                            handleToastClose(successToast)
                          },3000)
                    }}
                >
                    <Input className='w-full' required id="fName"  placeholder="Full Name"/>

                </FormComponent>
                <h6 className='text-slate-400 text-xs text-center '>{user?.email}</h6>

            </div>
        </div>
    )
}

export default ValidateUser