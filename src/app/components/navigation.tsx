"use client"
import React from 'react'
import { Logo } from '@/components/ui/LogosCollection'
import { Button } from '@/components/ui/button'
import { ChevronRight, LayoutDashboard, LogOut, PanelsTopLeft, Settings, X } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useRouter, usePathname  } from 'next/navigation'

const Navigation = () => {

  return (
    <nav className={"w-72 bg-[#F5F7FA] px-6 relative"}>
        <header className='h-20 w-full flex items-center justify-between mb-28'>
          <Logo width={80} height={50} textColor='black'/>
          <Button variant="ghost" size="icon" >
              <X size={18}/>
          </Button>
        </header>
        <NavigationButtons/>
        <Separator className='mt-20 mb-10'/>
        <OnGoingExperimentComponent/>
        <SettingsComponent/>
    </nav>
  )
}


const NavigationButtons= ()=>{
  const router = useRouter()
  const pathname = usePathname()

  return <div className='w-full flex flex-col gap-8'>
    <NavigationButton
      onClick={()=>router.push("/")}
      active={pathname === "/"}
      icon={ <LayoutDashboard/>}
      title='Dashboard'
    />
    <NavigationButton
      onClick={()=>router.push("/projects")}
      active={pathname === "/projects"}
      icon={ <PanelsTopLeft/>}
      title='Projects'
    />
  </div>
}

const NavigationButton = ({
  onClick,
  active,
  title,
  icon
}: {
  onClick: any,
  active: boolean,
  title: string,
  icon: any
})=>{
  const commonClass = "justify-start gap-3 hover:bg-[#E3E8EF]"
  return <Button 
    variant="ghost" 
    onClick={onClick}
    className={`${commonClass} ${active? "bg-[#E3E8EF]": ""}`}
  >
   {icon} {title}
  </Button>
}

const OnGoingExperimentComponent = ()=>{
  return <div className='flex justify-between items-center'>
    <h6 className='text-xs'>Ongoing Experiments</h6>
    <Button className="bg-[#D0E9D5] text-primary w-7 h-7 hover:bg-[#acceb2]" size="icon">
      <ChevronRight size={17}/>
    </Button>
  </div>
}

const SettingsComponent = ()=>{
  const router = useRouter()

  return <div className='absolute bottom-0 left-0 pb-10 px-6  w-full flex flex-col gap-4'>
    <NavigationButton
      onClick={()=>router.push("/settings")}
      active={false}
      icon={ <Settings/>}
      title='Settings'
    />
    <NavigationButton
      onClick={()=>router.push("/auth/logout")}
      active={false}
      icon={ <LogOut/>}
      title='Logout'
    />
  </div>
}
export default Navigation