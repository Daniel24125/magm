import React from 'react'
import {GoogleLogo, Logo} from "@/components/design/LogosCollection"
import FormComponent from '@/components/FormComponent'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { possibleVideoLinks } from '../../utils/utils'
import { useRouter } from 'next/router'
import Divider from '@/components/design/Divider'
import { Button } from '@/components/ui/button'
import Spinner from '@/components/design/Spinner'

const Signup = () => {
  return (
    <div className='w-screen h-screen flex'>
      <VideoComponent />
      <SignupFormComponent/>
    </div>
  )
}

const VideoComponent = ()=>{

  React.useEffect(()=>{
    let videoIndex : number = Number((Math.random()*possibleVideoLinks.length).toFixed(0));
    let videoSource: HTMLVideoElement | null = document.getElementById("video") as HTMLVideoElement
    if(videoSource) {
      videoSource.src = possibleVideoLinks[videoIndex] 
    }

  },[])
  

  return <div className={`w-1/2 h-full relative overflow-hidden after:content-[""] after:w-full after:h-full after:bg-[#00000080] after:absolute after:left-0 after:top-0 after:z-0 `}>
    <video className='z-0 w-full' autoPlay muted loop>
      <source id="video" src="https://res.cloudinary.com/dcp3h85ie/video/upload/v1719765588/18749462-uhd_2160_3840_60fps_xngqt8.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
      <Logo height={50}/>
    </div>
  </div>
}


const SignupFormComponent = ()=>{
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
        <Input className='w-full' required id="fName"  placeholder="Full Name"/>
        <Input className='w-full' required id="email" type="email" placeholder="Email"/>
        <Input className='w-full' required id="password" type='password'  placeholder="Password"/>
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

export default Signup