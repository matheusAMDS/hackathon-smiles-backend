import { MileModel } from "../../models/Mile"
import { UserModel } from "../../models/User"

interface RetrieveQuizMilesParams {
  code: string
  userId: string 
}

async function retrieveQuizMilesUseCase(params: RetrieveQuizMilesParams) {
  const { code, userId } = params

  try {
    const mile = await MileModel.create({
      amount: 200,
      code,
    })
    const user = await UserModel.findByIdAndUpdate(userId, {
      $push: { miles: mile._id }
    }, { new: true })

    return { mile, user }
  } catch (error) {
    throw error
  }
}

export default retrieveQuizMilesUseCase