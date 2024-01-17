import Image from 'next/image'
import Heading from './_components/Heading'
import Footer from './_components/Footer'
import { Button } from '@/components/ui/button'
import Navbar from './_components/Navbar'

export default function LandingPage() {
  return (
    <div 
    className='flex flex-col items-center
              gap-y-4 min-h-full'>
        <Navbar />
        <div className='flex-1 text-center'>
            <Heading />
           
        </div>  
        
        <Footer />
        
    </div>
    
  )
}
