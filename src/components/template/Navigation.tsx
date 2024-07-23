import React from 'react'

const Navigation = ({
    size
}:{
    size: number
}) => {
    
  return (
    <nav className={`w-[${size}px] bg-[#F5F7FA]`}>
        Nav
    </nav>
  )
}

export default Navigation