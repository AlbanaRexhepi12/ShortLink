'use client'
import { useState } from 'react'
import Sidebar from './Sidebar'
import CreateForm from './CreateForm'

export default function Main({ shortLinks }) {
  const [shortLinksToDisplay, setShortLinksToDisplay] = useState(
    shortLinks || []
  )

  return (
    <div className='flex h-screen'>
      <Sidebar
        shortLinksToDisplay={shortLinksToDisplay}
        setShortLinksToDisplay={setShortLinksToDisplay}
      />
      <CreateForm
        shortLinksToDisplay={shortLinksToDisplay}
        setShortLinksToDisplay={setShortLinksToDisplay}
      />
    </div>
  )
}
