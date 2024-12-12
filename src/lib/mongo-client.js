import mongoose from 'mongoose'

let isConnected = false

export async function connectToDatabase() {
  if (isConnected) return

  try {
    const uri =
      process.env.MONGODB_URI
    if (!uri)
      throw new Error('Please define MONGODB_URI in the environment variables')

    await mongoose.connect(uri)
    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}
