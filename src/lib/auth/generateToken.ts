import jwt from "jsonwebtoken"

import { JWT_CONFIG, JWT_SECRET_KEY } from "../../config"

interface Payload {
  id: string
}

function generateToken(payload: Payload) {
  return jwt.sign(payload, JWT_SECRET_KEY, JWT_CONFIG)
}

export default generateToken