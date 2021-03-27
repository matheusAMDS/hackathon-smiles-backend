import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

import { JWT_SECRET_KEY } from "../../config"

async function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ 
      error: "No 'authorization' header provided" 
    })
  }

  const [_, token] = authorization.split(' ')

  if (!token) {
    return res.status(401).json({
      error: "No token provided"
    })
  }
    
  const decoded = jwt.verify(token, JWT_SECRET_KEY)
  console.log(decoded)
  next()
}

export default authenticate