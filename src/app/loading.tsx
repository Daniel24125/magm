import React from 'react'

const loading = () => {
  return <div className={`fixed w-screen h-screen bg-white transition-all duration-1000 top-0 left-0 flex flex-col justify-center items-center z-50`}>
      <div className={`loadingWrapper flex justify-center items-center`}>
          <p><span></span></p>
          <p><span></span></p>
      </div>
  </div>
}

export default loading