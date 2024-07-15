import React from 'react'
import {Logo} from "@/components/design/LogosCollection"
import { possibleVideoLinks } from '../../utils/utils'
import FormComponent from '@/components/FormComponent'
import { Input } from '@/components/ui/input'

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
  
  return <div className='w-1/2 h-full flex flex-col justify-center items-center'>
    <div className="w-[clamp(320px,100%,400px)] flex flex-col justify-center items-center">
      <h1 className='font-bold text-5xl mb-3 text-center'>Signup to MAGM</h1>
      <h6 className='text-slate-400 text-xs mb-11 text-center'>Signup to the MAGM platform to perform experiments in the bio photo reactor</h6>
      <FormComponent className='w-full'>
        <Input className='w-full' required id="fName"  placeholder="Full Name"/>
        <Input className='w-full' required id="email" type="email" placeholder="Email"/>
        <Input className='w-full' required id="password" type='password'  placeholder="Password"/>
      </FormComponent>
    </div>
  </div>
}

export default Signup