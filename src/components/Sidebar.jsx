'use client'

const { default: Image } = require('next/image')
const { default: Link } = require('next/link')

const host = process.env.HOST || 'http://localhost:3000'

export default function Sidebar({ shortLinksToDisplay, setShortLinksToDisplay }) {

  const handleDelete = async (shortLinkToDelete) => {
    const res = await fetch(`/api/shorten-url/${shortLinkToDelete.id}`, {
      method: 'DELETE'
    })
    const parsedRes = await res.json()
    if (parsedRes.success) {
      setShortLinksToDisplay([
        ...shortLinksToDisplay.filter(
          (shortLink) => shortLink.id !== shortLinkToDelete.id
        )
      ])
    }
  }

  return (
    <div className='w-[25%] h-full bg-gray-200 flex flex-col pt-20'>
      <div className='px-[15%]'>
        <img
          src='/images/AnchorzUpLogo.svg'
          alt='Logo'
          className='w-[45%] pb-14'
        />
        <h1 className='py-4 text-black font-bold text-2xl'>
          My shortened URLs
        </h1>
        <div className='flex flex-col gap-1'>
          {shortLinksToDisplay.map((shortLink, i) => (
            <div key={i}>
              <div className='flex justify-between'>
                <Link href={`${host}/${shortLink.alias}`}>
                  <p className='text-center p-1 text-[#4b98cc] font-bold text-m underline'>
                    {host}/{shortLink.alias}
                  </p>
                </Link>
                <button
                  className='text-center p-1 text-red-500 font-bold text-xl'
                  onClick={() => handleDelete(shortLink)}
                >
                  <Image src='/images/trash_icon.png' width={16} height={16} />
                </button>
              </div>
              <p className='text-sm pl-1 text-[#9bb7f4]'>
                This link has been clicked {shortLink.clickCount} time
                {shortLink.clickCount !== 1 ? 's' : ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
