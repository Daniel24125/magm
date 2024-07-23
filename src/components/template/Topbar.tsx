import { PageContextProvider } from '@/contexts/PageContext'
import React from 'react'
import { Button } from '../ui/button'
import { Bell } from 'lucide-react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Avatar, AvatarImage } from '../ui/avatar'

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
      <AccountComponent />
    </div>
  )
}

const AccountComponent = ()=>{
  return <div className='flex gap-5'>
    <NotificationsComponent/>
    <AccountInfoComponent/>
  </div>
}

const NotificationsComponent =()=>{
  return <Button variant="outline" size="icon">
    <Bell />
  </Button>
}

const AccountInfoComponent = ()=>{
  const {user} = useUser()
  
  return <Button variant="outline" className='gap-3'>
      Wecome Daniel Madalena
    <Avatar className='w-8 h-8'>
      <AvatarImage  src={String(user?.picture)}/>
    </Avatar>
  </Button>
}

export default Topbar