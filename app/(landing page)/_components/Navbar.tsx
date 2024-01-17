"use client"
import useScroll from '@/components/hooks/useScroll'
import React from 'react'
import { cn } from '@/lib/utils'
import Logo from './Logo'
import { ModeToggle } from '@/components/ThemeModeToggle'
import { UserButton, useAuth } from '@clerk/nextjs'

type Props = {}

function Navbar({}: Props) {

    const isScrolled = useScroll();
    const {userId,isLoaded} = useAuth()
  return (
    <div 
    className={cn("w-full p-4 flex items-center",
    isScrolled && "border-b shadow-md")}>
        <Logo />
        <div className='flex items-center space-x-4 ml-auto'>
        {isLoaded && userId && <UserButton />}
        <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar