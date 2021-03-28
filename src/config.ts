import { SignOptions } from "jsonwebtoken"
import { ConfigOptions } from "cloudinary"

//app
export const PORT = process.env.PORT || 7000
export const DB_URI = process.env.DB_URI as string

//auth
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string
export const JWT_CONFIG = {
  expiresIn: "30min"
} as SignOptions

//upload
export const CLOUDINARY_FOLDER = "hackathon-smiles"
export const CLOUDINARY_CONFIG = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
} as ConfigOptions

//quiz
export const QUIZ_CODE_KEY = process.env.QUIZ_CODE_KEY