import  Sidebar  from './_components/Sidebar'
import React from 'react'

type Props = {}

function DocumentsPage({}: Props) {
  return (
    <div className='flex h-full'>
        <Sidebar />
        <main>
            Main Content
        </main>
    </div>
  )
}

export default DocumentsPage