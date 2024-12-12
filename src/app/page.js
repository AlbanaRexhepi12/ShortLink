import Main from '@/components/Main'
import { connectToDatabase } from '@/lib/mongo-client'
import ShortLinkModel from '@/mongo-db/models/short-url'

export default async function Home() {
  await connectToDatabase()
  const shortLinks = await ShortLinkModel.find({})
  console.log(shortLinks)
  return (
    <Main
      shortLinks={shortLinks.map((shortLink) => ({
        id: shortLink.id,
        url: shortLink.url,
        alias: shortLink.alias,
        clickCount: shortLink.clickCount
      }))}
    />
  )
}
