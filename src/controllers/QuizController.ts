import { Request, Response } from "express"

import { QuizQuestionModel } from "../models/QuizQuestion"
import getQuizByTopiclUseCase from "../useCases/quiz/getQuizByTopicUseCase"

class QuizController {
  async show(req: Request, res: Response) {
    const { topic } = req.params
    const amount = req.query.amount ? Number(req.query.amount) : 3

    try {
      const quiz = await getQuizByTopiclUseCase({
        topic,
        amount
      })
  
      return res.json(quiz)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async create(req: Request, res: Response) {
    const question = await QuizQuestionModel.create(req.body)

    return res.json({ question })
  }
}

export default new QuizController()