import { Request, Response } from "express"
import showUserUseCase from "../useCases/user/showUserUseCase"

class UserController {
  async show(req: Request, res: Response) {
    const userId = req.userId

    try {
      const user = await showUserUseCase({ userId })

      return res.json(user)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async update(req: Request, res: Response) {
    
  }
}

export default new UserController()