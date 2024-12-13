"use client"

import FormComponent from '@/components/form/FormComponent';
import { Button } from '@/components/ui/button';
import Divider from '@/components/ui/Divider';
import { Input } from '@/components/ui/input';
import { GoogleLogo } from '@/components/ui/LogosCollection';
import Spinner from '@/components/ui/Spinner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter();

  return <div className='w-1/2 h-full flex flex-col justify-center items-center'>
  <div className="w-[clamp(320px,100%,400px)] flex flex-col justify-center items-center">
    <h1 className='font-bold text-5xl mb-3 text-center'>Signup to MAGM</h1>
    <h6 className='text-slate-400 text-xs mb-11 text-center'>Signup to the MAGM platform to perform experiments in the bio photo reactor</h6>
    <FormComponent
      className='w-full mb-5'
      fetcherConfig={{
        method: "POST",
        url: "/api/user/signup",
        body: {
          signupMethod: "email-password"
        }
      }}
      successFn={()=>router.push("/api/auth/login")}
    >
      <Input className='w-full' required name="fName" id="fName"  placeholder="Full Name"/>
      <Input className='w-full' required name="email" id="email" type="email" placeholder="Email"/>
      <Input className='w-full' required name="password" id="password" type='password'  placeholder="Password"/>
    </FormComponent>
    <Divider
      bgColor="bg-white"
      text="OR CONTINUE WITH"
      className='text-xs text-slate-400 mb-7'
    />
    <GoogleSignupButton/>
  </div>
  <h6 className="text-slate-400 text-xs">Already have an account? <Link href="/api/auth/login" className="text-primary pointer font-bold underline">Login</Link> </h6>

</div>
}



const GoogleSignupButton = ()=>{
  const [submit, setSubmit] = React.useState(false)
  const router = useRouter()

  return <Button onClick={()=>{
    setSubmit(true)
    const params = `response_type=token&client_id=${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}&connection=google-oauth2&redirect_uri=${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}` 
    router.push(`${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}/authorize?${params}`)
  }} disabled={submit} variant="outline" className='gap-2 w-full mb-5'>
    {submit? <Spinner/> : <>
      <GoogleLogo
        width={17}
        height={18}
      />
      Continue with Google
    </>}
  </Button>
}

export default Page