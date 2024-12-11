"use client"

import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';

const Nav = () => {
  const { user, error, isLoading } = useUser();

  const isAuthenticated = React.useMemo(()=>{
    return user && !isLoading
  }, [user, isLoading])


  return isAuthenticated ? <nav>
    NAV
  </nav>: null
}

export default Nav