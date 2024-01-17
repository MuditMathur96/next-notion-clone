import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='w-full p-4 flex justify-between'>
        <Logo />
        <p >copyright@2024 Mudit Mathur </p>
        <div></div>
    </div>
  )
}

export default Footer