import { useState } from 'react'
import Dropdown from './Dropdown'

const emptyOption = {
  label: 'Select an option'
}

const expirationOptions = [
  {
    label: '1 minute',
    value: 60
  },
  {
    label: '5 minutes',
    value: 5 * 60
  },
  {
    label: '30 minutes',
    value: 30 * 60
  },
  {
    label: '1 hour',
    value: 60 * 60
  },
  {
    label: '5 hours',
    value: 5 * 60 * 60
  }
]

export default function CreateForm({
  shortLinksToDisplay,
  setShortLinksToDisplay
}) {
  const [url, setUrl] = useState('')
  const [selectedExpirationOption, setSelectedExpirationOption] =
    useState(emptyOption)

  const handleSelectOption = (option) => {
    setSelectedExpirationOption(option)
  }
  const handleToggle = () => setIsOpen(!isOpen)

  const handleShortenUrl = async () => {
    const res = await fetch('/api/shorten-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url,
        expirationTime: selectedExpirationOption.value || 30 * 60
      })
    })
    const parsedRes = await res.json()
    if (parsedRes.success) {
      setShortLinksToDisplay([...shortLinksToDisplay, parsedRes.shortLink])
    }
    setUrl('')
    setSelectedExpirationOption(emptyOption)
  }

  return (
    <div className='flex-1 h-full bg-white'>
      <div className='pt-28 pl-28 pr-14 h-screen'>
        <h1 className='pb-4 text-black font-bold text-4xl'>URL Shortener</h1>
        <div className='flex gap-4 text-gray-500'>
          <input
            placeholder='Paste the URL to be shortened'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='w-[70%] h-10 px-4 border border-black'
            type='text'
          />
          <Dropdown handleSelectOption={handleSelectOption} options={expirationOptions} selectedOption={selectedExpirationOption} />
        </div>
        <button
          className='w-[15%] bg-[#92278f] text-white text-lg p-3 mt-10'
          onClick={handleShortenUrl}
        >
          Shorten URL
        </button>
      </div>
    </div>
  )
}
