"use client"
import Spinner from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { SignInButton, useAuth } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

function AuthButtons({ }: Props) {

    const { userId,isLoaded } = useAuth();

    if(!isLoaded){
        <Spinner />
    }

    if (isLoaded && !userId) {
        return <Button
            className='gap-x-2'
        >
            <SignInButton mode='modal' />
            <ArrowRight />

        </Button>
    }

    return (
        <Button
        className='gap-x-2'
        asChild
        >
            <Link href={"/documents"}>
            To Documents
            <ArrowRight />
            </Link>

        </Button>
    )
}

export default AuthButtons