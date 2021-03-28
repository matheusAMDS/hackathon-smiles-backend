import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

import { JWT_SECRET_KEY } from "../../config"
import { Payload } from "./generateToken"

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
    
  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(403).json({ error: err.message })
      
    const user = decoded as Payload
    req.userId = user.id
    req.role = user.role
    next()
  })
  
  
}

export default authenticate