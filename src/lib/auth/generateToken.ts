import jwt from "jsonwebtoken"

import { JWT_CONFIG, JWT_SECRET_KEY } from "../../config"

export interface Payload {
  id: string
  role: string
}

function generateToken(payload: Payload) {
  return jwt.sign(payload, JWT_SECRET_KEY, JWT_CONFIG)
}

export default generateToken