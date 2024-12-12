import { PageContextProvider } from '@/contexts/PageContext'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { UserContextProvider } from '@/contexts/UserProvider'
import { IUserSchema } from '@/types/User'

const Topbar = () => {
  //@ts-ignore
  const {pageParams} = React.useContext(PageContextProvider)

  return (
    <div className={`h-20 flex justify-between items-center`}>
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
    <Bell size={20}/>
  </Button>
}

const AccountInfoComponent = ()=>{
  //@ts-ignore
  const {user} = React.useContext<IUserSchema>(UserContextProvider)

  return <Button variant="outline" className='gap-3'>
      Wecome {user? user.fName.split(" ")[0] : ""}!
    <Avatar className='w-7 h-7'>
      <AvatarImage  src={String(user?.picture)}/>
    </Avatar>
  </Button>
}

export default Topbar