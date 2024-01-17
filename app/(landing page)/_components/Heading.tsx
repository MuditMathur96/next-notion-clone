import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

type Props = {}

function Heading({}: Props) {
  return (
    <div className='max-w-4xl space-y-8'>
      <h1 
      className='text-3xl sm:text-5xl md:text-6xl
                font-bold'>
              Your Ideas, Documents, & Plans. Unified. 
              Welcome to <span className='underline'>Motion</span>
      </h1>

      <Button
        className='gap-x-2'>
        Join Now
        <ArrowRight />
      </Button>

    </div>
  )
}

export default Heading