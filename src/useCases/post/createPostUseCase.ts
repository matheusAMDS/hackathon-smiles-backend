import { PostModel } from "../../models/Post"

interface CreatePostParams {
  title: string 
  content: string 
  thumbnail: string
}

async function createPostUseCase(params: CreatePostParams) {
  const { title, content, thumbnail } = params
  const post = await PostModel.create({
    title,
    content,
    thumbnail
  })

  return post
}

export default createPostUseCase