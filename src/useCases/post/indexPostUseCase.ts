import { PostModel } from "../../models/Post"

async function indexPostUseCase() {
  const posts = await PostModel.find().sort({ created_at: -1 })

  return posts
}

export default indexPostUseCase