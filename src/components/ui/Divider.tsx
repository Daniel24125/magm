import React from 'react'

const Divider = ({
    text,
    className,
    bgColor="bg-white"
}:{
    bgColor: string,
    text?: string,
    className?: string,
}) => {
  return (
    <div className={`bg-slate-200 mb-5 w-full h-[2px] relative ${className}`}>
        {text && <span className={`${bgColor} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2`}>
            {text}
        </span>}
    </div>
    )
}

export default Divider