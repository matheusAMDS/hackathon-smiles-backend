import { NextFunction, Request, Response } from "express"
import { Role } from "../../models/User"

function checkRole(role: Role) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.role !== role)
      return res.status(403).json({ error: "User role must be of " + role })

    next()
  }
}

export default checkRole