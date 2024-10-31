import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import "./Rootlayout.css"
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const queryClient = new QueryClient();

const Rootlayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
    <div className='rootlayout'>
        <header>
            <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
            
            </Link>

            <div className="user">
                <SignedIn>
                <UserButton />
              </SignedIn>
                
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
    </QueryClientProvider>
    </ClerkProvider>
  )
}

export default Rootlayout