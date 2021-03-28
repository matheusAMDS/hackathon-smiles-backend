import { Request, Response } from "express"

import createPostUseCase from "../useCases/post/createPostUseCase"
import indexPostUseCase from "../useCases/post/indexPostUseCase"
import showPostUseCase from "../useCases/post/showPostUseCase"

class PostController {
  async index(req: Request, res: Response) {
    const posts = await indexPostUseCase()

    return res.json({ 
      total: posts.length, 
      posts 
    })
  }

  async show(req: Request, res: Response) {
    const id = req.params.id
    
    try {
      const post = await showPostUseCase({ id })

      return res.json({ post })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async create(req: Request, res: Response) {
    const { title, content } = req.body
    let thumbnail = req.file.path
    
    try {
      const post = await createPostUseCase({ title, content, thumbnail })

      return res.json({ post })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export default new PostController()