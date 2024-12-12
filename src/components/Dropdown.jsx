import { useState } from 'react'

export default function Dropdown({ handleSelectOption, options, selectedOption }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative w-full max-w-xs'>
      <button
        id='custom-select'
        className='w-full flex justify-around p-2 border border-black'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption.label}</span>
        <svg
          className='w-4 h-4 inline-block ml-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 -3 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className='absolute left-0 right-0 mt-1 border border-black'>
          <ul className='py-1 divide-y divide-black'>
            {options.map((option, i) => (
              <li key={i}>
                <button
                  className='block w-full text-center px-4 py-2 text-md hover:bg-gray-100'
                  onClick={() => {
                    setIsOpen(false)
                    handleSelectOption(option)
                  }}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
