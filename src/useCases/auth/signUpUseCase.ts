import bcrypt from "bcryptjs"

import { UserModel, Role } from "../../models/User"

interface SignUpParams {
  name: string 
  email: string 
  password: string
  location: string
  avatar?: string
}

async function signUpUseCase(params: SignUpParams) {
  const { name, email, password, location, avatar } = params
  
  let user = await UserModel.findOne({ email })

  if (user) 
    throw new Error("E-mail already being used")

  user = await UserModel.create({
    name,
    email,
    location,
    role: Role.BASIC,
    miles: [],
    avatar,
    password: await bcrypt.hash(password, 12)
  })

  return user
}

export default signUpUseCase