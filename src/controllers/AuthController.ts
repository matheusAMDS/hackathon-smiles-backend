import { Request, Response } from "express"

import signUpUseCase from "../useCases/auth/signUpUseCase"
import signInUseCase from "../useCases/auth/signInUseCase"

class AuthController {
  async signin(req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const { user, token } = await signInUseCase({ email, password })

      return res.json({ user, token })
    } catch (error) {
      return res.status(401).json({ error: error.message })
    }
  }

  async signup(req: Request, res: Response) {
    const { name, email, password, location } = req.body

    try {
      const user = await signUpUseCase({ name, email, password, location })

      return res.json({ user })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export default new AuthController()