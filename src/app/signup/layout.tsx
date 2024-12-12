"use client"
import { Logo } from '@/components/ui/LogosCollection';
import { possibleVideoLinks } from '@/utils/utils';
import React from 'react'

const SignupLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return <div className='w-screen h-screen flex'>
    <VideoComponent/>
    {children}
  </div>
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


export default SignupLayout