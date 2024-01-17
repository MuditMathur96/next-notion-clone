"use client"
import useScroll from '@/components/hooks/useScroll'
import React from 'react'
import { cn } from '@/lib/utils'
import Logo from './Logo'
import { ModeToggle } from '@/components/ThemeModeToggle'

type Props = {}

function Navbar({}: Props) {

    const isScrolled = useScroll();
  return (
    <div 
    className={cn("w-full p-4 flex items-center",
    isScrolled && "border-b shadow-md")}>
        <Logo />
        <div className='ml-auto'>
        <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar