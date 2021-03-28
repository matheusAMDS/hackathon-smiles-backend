import { PostModel } from "../../models/Post"

interface ShowPostParams {
  id: string 
}

async function showPostUseCase(params: ShowPostParams) {
  const { id } = params 
  const post = await PostModel.findById(id)

  return post
}

export default showPostUseCase