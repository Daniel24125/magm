import { PageContextProvider } from '@/contexts/PageContext'
import React from 'react'

const Topbar = ({
    size
}:{
    size: number
}) => {
  //@ts-ignore
  const {pageParams} = React.useContext(PageContextProvider)

  return (
    <div className={`h-[${size}px] flex justify-between items-center`}>
      <h6>{pageParams.title}</h6>
    </div>
  )
}

export default Topbar