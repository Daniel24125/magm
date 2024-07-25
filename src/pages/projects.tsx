import { PageContextProvider } from '@/contexts/PageContext'
import React from 'react'

const Projects = () => {
    //@ts-ignore
    const {updatePageParams} = React.useContext(PageContextProvider)

    React.useEffect(()=>{
        updatePageParams({title: "Projects"})
      },[])
  return (
    <div></div>
  )
}

export default Projects