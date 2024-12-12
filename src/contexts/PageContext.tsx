"use client"

import React from 'react'

export type TPageParamsSchema = {
    title?: string
}

export const PageContextProvider = React.createContext<{
    pageParams?: TPageParamsSchema, 
    updatePageParams?: (newValue: TPageParamsSchema)=>void
} | null>(null)

const PageContext = ({
    children
}:{
    children: React.ReactNode
}) => {
    //@ts-ignore
    const [pageParams, setPageParams] = React.useState<TPageParamsSchema>({
        title: "Dashboard"
    })

    const updatePageParams = (newValue: any)=>{
        setPageParams((prev: TPageParamsSchema)=>{
            return {
                ...prev, 
                ...newValue
            }
        })
    }

    


    return (<PageContextProvider.Provider value={{pageParams, updatePageParams}}>
      {children}
  </PageContextProvider.Provider>
  )
}

export default PageContext