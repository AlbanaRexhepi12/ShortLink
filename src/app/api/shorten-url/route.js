import ShortLink from '../../../mongo-db/models/short-url'

export async function POST(request) {
  try {
    const { url, expirationTime } = await request.json()

    if (!url || !expirationTime) {
      return new Response(
        JSON.stringify({ error: 'URL and expirationTime are required' }),
        { status: 400 }
      )
    }

    const shortLink = new ShortLink({
      url,
      alias: generateAlias(),
      expirationTime: new Date(Date.now() + expirationTime * 1000),
      clickCount: 0
    })

    await shortLink.save()

    return new Response(JSON.stringify({ success: true, shortLink }), {
      status: 200
    })
  } catch (error) {
    console.error({ prefix: 'SaveShortLink', error })

    return new Response(
      JSON.stringify({
        error: 'An error occurred while processing the request'
      }),
      { status: 500 }
    )
  }
}

function generateAlias () {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let alias = ''
  for (let i = 0; i < 5; i++) {
    alias += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return alias
}
