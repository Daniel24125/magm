import React from 'react'

const SignupLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='w-screen flex justify-between'>
        <div className='hidden md:flex w-1/2'>
            <video className='w-full h-full' autoPlay muted loop>
                <source id="video" src="https://res.cloudinary.com/dcp3h85ie/video/upload/v1719765588/18749462-uhd_2160_3840_60fps_xngqt8.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
        </div>

    </div>
  )
}

export default SignupLayout