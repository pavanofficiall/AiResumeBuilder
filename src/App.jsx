import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import Header from './custom/Header'

function App() {
  const [count, setCount] = useState(0);
  const {user,isLoaded,isSignedIn}=useUser();

  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'} />
  }
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App