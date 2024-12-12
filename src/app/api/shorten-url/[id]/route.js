import ShortLink from '../../../../mongo-db/models/short-url'

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400
      })
    }

    const deletedShortLink = await ShortLink.findByIdAndDelete(id)

    if (!deletedShortLink) {
      return new Response(JSON.stringify({ error: 'ShortLink not found' }), {
        status: 404
      })
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'ShortLink deleted successfully'
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error({ prefix: 'DeleteShortLink', error })

    return new Response(
      JSON.stringify({
        error: 'An error occurred while processing the request'
      }),
      { status: 500 }
    )
  }
}
