import React from 'react'
import AuthButtons from './AuthButtons';

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

      <AuthButtons />

    </div>
  )
}

export default Heading