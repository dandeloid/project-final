import mongoose from "mongoose"

const VinylSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    genre: {
      type: String,
      enum: ["Pop", "Hip hop", "Rock", "Electronic"],
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      enum: ["SEK", "USD", "EUR"],
    },
    nrStock: {
      type: Number,
    },
    brand: {
      type: String,
    },
    rating: {
      type: Number,
    },
    nrRating: {
      type: Number,
    },
    release: {
      type: Date,
    },
    about: {
      type: String,
      maxlength: 900,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

export default VinylSchema
