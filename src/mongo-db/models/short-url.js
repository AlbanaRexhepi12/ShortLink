import mongoose from 'mongoose'
const { Schema, model } = mongoose

const shortUrl = new Schema({
  url: String,
  alias: String,
  expirationTime: {
    type: Date,
    required: true,
    index: { expireAfterSeconds: 0 }
  },
  clickCount: Number,
  createdAt: Date,
  updatedAt: Date
}, { timestamps: true })

const ShortUrl = mongoose.models.ShortUrl || model('ShortUrl', shortUrl)
export default ShortUrl
