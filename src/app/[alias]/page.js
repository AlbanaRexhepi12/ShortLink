import { connectToDatabase } from '@/lib/mongo-client'
import ShortLinkModel from '@/mongo-db/models/short-url'
import { notFound, redirect } from 'next/navigation'

export default async function Home({ params }) {
  await connectToDatabase()

  const { alias } = params
  const shortLink = await ShortLinkModel.findOne({alias})
  if (shortLink) {
    shortLink.clickCount = shortLink.clickCount + 1
    await shortLink.save()
    return redirect(shortLink?.url || '')
  }

  return notFound()

}
