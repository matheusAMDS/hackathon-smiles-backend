import { Request, Response } from "express"
import { TopicModel } from "../models/Topic"

class TopicController {
  async index(req: Request, res: Response) {
    const topics = await TopicModel.find()

    return res.json({ topics })
  }
}

export default new TopicController()