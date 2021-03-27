import { SignOptions } from "jsonwebtoken"

export const PORT = process.env.PORT || 4000
//IRclbbwlmfPjNjIU
export const DB_URI = process.env.DB_URI as string

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string
export const JWT_CONFIG = {
  expiresIn: "30min"
} as SignOptions