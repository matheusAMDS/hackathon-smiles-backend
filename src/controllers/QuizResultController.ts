import { Request, Response } from "express"

import retrieveQuizMilesUseCase from "../useCases/quiz/retriveQuizMilesUseCase"

class QuizResultController {
  async create(req: Request, res: Response) {
    const { code } = req.body
    const userId = req.userId

    try {
      const result = await retrieveQuizMilesUseCase({ code, userId })

      return res.json({ result })
    } catch (error) {
      return res.status(403).json({ error: error.message })
    }
  }
}

export default new QuizResultController()