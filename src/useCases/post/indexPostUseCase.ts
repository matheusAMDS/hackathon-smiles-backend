import { PostModel } from "../../models/Post"

async function indexPostUseCase() {
  const posts = await PostModel
    .find()
    .sort({ created_at: -1 })
    .select(["title", "thumbnail"])

  return posts
}

export default indexPostUseCase