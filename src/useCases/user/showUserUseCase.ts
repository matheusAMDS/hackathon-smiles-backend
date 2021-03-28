import { UserModel } from "../../models/User"
import { Mile } from "../../models/Mile"

interface ShowUserParams {
  userId: string 
}

async function showUserUseCase(params: ShowUserParams) {
  const { userId } = params
  const user = await UserModel.findById(userId).populate("miles")
  const miles = user.miles as Mile[]
  const milesAmount = miles
    .map(mile => mile.amount)
    .reduce((prev, now) => prev + now)

  return {
    user: {
      name: user.name,
      email: user.email,
      location: user.location,
      avatar: user.avatar,
      role: user.role,
      miles: milesAmount
    }
  }
}

export default showUserUseCase